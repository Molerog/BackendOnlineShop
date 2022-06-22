const Logger = require('logplease');
const cors = require('cors')
const options = {
  useColors: true, // Enable colors
  color: Logger.Colors.Yellow, // Set the color of the logger
  showTimestamp: true, // Display timestamp in the log message
  useLocalTime: false, // Display timestamp in local timezone
  showLevel: true, // Display log level in the log message
  filename: null, // Set file path to log to a file
  appendFile: true, // Append logfile instead of overwriting
};
const logger = Logger.create('Mensaje', options);
const express = require('express');
const { typeError } = require('./middleware/errors');
const app = express();
const port = 8000;
app.use(express.json())

app.use(cors())
app.use(express.static('./public'));

app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use('/sections', require('./routes/sections'));
app.use('/reviews', require('./routes/reviews'));

app.use(typeError);



app.listen(port, () => {
  logger.info('Servidor corriendo en el puerto ' + port);
});
