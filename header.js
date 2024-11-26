// header.js
const fs = require("fs");
const path = require("path");

// Функция для конвертации изображения в Base64
function encodeImageToBase64(imagePath) {
  const image = fs.readFileSync(imagePath);
  return Buffer.from(image).toString("base64");
}

// Массив с данными о фотографиях и их Base64 кодированными версиями
const headerImages = [
  { id: 1, name: "logo", path: "images/logo.png", base64: encodeImageToBase64(path.join(__dirname, "images", "logo.png")) },
  { id: 2, name: "baner", path: "images/baner.jpeg", base64: encodeImageToBase64(path.join(__dirname, "images", "baner.jpeg")) },
  // Добавляйте другие изображения
];

module.exports = { headerImages };
