import { Request, Response } from "express";
import { IProduct } from "../interfaces/types";
import produtoModel from "../models/produtoModel";

    const getAllProduct =  async (req:Request, res:Response) => {
        const listProduct = await produtoModel.getAllProduct()
        return res.status(200).json (listProduct)
    }
    const getByIDProduct = async (req:Request, res:Response) => {
            const Product = await produtoModel.getByIDProduct(Number(req.params.id))
        return Product
    }
    const creatnewProduct = async (req:Request, res:Response) => {
      
        const newProduct = await produtoModel.creatnewProduct(req.body)
       return res.status(200).json (newProduct)
    }
    const editPartialProduct = async (req:Request, res:Response) => {

        const editProduct = await produtoModel.editPartialProduct(Number(req.params.id),req.body)
        return res.status(200).json (editProduct)

    }
    const removeProduct = async (req:Request, res:Response) => {
        const deleteProduct = await produtoModel.removeProduct(Number(req.params.id))
        return deleteProduct
    }



export default {
    getAllProduct,
    getByIDProduct,
    creatnewProduct,
    editPartialProduct,
    removeProduct

}