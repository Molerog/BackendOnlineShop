const Logger = require('logplease');
const options = {
    useColors: true,     // Enable colors
    color:Logger.Colors.Yellow, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };
const logger = Logger.create('Mensaje',options);
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

app.listen(port,()=>{
    logger.info("Servidor corriendo en el puerto " + port)
})

