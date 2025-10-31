import { IProduct } from "../interfaces/types";
import produtoModel from "../models/produtoModel";

    const getAllProduct =  async () => {
        const [listProduct] = await produtoModel.getAllProduct('SELECT * FROM product')
        return listProduct
    }
    const getByIDProduct = async (id:number) => {
            const [Product] = await produtoModel.getByIDProduct(`SELECT * FROM product where id=${id}`)
        return Product
    }
    const creatnewProduct = async (body:IProduct) => {
        const {name,description,price,stock,createdAt,updateAt} = body
        const query = 'INSERT INTO product(name,description,price,stock,createdAt,updateAt) values(?,?,?,?,?,?)'
        const [newProduct] = await produtoModel.creatnewProduct(query,[name,description,price,stock,createdAt ?? new Date(),updateAt ?? Date()])
        return newProduct
    }
    const editPartialProduct = async (id:number, update: Partial<IProduct>) => {

        delete update.createdAt;
        if(!update.updateAt){
            update.updateAt = new Date()
        }

        const fields = Object.keys(update)
        const values = Object.values(update)
        const setclause = fields.map(field => `${field}=?`).join(',')
        const query = `UPDATE product set ${setclause}, updateAt= NOW() WHERE id=?`
        const [editProduct] = await produtoModel.editPartialProduct(query,[...values, id])
        return editProduct

    }
    const removeProduct = async (id:number) => {
        const deleteProduct = await produtoModel.removeProduct(`DELETE FROM product WHERE id=${id}`)
        return deleteProduct
    }



export default {
    getAllProduct,
    getByIDProduct,
    creatnewProduct,
    editPartialProduct,
    removeProduct

}