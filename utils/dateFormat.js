const moment = require('moment');

// Format a timestamp using the specified format string
const formatDate = (timestamp, formatString) => {
  return moment(timestamp).format(formatString);
};

module.exports = formatDate;
