# docx-generator

Create a web app using the code belove:
from flask import Flask, request, send_file
import os
import pytesseract
from PIL import Image

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_pdf_to_word():
    # Get the uploaded PDF file
    pdf_file = request.files['pdf_file']

    # Extract the text from the PDF using OCR
    text = pytesseract.image_to_string(Image.open(pdf_file))

    # Create a new Word document
    doc = open('output.docx', 'w')

    # Write the extracted text to the Word document
    doc.write(text)

    # Close the Word document
    doc.close()

    # Return the converted Word document as a file
    return send_file('output.docx', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
<!DOCTYPE html>
<html>
<head>
  <title>Lao PDF to Word Converter</title>
</head>
<body>
  <h1>Lao PDF to Word Converter</h1>
  <form action="/convert" method="post" enctype="multipart/form-data">
    <input type="file" name="pdf_file">
    <input type="submit" value="Convert">
  </form>
  <p>Conversion results:</p>
  <textarea id="result" readonly></textarea>
</body>
</html>
try:
    # Extract the text from the PDF using OCR
    text = pytesseract.image_to_string(Image.open(pdf_file))
except Exception as e:
    print(f"Error converting PDF: {e}")
    return "Error converting PDF", 400

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/docx-generator.git
cd docx-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
