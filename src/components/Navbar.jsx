import {Link} from "react-router-dom"
import {useCart} from "../context/CartContext"

export default function Navbar(){

const {cart}=useCart()
const total = cart.reduce((a,b)=>a+b.qty,0)

return(
<nav className="nav">

<h2 className="logo">UltraMart</h2>

<div className="navLinks">
<Link to="/">Home</Link>
<Link to="/shop">Shop</Link>

<Link to="/cart" className="cartIcon">
🛒
{total>0 && <span className="cartCount">{total}</span>}
</Link>
</div>

</nav>
)
}