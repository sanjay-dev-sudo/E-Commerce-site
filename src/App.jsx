import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeFront from "./pages/HomeFront"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

export default function App(){
return(
<>
<Navbar/>

<Routes>
<Route path="/" element={<HomeFront/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/success" element={<Success/>}/>
</Routes>
</>
)
}