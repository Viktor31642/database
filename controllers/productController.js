// const db =require('../config/db.js');

// exports.getAllProducts = (req, res) =>{
//     const query ='SELECT * FROM club_cards';
//     db.query(query, (err, results) => {
//         if(err) {
//             console.error('Error', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         res.json(results);
//     }
//     )
// }

const db = require('../config/db');

// Отримати всі картки
exports.getAllCards = (req, res) => {
  const sql = 'SELECT * FROM club_cards';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Помилка запиту:', err);
      res.status(500).json({ error: 'Помилка бази даних' });
    } else {
      res.json(result);
    }
  });
};

// Додати нову картку
exports.addCard = (req, res) => {
  const { type, title, price, benefits } = req.body;

  // Перевірка — всі поля мають бути заповнені
  if (!type || !title || !price || !benefits) {
    return res.status(400).json({ error: 'Будь ласка, заповніть усі поля' });
  }

  const sql = 'INSERT INTO club_cards (type, title, price, benefits) VALUES (?, ?, ?, ?)';
  db.query(sql, [type, title, price, benefits], (err, result) => {
    if (err) {
      console.error(' Помилка при додаванні картки:', err);
      res.status(500).json({ error: 'Помилка при додаванні картки' });
    } else {
      res.status(201).json({ message: 'Картку додано успішно', id: result.insertId });
    }
  });
};