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

// Отримати картку за ID
exports.getCard = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Не вказано ID картки' });
  }

  const sql = 'SELECT * FROM club_cards WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(' Помилка при отриманні картки:', err);
      res.status(500).json({ error: 'Помилка при запиті до бази даних' });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'Картку не знайдено' });
    } else {
      res.json(result[0]);
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


//  Оновити картку за ID
exports.updateCard = (req, res) => {
  const { id } = req.params;
  const { type, title, price, benefits } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Не вказано ID картки' });
  }

  if (!type || !title || !price || !benefits) {
    return res.status(400).json({ error: 'Будь ласка, заповніть усі поля' });
  }

  const sql = 'UPDATE club_cards SET type = ?, title = ?, price = ?, benefits = ? WHERE id = ?';
  db.query(sql, [type, title, price, benefits, id], (err, result) => {
    if (err) {
      console.error(' Помилка при оновленні картки:', err);
      res.status(500).json({ error: 'Помилка при оновленні картки' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Картку не знайдено' });
    } else {
      res.json({ message: ` Картку з ID ${id} оновлено успішно` });
    }
  });
};


// видалити карту
exports.deleteCard = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Не вказано ID картки' });
  }

  const sql = 'DELETE FROM club_cards WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(' Помилка при видаленні картки:', err);
      res.status(500).json({ error: 'Помилка при видаленні картки' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Картку не знайдено' });
    } else {
      res.json({ message: `Картку з ID ${id} видалено успішно` });
    }
  });
};