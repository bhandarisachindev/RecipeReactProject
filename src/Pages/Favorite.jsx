import Recipecard from "../Components/Recipecard";

const Favorite = () => {

let favData =localStorage.getItem("fav");

if(favData && favData==[]){
  favData=JSON.parse(favData);
  const ele = favData.map((rec) => (
    <Recipecard key={rec.id} value={rec}/>
  ));
  return (
    <div className="flex justify-center">
      <div className="flex border-1 border-white flex-wrap justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      {ele}
    </div>
    </div>
  )
}else{
  return (
     <div className="flex  justify-center">
      <div className="flex flex-wrap border-1 border-white justify-around p-10 bg-white/20 rounded-[20px] mt-[70px] mx-[20px] gap-[30px] backdrop-blur-[2px] w-[90%]">
      <p className="text-5xl text-gray-900" >Add Fav recipes to view recipes here.</p> 
    </div>
    </div>
  )}
};

export default Favorite;