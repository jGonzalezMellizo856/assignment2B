const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const registController = require('./controllers/registrationControllers');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/register', registController.register);

app.get('/confirmation', (req, res) => {

    const { bvcID, fullName, address, status, fee } = req.query;
    console.log('recieved request with query params: ', req.query);//delete after deployment

    res.send(`
    <h2>Registration Confirmation</h2>
            <p><strong>ID:</strong> ${bvcID}</p>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Fee:</strong> $${fee}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});