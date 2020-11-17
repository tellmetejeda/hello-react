// imports
// path es un modulo base de NodeJS, no hay que instalarlo con npm
const path = require('path');
// mas imports ...

// codigo ...

// despues de conectarse a la base de datos
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
