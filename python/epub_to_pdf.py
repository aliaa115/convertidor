# backend/tools/convert/epub_to_pdf.py
import argparse
import os
from ebooklib import epub
import pdfkit
from bs4 import BeautifulSoup

parser = argparse.ArgumentParser(description="Convert EPUB to PDF")
parser.add_argument("--input", required=True)
parser.add_argument("--output", required=True)
args = parser.parse_args()

input_file = args.input
output_file = args.output

book = epub.read_epub(input_file)

# Extraer HTML de cada capítulo
html_content = ""
for item in book.get_items_of_type(ebooklib.ITEM_DOCUMENT):
    html_content += item.get_content().decode('utf-8')

# Convertir HTML a PDF
pdfkit.from_string(html_content, output_file)
print(f"PDF generado: {output_file}")