import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Viewrecipe = (p) => {
  const { data , setdata } = useContext(recipecontext);
  const { id } = useParams();
  const recipe = data.find((rec) => rec.id.toString() === id);
  const navigate = useNavigate(null);
  const deletHandler =()=>{
    const removeData = data.filter((e)=>e.id !=id);
    navigate("/recipes")
    setdata(removeData);
    toast.success("Recipe deleted.");
  }
  return (
    <div className="flex align-center justify-center relative">
      <div key={id} className="mt-[100px] p-[50px] flex gap-x-20 align-center justify-center bg-sky-900/40 w-[90%] rounded-[50px]">
      <img src={recipe.image} alt={recipe.title} 
      className="h-[400px] w-[400px]"/>
        <div>
          <p className="text-7xl">{recipe.title } <i  className="fa-solid fa-heart text-red-900 text-6xl" ></i></p>
          <p className="mt-[10px] text-white text-xl"> <span className="text-black text-2xl font-medium">Items required : </span> {recipe.recipe}</p>
          <p className="mt-[10px] mb-[20px] text-white text-xl"><span className="text-black text-2xl font-medium">Instrcutions : </span>{recipe.description}</p>
          <div className="absolute bottom-[20px]">
          <span className=" bg-gray-800/80 px-4 py-2 rounded text-white mr-[20px]"
          onClick={()=>navigate("/recipes")}>Go Back</span>
          <span className=" bg-red-800/80 px-4 py-2 rounded text-white" 
          onClick={deletHandler}>Delete</span>
          <Link to={`/recipes/edit/${id}`}><span className=" bg-green-800/80 px-4 py-2 rounded text-white ml-[20px]" >Edit</span></Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Viewrecipe;