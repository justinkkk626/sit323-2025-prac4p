const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to the Calculator Microservice!');
});


app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    res.json({ result: num1 + num2 });
});


app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    res.json({ result: num1 - num2 });
});

app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    res.json({ result: num1 * num2 });
});

app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ result: num1 / num2 });
});

app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
