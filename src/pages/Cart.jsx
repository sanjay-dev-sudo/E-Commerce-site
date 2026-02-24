import {useCart} from "../context/CartContext"
import {useNavigate} from "react-router-dom"

export default function Cart(){

const {cart,inc,dec,remove}=useCart()
const nav=useNavigate()

const total=cart.reduce((s,i)=>s+i.price*i.qty,0)

return(
<div className="cartPage">

<h2>Your Cart</h2>

{cart.map(item=>(
<div key={item.id} className="cartItem">

<img src={item.image}/>

<div className="cartInfo">
<h4>{item.title}</h4>
<p>₹ {Math.round(item.price*80)}</p>

<div className="qtyBox">
<button onClick={()=>dec(item.id)}>-</button>
<span>{item.qty}</span>
<button onClick={()=>inc(item.id)}>+</button>
</div>
</div>

<div className="cartBtns">
<button className="buyBtn" onClick={()=>nav("/checkout")}>
Buy Now
</button>

<button className="removeBtn" onClick={()=>remove(item.id)}>
Remove
</button>
</div>

</div>
))}

<h3 className="total">
Total ₹ {Math.round(total*80)}
</h3>

</div>
)
}