const Product = require( '../models/productModel' );


exports.getAllProducts = async (req, res) =>
{
    try {
      const products = await Product.find({}, 'name price'); // Retrieve only the name and price fields
  
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}