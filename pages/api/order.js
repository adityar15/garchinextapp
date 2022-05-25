import { api } from "../../assets/api"
import { decrypt } from "../../assets/security"


export default async function handler (req, res)
{
    let invoiceNumber = req.query.invoice_number 

    if(req.method == "POST")
    {
        // console.log(req.body)
        try{
              
                const order = await api.post("/order/create", {
                    cart_items: req.body.cart_items,
                    payment_provider: "stripe",
                    payment_id: req.body.payment_intent,
                    sub_total_amount: req.body.total,
                    customer_uid: decrypt(req.cookies.uid),
                    delivery_address: 'online',
                })
                invoiceNumber = await order.data.invoiceNumber
        }
        catch(error)
        {
            res.status(error.response?.status || 500).json({error: error.response?.data?.errors || "Server error"})
        }

    }

    
    const orderDetailsReqeust = await api.get(`/order/${invoiceNumber}`)
    const {data} = await orderDetailsReqeust

    res.status(200).json({order: data.data})
}