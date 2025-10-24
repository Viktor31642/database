// const express = require('express');
// const bodyParser = require('body-parser');
// const aboutRoutes = require('./routes/aboutRoutes.js');
// const productsRoutes = require('./routes/productsRouter.js')
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use ('/', aboutRoutes);
// app.use ('/products', productsRoutes);
// // start server
// app.listen(port, () =>{
//     console.log(`Server listening on port ${port}`);

// });
const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/productsRouter');

const app = express();
app.use(cors());
app.use(express.json());

// Маршрути
app.use('/api', productsRouter);


// Тестовий маршрут
app.get('/', (req, res) => {
  res.send('Сервер працює');
});

const PORT = 3001;
app.listen(PORT, () => console.log(` Сервер запущено на http://localhost:${PORT}`));