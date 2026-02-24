import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"

export default function HomeFront(){

const nav = useNavigate()

const slides=[
{img:"https://images.unsplash.com/photo-1607083206968-13611e3d76db",title:"Mega Sale 70% OFF"},
{img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",title:"Fashion Offer 80%"},
{img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",title:"Electronics Deals"},
{img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",title:"Mobile Bonanza"},
{img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",title:"Laptop Special"},
{img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",title:"Watch Deals"},
{img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",title:"Shoes Sale"},
{img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f",title:"Women Fashion"},
{img:"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",title:"Headphones Offer"},
{img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad",title:"Gaming Deals"}
]

const [index,setIndex]=useState(0)

useEffect(()=>{
const timer=setInterval(()=>{
setIndex(i=>(i+1)%slides.length)
},5000)
return()=>clearInterval(timer)
},[])

const next=()=>setIndex((index+1)%slides.length)
const prev=()=>setIndex((index-1+slides.length)%slides.length)

return(
<div>

<div
className="heroSlider"
style={{backgroundImage:`url(${slides[index].img})`}}
>

<div className="arrow left" onClick={prev}>❮</div>

<h1>{slides[index].title}</h1>

<button className="exploreBtn" onClick={()=>nav("/shop")}>
Explore Shopping
</button>

<div className="arrow right" onClick={next}>❯</div>

<div className="dots">
{slides.map((_,i)=>(
<span
key={i}
className={i===index?"dot active":"dot"}
onClick={()=>setIndex(i)}
></span>
))}
</div>

</div>

<div className="offers">

<div className="offerCard electronics"
onClick={()=>nav("/shop?category=electronics")}>
Electronics Deals
</div>

<div className="offerCard fashion"
onClick={()=>nav("/shop?category=women's clothing")}>
Fashion Sale
</div>

<div className="offerCard gadget"
onClick={()=>nav("/shop?category=men's clothing")}>
Gadget Offer
</div>

</div>

</div>
)
}