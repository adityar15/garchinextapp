import { api } from "../../assets/api"
import { encrypt } from "../../assets/security"

import {setCookie} from "nookies"

export default async function handler(req, res) {

    if(req.method!="POST")
    {
        res.status(405).json({error: "Method not allowed"})
    }
   
    try{
        const apiresponse = await api.post('/login', {
            email: req.body.email,
            password: req.body.password
        })
        const user = await apiresponse.data
        console.log(user)
        const encrypted = encrypt(user.data.uid)
        // const decrypted = decrypt(encrypted)
        console.log("encrypted", encrypted)
        // console.log("decrypted", decrypted || "Cannot decrypt")


        setCookie({ res }, 'uid', encrypted, {
            maxAge: 24 * 60 * 60, //value sec
            path: '/',
            httpOnly: true
          });


        res.status(200).json({ user: user.data || [] })
    }
    catch(err){
        console.log(err)
        res.status(err.response.status).json({error: err.response.data.errors})
    }

  }
  