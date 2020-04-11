const router = require('express').Router();
const {
    getAllContact,
    getSinglaContact,
    createContact,
    updateContact,
    deleteContact,

} = require('./controllers');

router.get('/', getAllContact);
router.get('/:id', getSinglaContact);
router.post('/', createContact);
router.get('/delete/:id', deleteContact)
router.put('/:id', updateContact);
//router.delete('/:id', deleteContact)

module.exports = router;