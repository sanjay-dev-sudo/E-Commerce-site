import {createContext,useContext,useState} from "react"

const CartContext=createContext()

export const CartProvider=({children})=>{
const [cart,setCart]=useState([])

const add=(product)=>{
const exist=cart.find(i=>i.id===product.id)
if(exist){
setCart(cart.map(i=>i.id===product.id?{...i,qty:i.qty+1}:i))
}else{
setCart([...cart,{...product,qty:1}])
}
}

const inc=(id)=>{
setCart(cart.map(i=>i.id===id?{...i,qty:i.qty+1}:i))
}

const dec=(id)=>{
setCart(cart.map(i=>
i.id===id && i.qty>1 ? {...i,qty:i.qty-1}:i
))
}

const remove=(id)=>{
setCart(cart.filter(i=>i.id!==id))
}

return(
<CartContext.Provider value={{cart,add,inc,dec,remove}}>
{children}
</CartContext.Provider>
)
}

export const useCart=()=>useContext(CartContext)