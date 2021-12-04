const Router = require('express');
const potterController = require('./potterController');

const router = new Router();

router.post('/', potterController.getUsers);
router.post('/user', potterController.addUser);
router.delete('/user/:id', potterController.deleteUser);
router.post('/pair', potterController.createPair);
router.get('/pair', potterController.getPairs);

module.exports = router;