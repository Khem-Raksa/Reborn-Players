// import React from 'react';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i=1; i<Products.length;i++){
//         cart[i] = 0
//     }
//     return cart;
// }

// export const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemID) => {
//         setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({...prev,[itemId]: prev[itemId]- 1}));
//     };

//     const contextValue = {cartItems, addToCart, removeFromCart };


//     return <ShopContext.Provider>{props.children}</ShopContext.Provider>
// };