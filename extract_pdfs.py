from pypdf import PdfReader
import os

pdf_dir = r"c:\Users\Lenovo\Desktop\Alsons Hardware DATA\Alsons Hardware\Final Dev Stage-1\INDUSTRIAL\Alson Hardware Next Js\public\images\homeappliances"
output_file = "extracted_pdf_data.txt"

pdfs = [
    "LCAC 2024.pdf",
    "Gree final flyer 2025.pdf",
    "Gree AC Product Range Flyer.pdf",
    "EcoStar AC New Lineup Flyer 2026.pdf",
    "AirPurifier_Flyer 2025 Output (for PREVIEW ONLY).pdf",
    "Titan Brousher.pdf",
    "MWO 2026.pdf"
]

with open(output_file, "w", encoding="utf-8") as out:
    for pdf_name in pdfs:
        pdf_path = os.path.join(pdf_dir, pdf_name)
        out.write(f"--- START OF {pdf_name} ---\n")
        if os.path.exists(pdf_path):
            try:
                reader = PdfReader(pdf_path)
                for page in reader.pages:
                    text = page.extract_text()
                    if text:
                        out.write(text)
                        out.write("\n")
            except Exception as e:
                out.write(f"Error reading {pdf_name}: {e}\n")
        else:
            out.write(f"File {pdf_name} not found!\n")
        out.write(f"--- END OF {pdf_name} ---\n\n")

print(f"Extraction complete. Data saved to {output_file}")
