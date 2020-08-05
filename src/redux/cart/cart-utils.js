export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
                                      //if the item doesn't match, return original cartItem
                                      ? { ...cartItem, quantity: cartItem.quantity + 1}
                                      : cartItem
        );
    }
    /* 
    quantity property gets attached the first time around, since the if block won't run when it is a new item
    */
    return [...cartItems, { ...cartItemToAdd, quantity:1 }]; 
};