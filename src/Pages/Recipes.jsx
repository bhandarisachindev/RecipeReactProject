import { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext"
import Recipecard from "../Components/Recipecard";



const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);
 
  const ele = data.map((rec) => (
    <Recipecard key={rec.id} value={rec} />
  ));

  if(data.length<=0){ return (
     <div className="flex justify-center">
      <div className="flex flex-wrap justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      <p className="text-5xl text-gray-900" >Create recipes to view recipes here.</p> 
    </div>
    </div>
  ) }else{
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      {ele}
    </div>
    </div>
  )}
};

export default Recipes;