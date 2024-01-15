import express from 'express'


const getAllProducts = async (req,res) => {
  res.status(200).json({data : "Data is getAllproducts"})
}


const getAllProductsTesting = async (req,res) => {
  res.status(200).json({data : "Data is getAllproductsTesting"})
}

export {getAllProducts , getAllProductsTesting}