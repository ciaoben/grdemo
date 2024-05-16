require 'pdf-reader'

class Pdf
  def self.parse_in_pages
    reader = PDF::Reader.new(Rails.root.join("book.pdf"))
    text = []

    pages_done = 0
    reader.pages.each do |page|
      break if pages_done > 151
      text << page.text
      pages_done += 1
    end

    text
  end

  def self.split_pages_in_paragraphs pages
    ps = []

    pages.each do |page|
      parts = page.split('    ').map do |p| p.gsub("\n", "") end

      parts.each do |part|
        word_count = part.strip.split(/\s+/).size
        if word_count >= 4
          ps << part
        end
      end
    end

    array.slice!(-n, n)

    ps
  end

  def self.save_in_file pages, file_name
    # Open the text file for writing
    File.open(Rails.root.join("tmp", file_name), "w") do |file|
      pages.each do |page|
        # Remove newline characters from the page text and add it to the text array
        stripped_text = page.gsub("\n", " ")
        # Write the page content on a single line in the text file
        file.puts(stripped_text.strip)
      end
    end
  end

  def self.read_lines(file_path, line_numbers)
    lines = []
  
    File.open(file_path, 'r') do |file|
      current_line_number = 1
  
      file.each_line do |line|
        if line_numbers.include?(current_line_number)
          lines << line.chomp
        end
  
        current_line_number += 1
      end
    end
  
    lines
  end
  
end
