import { Product } from "../Models/products.model.js";

// import productsJson from "../products.json" assert { type: 'json' }

const getAllProducts = async (req, res) => {
  try {
    const {name , price} = req.query;

    const allData = await Product.find({
      $or : [
        {name : {$regex : name}},
        { price :  price}]
    }); 
    res.status(200).json(allData);
  } catch (error) {
    console.log("Data Find Error ",error)
    res.status(500).json({data : false})
  }
};

const getAllProductsTesting = async (req, res) => {

  try {
    const allData = await Product.find(req.query).select("price name"); 
    res.status(200).json(allData);
  } catch (error) {
    console.log("Data testing error ",error)
  }
};

const postData = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product1 = await Product.create({ name, price });
    // console.log(product1)
    res.status(201).json({ product: product1._id, created: true });
  } catch (error) {
    console.log("Data not Created ", error);
    res.status(500).json({ created: false });
  }
};

export { getAllProducts, getAllProductsTesting, postData };


/**
 * ! const allData = await Product.find({name : "testing1"});
 * ! it filters and give only that data whose name is "testing1"
 * ! if we try to get something which is not in DB it won't give error 
 * ! but give empty array as response
 */