import Product from "../models/product.js";

export function addProduct(req,res){

    if(req.user == null){
        res.status(401).json({
            message : "please login and try again"
        })
        return
    }
    if(req.user.role != "admin"){
        res.status(403).json({
            message : "Your not authorized tto perform this action"
        })
        return
    }
     console.log(req.user)

    const data = req.body;
    const newProduct = new Product(data);
    newProduct.save().then(()=>{
        res.json({
            message : "Product added successfully"
        })
    }).catch((error)=>{
        res.status(500).json({
            error : "product addition failed"
        })
    })
}