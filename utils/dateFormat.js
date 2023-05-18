// format timestamp on query
// See note 2 in README.md 

function dateFormat(date) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    
    return date.toLocaleString('en-US', options);
}

module.exports = dateFormat;