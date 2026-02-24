import {useEffect,useState} from "react"
import axios from "axios"
import {useLocation} from "react-router-dom"
import ProductCard from "../components/ProductCard"

export default function Shop(){

const [products,setProducts]=useState([])
const [search,setSearch]=useState("")
const location = useLocation()

const params=new URLSearchParams(location.search)
const category=params.get("category")

const generateHugeProducts=(baseProducts)=>{

  const extraCategories=[
    "electronics",
    "men's clothing",
    "women's clothing",
    "jewelery"
  ]

  let bigList=[]

  for(let i=0;i<50;i++){   
    const cloned = baseProducts.map((p,index)=>({

      ...p,

      id: `${p.id}-${i}-${index}`,

      price: Number((p.price + Math.random()*50).toFixed(2)),

      category: extraCategories[
        Math.floor(Math.random()*extraCategories.length)
      ],

      title: `${p.title} ${["Pro","Max","Plus","2025","X","Ultra"][Math.floor(Math.random()*6)]}`

    }))

    bigList=[...bigList,...cloned]
  }

  return bigList
}

useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
.then(res=>{

  const massiveProducts = generateHugeProducts(res.data)
  setProducts(massiveProducts)

})
},[])


const filtered = products
.filter(p=>!category || p.category===category)
.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()))

return(
<div>

<div className="searchBar">
<input
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
</div>

<div className="grid">
{filtered.map((p)=>(
<ProductCard key={p.id} product={p}/>
))}
</div>

</div>
)
}