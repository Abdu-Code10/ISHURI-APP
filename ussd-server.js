const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;
  const input = text.split('*');
  let response = '';

  if (text === '') {
    response = `CON Welcome to Ishuri
1. Study by Level
2. Learn Languages
3. Help`;
  } else if (text === '1') {
    response = `CON Choose Level:
1. Nursery
2. Primary
3. Secondary
4. University`;
  } else if (input[0] === '1' && input.length === 2) {
    response = `CON Choose Subject:
1. English
2. Math
3. Science`;
  } else if (input[0] === '1' && input.length === 3) {
    response = `END We will send lesson by SMS. Thank you!`;
    // TODO: Send SMS using Africa's Talking SMS API here
  } else {
    response = `END Invalid option`;
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});

app.listen(8080, () => console.log("USSD server running on port 8080"));
