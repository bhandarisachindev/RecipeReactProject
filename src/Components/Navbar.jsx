import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-center gap-x-10 bg-blue-300/60 rounded text-3xl backdrop-blur-sm py-[10px]">
      <NavLink className={(e)=> e.isActive ? "text-sky-900" : ""}  to="/"> Home </NavLink>
      <NavLink className={(e)=> e.isActive ? "text-sky-900" : ""} to="/recipes"> Recipes</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-sky-900" : ""} to="/about"> About </NavLink>
      <NavLink className={(e)=> e.isActive ? "text-sky-900" : ""} to="/favorite"> Favorite</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-sky-900" : ""} to="/create"> Create Recipe</NavLink>

    </div>
  )
}

export default Navbar;  
