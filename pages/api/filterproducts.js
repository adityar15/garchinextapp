import { api } from "../../assets/api"

export default async function handler(req, res)
{
    if(req.method !== "POST")
    res.status(405).json({"error": "Expects a post request"})
    try{
        const apiresponse = await api.post("/products/filter", req.body)
        const products = await apiresponse.data
        res.status(200).json({"products": products})
    }
    catch(err)
    {
        res.status(err.response.status).json({error: "Something went wrong"})
    }
}