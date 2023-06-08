const router = require( 'express' ).Router();
const authenticate = require('../middleware/authMiddleware')
const generateTokenfile = require('../controller/generateToken');

const { getAllProducts } = require( '../controller/productConroller' );

router.get( '/createToken' , generateTokenfile.generateToken)
// router.get( '/products' , authenticate,  getAllProducts );

module.exports = router;                
