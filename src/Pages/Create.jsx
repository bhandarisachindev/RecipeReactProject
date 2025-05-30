import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const {register, handleSubmit,reset, formState: { errors } }  =  useForm();
  const navigate =useNavigate();
 const {data,setdata}= useContext(recipecontext);

  const submitHandler =(recipe)=>{
    recipe.id = nanoid();
    let newData = [...data];
      newData.push(recipe);
    setdata(newData);
    localStorage.setItem("recipe",JSON.stringify(newData));
    toast.success("Recipe created.");
    navigate("/recipes");
    reset();
  }


  return (
  <div className=" flex pt-[90px] align-center justify-center">
    <form className="block bg-white/30 border-1 flex-col h-max text-white p-10" onSubmit={handleSubmit(submitHandler)}> 
      <input className="block border-b outline-0 p-1"
      {...register("image",{ required: "All fields are required." })} type="url" placeholder="Enter Image url"/>
      

      <input className="block border-b outline-0 p-1 mt-[10px]"
      {...register("title",{ required: "All fields are required." })} type="text" placeholder="Title"/>
      

      <textarea className="block border-b outline-0 p-1 mt-[10px]"
      {...register("description",{ required: "All fields are required." })} type="text" placeholder="Description here...."></textarea>
      

      <textarea className="block border-b outline-0 p-1 mt-[10px]"
      {...register("ingredients",{ required: "All fields are required." })} type="text" placeholder="Write Ingredients Seprated by ,"></textarea>
      {Object.keys(errors).length > 0 && (
      <small className="block text-red-900 mt-2">All fields are required.</small>
    )}


      <p className="mt-[10px]">Category</p>
      <select {...register("category")} className="block border-1 outline-0 ">
        <option className="bg-gray-700/70" value="unknown">Unknown</option>
        <option className="bg-gray-700/70" value="snacks">Snacks</option>
        <option className="bg-gray-700/70" value="southindian">South Indian</option>
        <option className="bg-gray-700/70" value="chinese">Chinese</option>
        <option className="bg-gray-700/70" value="dessert">Dessert</option>
        <option className="bg-gray-700/70" value="drinks">Drinks</option>
      </select> 

      <button className="px-4 py-2 bg-white/60 rounded text-lime-800 mt-[20px]"
      >Save</button>
    </form>
    </div>
  )
}

export default Create;