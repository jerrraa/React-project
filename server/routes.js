const express = require("express");
const cors = require("cors"); //npm install cors --save

const ItemController = require("./controllers/ItemController");
const CategoryController = require("./controllers/CategoryController");
const router = express.Router();

router.get("/items", ItemController.index);
router.post("/items", ItemController.store);
router.put("/items/:item_id", ItemController.update);
router.delete("/items/:item_id", ItemController.destroy);



router.get("/category", CategoryController.index);
router.post("/category", CategoryController.store);
router.put("/category/:category_id", CategoryController.update);
router.delete("/category/:category_id", CategoryController.destroy);

module.exports = router;