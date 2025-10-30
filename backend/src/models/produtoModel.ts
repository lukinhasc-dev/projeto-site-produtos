import { connectionModule } from "./connectionModel";

    const getAllProduct =  async () => {
        const [listProduct] = await connectionModule.execute('SELECT * FROM product')
        return listProduct
    }
    const getByIDProduct = async (id:number) => {
            const [Product] = await connectionModule.execute(`SELECT * FROM product where id=${id}`)
        return Product
    }
    const creatnewProduct = async () => {}
    const editPartialProduct = async () => {}
    const removeProduct = async () => {}



export default {
    getAllProduct,
    getByIDProduct,
    creatnewProduct,
    editPartialProduct,
    removeProduct

}