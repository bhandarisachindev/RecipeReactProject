import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Viewrecipe = (p) => {
  const { data , setdata } = useContext(recipecontext);
  const { id } = useParams();
  
  const recipe = data.find((rec) => rec.id.toString() === id);

  const navigate = useNavigate(null);
  const getFav = localStorage.getItem("fav");
  const favData =JSON.parse(getFav);
  const [fav,setFav]=useState(true);


  const checkFav = () => {
  if (getFav) {
    const filteredFav = favData?.filter(e => e.id == id);
    return filteredFav.length > 0;
  } else {
    return false;
  }
}

  useEffect(()=>{
  setFav(checkFav());
  },[favData,id]);

  const deletHandler =()=>{
    const removeData = data.filter((e)=>e.id !=id);
    navigate("/recipes");
    setdata(removeData);
    localStorage.setItem("recipe",JSON.stringify(removeData));
    if (fav) {
    removeFromFavorites(); 
  } toast.error("Recipe deleted.");

  }
  if (!recipe){
  return (
     <div className="flex  justify-center">
      <div className="flex flex-wrap border-1 border-white justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      <p className="text-5xl text-gray-900" >Recipe not found or still loading... </p> 
    </div>
    </div>
  )
}


const favHandler = () => {
  if (fav) {
    removeFromFavorites(); 
  } else {
    addToFavorites(); 
  }
}; 

const removeFromFavorites = () => { 
  let updateFav =favData?.filter((e)=>e.id!=id)|| [] ;
  console.log(updateFav);
  localStorage.setItem("fav",JSON.stringify(updateFav));
  setFav(false);
  toast.warn("Removed from favorites");
}; 

const addToFavorites = () => {
  let updateFav= favData?[...favData,recipe]:[recipe];
  localStorage.setItem("fav",JSON.stringify(updateFav));
  setFav(true); 
  toast.success("Added to favorites"); 
}; 

  


  return (
    <div className="flex align-center  justify-center relative">
      <div key={id} className="mt-[100px] border-1 border-white p-[50px] flex gap-x-20 align-center justify-center bg-sky-900/40 w-[90%] rounded-[50px]">
      <img src={recipe.image?recipe.image : null} alt={recipe?.title} 
      className="h-[400px] w-[400px]"/>
        <div>
          <p className="text-7xl">{recipe.title } 
            <i onClick={favHandler} className={`fa-heart text-6xl ${fav ? 'fa-solid text-red-900' : 'fa-regular text-gray-400'}`} ></i></p>
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