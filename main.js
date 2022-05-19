const Logger = require('logplease');
const options = {
    useColors: true,     // Enable colors
    color:Logger.Colors.Blue, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };
const logger = Logger.create('Mensaje',options);
logger.info("probando")