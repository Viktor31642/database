const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'usbw',           // це пароль USBWebserver
  database: 'prime_life_club' // 🔹 ось що потрібно додати
});

db.connect((err) => {
  if (err) {
    console.log('❌ Помилка підключення до MySQL:', err);
    return;
  }
  console.log('✅ Підключено до MySQL!');
});

module.exports = db;
