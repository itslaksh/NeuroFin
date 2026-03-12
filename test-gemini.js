require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testScan() {
  try {
    const fileBytes = fs.readFileSync('public/logo.png'); // using some image
    const base64String = Buffer.from(fileBytes).toString("base64");

    const prompt = `
      Analyze this receipt image and extract the following information in JSON format:
      - Total amount (just the number)
      - Date (in ISO format)
      - Description or items purchased (brief summary)
      - Merchant/store name
      - Suggested category (one of: housing,transportation,groceries,utilities,entertainment,food,shopping,healthcare,education,personal,travel,insurance,gifts,bills,other-expense )
      
      Only respond with valid JSON in exact format:
      {
        "amount": number,
        "date": "ISO date string",
        "description": "string",
        "merchantName": "string",
        "category": "string"
      }
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64String,
          mimeType: "image/png",
        },
      },
      prompt,
    ]);

    const response = await result.response;
    const text = response.text();
    console.log("RAW TEXT:", text);

    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    console.log("CLEANED:", cleanedText);

    const data = JSON.parse(cleanedText);
    console.log("PARSED:", data);
  } catch (err) {
    console.error("ERROR", err);
  }
}
testScan();
