import pdf from 'html-pdf';

const generatePDFReport = (html, callback) => {
  pdf.create(html).toFile('report.pdf', callback);
};

export { generatePDFReport }; // Use named export