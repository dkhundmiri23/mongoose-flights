import { router } from 'express'
var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

module.exports = router;
