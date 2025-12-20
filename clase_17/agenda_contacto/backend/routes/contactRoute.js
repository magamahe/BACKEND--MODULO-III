const express = require('express');
const Contact = require('../models/contactsModel');

const router = express.Router();

// GET
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    console.log('BODY RECIBIDO >>>', req.body);

    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({ message: 'Contacto agregado', contact: newContact });
  } catch (error) {
    console.error('ERROR REAL >>>', error);
    res.status(500).json({ error: error.message });
  }
});


// PUT
router.put('/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: 'Contacto actualizado', contact: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contacto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
