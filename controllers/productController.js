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