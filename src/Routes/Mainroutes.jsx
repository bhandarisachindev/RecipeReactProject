import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Recipes from "../Pages/Recipes"
import Create from "../Pages/Create"
import Favorite from "../Pages/Favorite"
import Viewrecipe from "../Pages/Viewrecipe"
import Editrecipe from "../Pages/Editrecipe"


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="/recipes/details/:id" element={<Viewrecipe/>}/>
      <Route path="/recipes/edit/:id" element={<Editrecipe/>}/>
    </Routes>
  )
}

export default Mainroutes;