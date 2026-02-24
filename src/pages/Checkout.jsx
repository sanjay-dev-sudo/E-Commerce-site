import {useNavigate} from "react-router-dom"

export default function Checkout(){

const nav=useNavigate()

return(
<div className="checkout">
<h2>Payment</h2>
<input placeholder="Card Number"/>
<input placeholder="Expiry"/>
<input placeholder="CVV"/>
<button className="buyBtn" onClick={()=>nav("/success")}>
Pay Now
</button>
</div>
)
}