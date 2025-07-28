// server.js
const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Generate PDF endpoint
app.post('/generate-pdf', async (req, res) => {
  const { html, fileName = 'resume.pdf' } = req.body;

  if (!html) return res.status(400).send('No HTML provided.');

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: 'networkidle0',
    });

    const resumeElement = await page.$('body');
    const boundingBox = await resumeElement.boundingBox();

    const pdfBuffer = await page.pdf({
      width: `${Math.ceil(boundingBox.width)}px`,
      height: `${Math.ceil(boundingBox.height)}px`,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      printBackground: true,
    });


    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    });

    res.send(pdfBuffer);
  } catch (err) {
    console.error('PDF generation error:', err);
    res.status(500).send('PDF generation failed.');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Resume PDF backend running on http://localhost:${PORT}`);
});
