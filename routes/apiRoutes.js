
const router = require('express').Router();
const store = require('../db/store.js');

// Get 
router.get('/notes', (req,res) => {

  store.getNotes()
  .then((notes) =>{return res.json(notes)})
  .catch((err)=>res.status(500).json(err))
});

//Post

router.post('/notes', (req, res) => {
  store.saveNote(req.body)
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));
});






module.exports = router;