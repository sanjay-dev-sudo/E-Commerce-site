import {useCart} from "../context/CartContext"
import {useNavigate} from "react-router-dom"

export default function ProductCard({product}){

const {add}=useCart()
const nav=useNavigate()

return(
<div className="productCard">

<img src={product.image}/>
<h4>{product.title}</h4>
<p className="price">₹ {Math.round(product.price*80)}</p>

<div className="cardBtns">

<button className="addBtn" onClick={()=>add(product)}>
Add To Cart
</button>

<button className="buyBtn" onClick={()=>{
add(product)
nav("/cart")
}}>
Buy Now
</button>

</div>

</div>
)
}