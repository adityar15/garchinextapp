import { api } from "../../assets/api"
import { decrypt } from "../../assets/security"
export default async function handler(req, res)
{
    const uid = decrypt(req.cookies.uid)
    const user = await api.get(`customer/${uid}`)
    const {data} = await user.data
    res.status(200).json({user: data})
}