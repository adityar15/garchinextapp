export class Cart {
  cart = [];

  constructor() {
    const cartString = localStorage.getItem("cart");
    this.cart = JSON.parse(cartString) || [];
  }

  // load cart to local storage
  loadToStorage() {
    const cartString = JSON.stringify(this.cart);
    localStorage.setItem("cart", cartString);
  }

  //add product to the cart

  add(payload) {
    //check if the product is already added
    const inCart = this.cart.filter((item) => item.product_id == payload.id);

    // add product if not added
    if (inCart.length == 0)
      this.cart = [
        ...this.cart,
        {
          product_id: payload.id,
          product_name: payload.name,
          quantity: 1,
          attributes: payload.attributes,
        },
      ];
    // if the product is added with same attributes then just increase the quantity
    else {
      let flag = false;

      inCart.forEach((inCartItem) => {
        if (
          inCartItem.attributes.length == 0 || JSON.stringify(inCartItem.attributes) == JSON.stringify(payload.attributes)
        ) {
          
          flag = true;

          this.cart = this.cart.map((item) => {
            if(item.product_id != payload.id)
                return item
            else
                  return {
                    product_id: payload.id,
                    product_name: payload.name,
                    quantity: ++item.quantity,
                    attributes: payload.attributes,
                  };
                       
          });
        }
      });

      // if the same product is added with different attributes then just add it as a new product
      if (!flag) {
        this.cart = [
          ...this.cart,
          {
            product_id: payload.id,
            product_name: payload.name,
            quantity: 1,
            attributes: payload.attributes,
          },
        ];
      }
    }

    this.loadToStorage();
    return this.cart;
  }
}
