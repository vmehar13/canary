const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: 'kooko'
    })
});

function isValidCani(cani){
    return cani.name && cani.name.toString().trim() !=='' &&
        cani.content && cani.content.toString().trim() !=='';
}

app.post('/cani', (req, res) => {
    if(isValidCani(req.body)){
        //insert to db
        const cani = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        };
        console.log(cani)
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