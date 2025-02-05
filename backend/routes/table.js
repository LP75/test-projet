const express = require('express');
const router = express.Router();
const Table = require('../models/Table');

// GET tous les éléments
router.get('/', async (req, res) => {
    try {
        const cells = await Table.find();
        const formattedCells = cells.map(cell => ({
            row: cell.row,
            col: cell.col,
            value: cell.value
        }));
        res.json(formattedCells);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST mise à jour d'une cellule
router.post('/', async (req, res) => {
    try {
        const { row, col, value } = req.body;
        await Table.findOneAndUpdate(
            { row, col },
            { value },
            { upsert: true, new: true }
        );
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE vider la table
router.delete('/', async (req, res) => {
    try {
        await Table.deleteMany({});
        res.json({ message: 'Table vidée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;