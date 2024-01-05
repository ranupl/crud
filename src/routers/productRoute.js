const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/create", productController.addProduct);
router.get("/getAll", productController.getAllProducts);
router.get("/getOne/:id", productController.getOneProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
