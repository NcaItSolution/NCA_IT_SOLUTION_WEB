// Script to generate a personalized certificate PDF from a template using pdf-lib

const fs = require('fs');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

/**
 * Generate a personalized certificate PDF
 * @param {Object} fields - { fullName, subject, from, to, type }
 * @param {string} templatePath - Path to the template PDF
 * @param {string} outputPath - Path to save the generated PDF
 * @returns {Promise<string>} - Path to the generated PDF
 */
async function generateCertificatePdf(fields, templatePath, outputPath) {
  // Load the template PDF
  const templateBytes = fs.readFileSync(templatePath);
  const pdfDoc = await PDFDocument.load(templateBytes);
  const pages = pdfDoc.getPages();
  const page = pages[0];
  const { width, height } = page.getSize();

  // Fonts
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const fullName = fields.fullName || '';
  const subject = fields.subject || '';
  const from = fields.from || '';
  const to = fields.to || '';
  const type = fields.type || 'Internship';

  // ✅ Step 1: Clear the old middle placeholder text
  page.drawRectangle({
    x: 60,
    y: height - 600,
    width: width - 120,
    height: 160,
    color: rgb(1, 1, 1), // white fill
  });

 
  // ✅ Step 3: Add formatted certificate text (center aligned)
  const line1 = `We are happy to certify that`;
  const line2 = `${fullName}`;
  const line3 = `has completed their ${type.toLowerCase()} as a ${subject}`;
  const line4 = `from ${from} to ${to}.`;

  page.drawText(line1, {
    x: width / 2 - boldFont.widthOfTextAtSize(line1, 16) / 2,
    y: height - 320,
    size: 16,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(line2, {
    x: width / 2 - boldFont.widthOfTextAtSize(line2, 24) / 2,
    y: height - 350,
    size: 24,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(line3, {
    x: width / 2 - boldFont.widthOfTextAtSize(line3, 16) / 2,
    y: height - 380,
    size: 16,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(line4, {
    x: width / 2 - boldFont.widthOfTextAtSize(line4, 16) / 2,
    y: height - 410,
    size: 16,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  // ✅ Step 4: Appreciation lines (draw each line separately to avoid encoding error)
    let appreciation = `We deeply appreciate the hard work, dedication, and commitment you have shown 
  throughout this program. Your contributions, learning attitude, and passion for excellence 
  are commendable, and we are confident that the skills and knowledge you gained here will 
  significantly contribute to your future success.`;
    appreciation = appreciation.replace(/\n/g, ' ');

// Max width settings
const maxWidth = width - 200;   // left & right margin = 100px each
const leftMargin = 100;
let appreciationY = height - 500;
const lineHeight = 22;
const fontSize = 14;

// Word wrapping logic
const words = appreciation.split(" ");
let currentLine = "";

for (let i = 0; i < words.length; i++) {
  const testLine = currentLine + words[i] + " ";
  const lineWidth = boldFont.widthOfTextAtSize(testLine, fontSize);

  if (lineWidth > maxWidth && currentLine !== "") {
    // Draw current line
    page.drawText(currentLine.trim(), {
      x: leftMargin,
      y: appreciationY,
      size: fontSize,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    currentLine = words[i] + " ";
    appreciationY -= lineHeight;
  } else {
    currentLine = testLine;
  }
}

// Draw last line
if (currentLine.trim() !== "") {
  page.drawText(currentLine.trim(), {
    x: leftMargin,
    y: appreciationY,
    size: fontSize,
    font: boldFont,
    color: rgb(0, 0, 0),
  });
}

  // Save the new PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  return outputPath;
}

module.exports = generateCertificatePdf;
