import stripe from "stripe"

export default async function handler(req, res)
{
    if(req.method != 'POST')
    res.status(405).json({error: "Method not allowed"})

    const stripeObject = stripe(process.env.STRIPE_SECRET_KEY)

    const intent = await stripeObject.paymentIntents.create({
        amount: req.body.total * 100,
        currency: 'gbp',
      });

    res.status(200).json(intent)
}