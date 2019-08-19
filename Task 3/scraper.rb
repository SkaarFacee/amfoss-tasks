require 'nokogiri'
require 'open-uri'
require 'pry'


def scraper
    
    page = Nokogiri:: HTML(open("https://www.google.com/search?client=ubuntu&channel=fs&q=linux&ie=utf-8&oe=utf-8"))
    ps = page.xpath(".//div//a//@href").each do |link|
        puts link.content
    end

end

scraper
