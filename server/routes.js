const express = require("express");
const cors = require("cors"); //npm install cors --save

const ItemController = require("./controllers/ItemController");
const CategoryController = require("./controllers/CategoryController");
const router = express.Router();

router.get("/items", ItemController.index);
router.post("/items", ItemController.store);
router.put("/items/:id", ItemController.update);
router.delete("/items/:id", ItemController.destroy);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.destroy);

module.exports = router;