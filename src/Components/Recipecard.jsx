import { Link } from "react-router-dom";
const Recipecard = (rec) => {

  console.log()
  return (
    <Link to={`/recipes/details/${rec.value.id}`}
      className="flex-none duration-50 hover:scale-101 w-[300px] max-h-max text-center bg-sky-700/60 rounded-[20px] p-2 backdrop-blur-xs"
    >
      <img
        src={rec.value.image}
        alt={rec.value.title}
        className="h-[200px] w-[200px] mx-auto object-cover rounded-md"
      />
      <span className="flex justify-end px-[20px] text-3xl">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-heart"></i>
      </span>
      <p className="text-gray-800 text-4xl  mt-[5px]">{rec.value.title}</p>
    </Link>
  )
}

export default Recipecard;