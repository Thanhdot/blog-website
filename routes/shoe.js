const shoeController = require("../controllers/shoeController");

const router = require("express").Router();

//ADD Shoe
router.post("/", shoeController.addShoe);

module.exports = router;