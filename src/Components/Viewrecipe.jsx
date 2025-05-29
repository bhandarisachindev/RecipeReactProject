import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";


const Viewrecipe = (p) => {
  const { data } = useContext(recipecontext);
  const { id } = useParams();
  const recipe = data.find((rec) => rec.id.toString() === id);

  return (
    <div className="flex align-center justify-center relative">
      <div key={id} className="mt-[100px] p-[50px] flex gap-x-20 align-center justify-center bg-white/30 w-[90%] rounded-[50px]">
      <img src={recipe.image} alt={recipe.title} 
      className="h-[400px] w-[400px]"/>
        <div>
          <p className="text-7xl">{recipe.title}</p>
          <p className="mt-[10px]">{`Items required: ${recipe.recipe}`}</p>
          <p className="mt-[10px] mb-[20px]">{`Instrcutions to Cook: ${recipe.description}`}</p>
          <div className="absolute bottom-[20px]">
            <span className=" bg-gray-800/80 px-4 py-2 rounded text-white mr-[20px]">Go Back</span>
          <span className=" bg-red-800/80 px-4 py-2 rounded text-white">Delete</span>
          <span className=" bg-green-800/80 px-4 py-2 rounded text-white ml-[20px]">Update</span>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Viewrecipe;