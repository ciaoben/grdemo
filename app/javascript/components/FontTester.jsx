import React, { useState, useEffect, useRef } from "react";

const loadFonts = async (fontFiles) => {
  const toLoad = [];

  for (let f of fontFiles) {
    const fontFile = new FontFace(f.name, `url(${f.url})`);
    document.fonts.add(fontFile);
    toLoad.push(fontFile);
  }

  try {
    await Promise.all(toLoad.map((font) => font.load()));
  } catch (e) {
    // drill down to thw specific font that failed
    for (let font of toLoad) {
      await font.load().catch((err) => {
        console.log("Error loading", font);
        console.log(err);
      });
    }
  }

  return true;
};

const THEMES = [
  {
    preview: "white",
    bg: "white",
    fg: "black",
  },
  {
    preview: "var(--gumroad-black)",
    bg: "var(--gumroad-black)",
    fg: "var(--gumroad-yellow)",
  },
  {
    preview: "var(--gumroad-pink)",
    bg: "var(--gumroad-pink)",
    fg: "var(--gumroad-purple)",
  },
  {
    preview: "var(--gumroad-orange)",
    bg: "var(--gumroad-orange)",
    fg: "var(--gumroad-red)",
  },
  {
    preview: "var(--gumroad-purple)",
    bg: "var(--gumroad-purple)",
    fg: "var(--gumroad-pink)",
  },
  {
    preview: "var(--gumroad-red)",
    bg: "var(--gumroad-red)",
    fg: "var(--gumroad-yellow)",
  },
];

export default (props) => {
  const [word, setWord] = useState("Gumroad Rocks! <br/> FLEXILE \n HELPER.ai");
  const [activeFont, setActiveFont] = useState("Lemon Wide");
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const [activeSize, setActiveSize] = useState(120);
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    if (!window.fontFiles) return;
    loadFonts(window.fontFiles);
    setActiveFont(window.fontFiles[0].name);
    setFonts(window.fontFiles);
  }, []);

  const increase = () => {
    if (activeSize >= 160) return;
    setActiveSize(activeSize + 6);
  };

  const decrease = () => {
    if (activeSize <= 16) return;
    setActiveSize(activeSize - 6);
  };

  return (
    <div>
      <div className="ft-controls">
        <div className="ft-control-variant">
          <label>Variant</label>
          <div className="ft-font-picker">
            {fonts.map((font) => (
              <div
                key={font.name}
                onClick={() => setActiveFont(font.name)}
                className={`ft-font-toggle ${
                  activeFont === font.name ? "active" : ""
                }`}
              >
                {font.name}
              </div>
            ))}
          </div>
        </div>

        <div className="ft-control-theme-and-size">
          <div>
            <label>Theme</label>
            <div className="ft-theme-picker">
              {THEMES.map((theme) => (
                <div
                  className={`ft-theme-toggle ${
                    activeTheme.preview === theme.preview ? "active" : ""
                  }`}
                  key={theme.preview}
                  onClick={() => setActiveTheme(theme)}
                  style={{ backgroundColor: theme.preview }}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <label>Font size</label>
            <div className="ft-size-picker">
              <div
                className="ft-size-toggle"
                disabled={activeSize <= 16}
                onClick={decrease}
              >
                -
              </div>

              <div className="">{activeSize} px</div>

              <div
                className="ft-size-toggle"
                disabled={activeSize >= 160}
                onClick={increase}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="ft-widget"
        style={{
          fontFamily: activeFont,
          backgroundColor: activeTheme.bg,
          color: activeTheme.fg,
        }}
      >
        <div
          contentEditable
          suppressContentEditableWarning={true}
          style={{
            fontFamily: activeFont,
            fontSize: activeSize + "px",
          }}
        >
          <div>GUMROAD</div>
          <div>FLEXILE</div>
          <div>HELPER.AI</div>
        </div>
      </div>
    </div>
  );
};
