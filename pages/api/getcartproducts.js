import { api } from "../../assets/api"

export default async function handler(req, res) {

    const apiresponse = await api.post('/products/byids', {product_ids: req.body.products})
    const products = await apiresponse.data
    
    let cartProducts = []
    if(products.data)
    cartProducts = products.data.map(item => ({id: item.product_id, price: item.price}))

    res.status(200).json({ products: cartProducts })
  }
  