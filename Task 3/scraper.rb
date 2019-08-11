require 'nokogiri'
require 'httparty'
require 'byebug'

def scraper
    url = "https://www.google.com/search?q=linux"
    unparsed = HTTParty.get(url)
    parsed = Nokogiri::HTML(unparsed)
    parsed.css('div.LC20lb')
    byebug
end

scraper