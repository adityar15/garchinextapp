import { api } from "../../assets/api"

export default async function handler(req, res) {

    const apiresponse = await api.get('/categories')
    const categories = await apiresponse.data

    res.status(200).json({ categories: categories.data || [] })
  }
  