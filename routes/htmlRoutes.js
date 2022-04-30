const router = require('express').Router()
const path = require('path')

//Point the notes filepath to the notes folder,  every other path goes back to the landing page 

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
module.exports = router