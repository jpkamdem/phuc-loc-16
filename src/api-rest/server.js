const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});