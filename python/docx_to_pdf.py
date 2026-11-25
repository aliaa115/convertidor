# backend/tools/convert/docx_to_pdf.py
import argparse
import pypandoc
import os

parser = argparse.ArgumentParser(description="Convert DOCX to PDF")
parser.add_argument("--input", required=True, help="Path to input DOCX")
parser.add_argument("--output", required=True, help="Path to output PDF")
args = parser.parse_args()

input_file = args.input
output_file = args.output

# Crear carpeta de salida si no existe
os.makedirs(os.path.dirname(output_file), exist_ok=True)

pypandoc.convert_file(input_file, 'pdf', outputfile=output_file)
print(f"PDF generado: {output_file}")