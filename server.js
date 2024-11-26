// server.js
const express = require("express");
const path = require("path");
const cors = require("cors"); // CORS для разрешения запросов с других доменов
const { headerImages } = require("./header"); // Импортируем данные и функцию

const app = express();
const PORT = 5000;

// Разрешаем запросы с других доменов
app.use(cors());

// Статическая папка для фотографий
app.use("/images", express.static(path.join(__dirname, "images")));

// Маршрут для получения массива фотографий с данными Base64
app.get("/api/header-images", (req, res) => {
  const imagesWithBase64 = headerImages.map(image => ({
    id: image.id,
    name: image.name,
    base64: image.base64 // Отправляем Base64 код изображения
  }));

  res.json(imagesWithBase64);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
