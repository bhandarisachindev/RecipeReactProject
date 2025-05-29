import { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";
import Recipecard from "../Components/Recipecard";


const Favorite = () => {

  const {data,setdata} =useContext(recipecontext);

  let favdata =data.map((rec,i)=>{
    if(rec.fav){
       return <Recipecard key={rec.id} value={rec} />
    }
  })
  
  if(favdata[0]==undefined){
      favdata = <p className="text-5xl text-gray-900" >Add Favorite to view recipes here.</p>;
    }

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      {favdata}
    </div>
    </div>
  )
};

export default Favorite;