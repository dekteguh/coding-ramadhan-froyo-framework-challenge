const express = require('express');
const app = express();

let personData = [
    {
        name: 'Budi',
        age: '42',
        origin: 'Jawa Barat'
    },
    {
        name: 'Wati',
        age: '50',
        origin: 'Sulawesi Tenggara'
    },
    {
        name: 'Dona',
        age: '33',
        origin: 'DI Aceh'
    }
    {
        name: 'Made',
        age: '36',
        origin: 'Bali'
    },
    {
        name: 'Donal',
        age: '65',
        origin: 'Nusa Tenggara Barat'
    }
];

app.get('/', function(req, res) {
    let ageAverage = (data) => {
        let sum = data.reduce((a, b) => (a.age + b.age));
        return sum / data.length;
    };

    res.json({ data: personData });
});

app.get('/average', function(req, res) {
    res.json({ average: ageAverage(personData) });
});

app.listen(3000, function() {
    console.log('App is running');
});