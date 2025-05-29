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
    recipe.fav = false;
    setdata([...data,recipe]);
    reset();
    toast.success("Recipe created.");
    navigate("/recipes");
  }


  return (
    <form className="block bg-white flex-col h-max  mt-[90px]" onSubmit={handleSubmit(submitHandler)}> 
      <input className="block border-b outline-0 p-1"
      {...register("image")} type="url" placeholder="Enter Image url"/>
      <small className="text-red-500">Error</small>

      <input className="block border-b outline-0 p-1"
      {...register("title")} type="text" placeholder="Title"/>
      <small className="text-red-500">Error</small>

      <textarea className="block border-b outline-0 p-1"
      {...register("description")} type="text" placeholder="Description here...."></textarea>
      <small className="text-red-500">Error</small>

      <textarea className="block border-b outline-0 p-1"
      {...register("ingredients")} type="text" placeholder="Write Ingredients Seprated by ,"></textarea>
      <small className="block text-red-500">Error</small>


      <p>Category</p>
      <select {...register("category")}>
        <option value="unknown">Unknown</option>
        <option value="snacks">Snacks</option>
        <option value="southindian">South Indian</option>
        <option value="chinese">Chinese</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>

      <button className="px-4 py-2 bg-gray-800 rounded text-white mt-[5px]"
      >Save</button>
    </form>
  )
}

export default Create;