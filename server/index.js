const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/coos');
const coos = db.get('coos');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: 'coo'
    })
});

function isValidCoo(coo){
    return coo.name && coo.name.toString().trim() !=='' &&
        coo.content && coo.content.toString().trim() !=='';
}

app.post('/coo', (req, res) => {
    if(isValidCoo(req.body)){
        //insert to db
        const coo = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        };
        coos
            .insert(coo)
            .then(createdCoo => {
                res.json(createdCoo);
            })
        
    }
    else{
        res.status(422);
        res.json({
            message: 'Name & content are required'
        })
    }
})

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
})