import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Editrecipe = () => {
  const {id} =useParams();
  const {data,setdata} = useContext(recipecontext);
  const navigate = useNavigate(null);
  const filtedData = data.filter(e=>e.id==id);

  const {register , handleSubmit} = useForm({defaultValues:{
    title: filtedData[0].title,
    image: filtedData[0].image,
    recipe: filtedData[0].recipe,
    category: filtedData[0].category,
    description:filtedData[0].description
  }})
  
  const submitHandle=(e)=>{
    const index =data.findIndex(e=>e.id==id);
    const copydata = [...data];
    copydata[index]={...copydata[index],...e};
    setdata(copydata);
    localStorage.setItem("recipe",JSON.stringify(copydata));
    toast.success("Recipe updated!"); 
    navigate(`/recipes/details/${id}`);
  }

  return (
    <div className="flex align-center justify-center pt-25">
      <div className="flex p-[20px] text-white text-bold w-[90%] bg-sky-700/30 align-center justify-center rounded-[20px] gap-x-10">
      <img src={filtedData[0].image} alt={filtedData.title} className="w-[20%]"/>
      <form  className="flex-col" onSubmit={handleSubmit(submitHandle)}>

        <input type="link" placeholder="Image Link" className="block w-[90%] outline-1 outline-white"
        {...register("image")}/>

        <input type="text" placeholder="Title" className="block w-[90%] outline-1 mt-4 outline-white"
        {...register("title")}/>

        <textarea placeholder="Ingredients" className="block w-[90%] h-[100px] outline-1 mt-4 outline-white" {...register("recipe")}></textarea>

        <textarea placeholder="Instrctions" className="block w-[90%] h-[100px] outline-1 mt-4 outline-white "
       {...register("description")} ></textarea>

        <select {...register("category")} className="block w-[90%] outline-1 mt-4 outline-white">
          <option value="unknown" className="bg-red-800/70 ">Unknown</option>
          <option value="snakcs" className="bg-gray-800/70">Snacks</option>
          <option value="southIndian" className="bg-black/70">South Indian</option>
          <option value="chinese" className="bg-gray-800/70">Chinese</option>
          <option value="dessert" className="bg-black/70">Dessert</option>
          <option value="drinks" className="bg-gray-800/70">Drinks</option>
        </select>
        <button className=" bg-green-900/80 px-4 py-2 rounded-[6px] mt-6 hover:scale-102">Update</button>
      </form>
    </div>
    </div>
  )
}

export default Editrecipe;