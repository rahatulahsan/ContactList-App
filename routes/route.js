const express = require('express');
const router = express.Router();

//Retreiveing Data
router.get('/contacts', (req, res) => {
    res.send('Retrieving the contact list');
});

//Add contact
router.post('/contact', (req, res) => {
    //Logic to add contact
});

// Deleting Contact
router.delete('/contact/:id', (req, res) => {
    //Logic to add contact
});


module.exports = router;