import { createContext, useContext, useEffect, useReducer } from 'react'
import { faker } from '@faker-js/faker'
import { cartReducer } from './CartReducer'

faker.seed(1)

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const products = [...Array(20)].map((_) => ({
        id: faker.string.uuid(),
        productName: faker.commerce.productName(),
        productDiscription: faker.commerce.productDescription(),
        Price: faker.number.int({min:1000, max:5000}),
        image: faker.image.urlPicsumPhotos({
            width: 200,
            height: 300,
        }),
        inStock: faker.helpers.arrayElement([0,1,5,10,15,25]),
        fastDeliver: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        unfilteredProduct: products,
        products,
        cart: [],
    });


    useEffect(()=>{
        const sessionData = JSON.parse(sessionStorage.getItem('cartContextData'))
        if(!sessionData) return;
        dispatch({
            type: 'SET_STATE',
            payload: sessionData || [],
        })
    },[])


    useEffect(()=>{
        sessionStorage.setItem('cartContextData', JSON.stringify(state))
    },[state])

    return(
        <CartContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

export default CartContextProvider;