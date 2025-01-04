import Express from 'express'
import productcategory from '../controller/Productcontroller.js'
import auth from '../utils/auth.js'
const router = Express.Router()

router.post('/Productdata', auth.adminAuthMiddleware,productcategory.createProduct)
// router.get('/getproduct/:category',productcategory.getProductsByCategory);
router.get('/getproduct/:category',auth.adminAuthMiddleware, productcategory.getProductsByCategory);
router.get('/getproduct/:ID', auth.adminAuthMiddleware,productcategory.getproductByID)
router.get('/getAllProduct', auth.adminAuthMiddleware,productcategory.getAllProduct)
router.put('/updateProduct/:category/:ProductID', auth.adminAuthMiddleware,productcategory.updateProduct);
router.delete('/deleteProduct/:category/:ProductID', auth.adminAuthMiddleware,productcategory.DeleteProduct);
router.get('/search',productcategory.searchProducts)

export default router