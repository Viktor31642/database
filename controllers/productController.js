const db =require('../config/db.js');

exports.getAllProducts = (req, res) =>{
    const query ='SELECT * FROM club_cards';
    db.query(query, (err, results) => {
        if(err) {
            console.error('Error', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    }
    )
}