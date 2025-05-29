import { createContext, useState } from "react"

export const recipecontext = createContext(null);

  const RecipeContext = (props) => {

  const [data,setdata] = useState([{
           title:"Pizza",
           recipe:"2 cups all-purpose flour, ¾ cup warm water, 1 tsp instant yeast, 1 tsp sugar, 1 tsp salt, 1 tbsp olive oil, 1 cup crushed tomatoes or tomato puree, 1 clove garlic (minced), 1 tsp olive oil, salt, pepper, oregano, basil (to taste), shredded mozzarella cheese, vegetables like onions, bell peppers, mushrooms, olives, tomatoes, meats like pepperoni, sausage, cooked chicken, and optional fresh basil.",
           image:"https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?ga=GA1.1.1762750705.1748432057&semt=ais_items_boosted&w=740",
           id:"oneone1",
           description:"Mix warm water, yeast, and sugar; let sit 5-10 minutes until frothy, then add flour, salt, and olive oil, knead until smooth, and let rise for 1 hour; meanwhile, heat olive oil, sauté garlic, add tomatoes, salt, pepper, oregano, and basil, then simmer 15 minutes to make sauce; preheat oven to 475°F (245°C), roll out dough, place on tray, spread sauce, add cheese and toppings, bake for 12-15 minutes until crust is golden and cheese is bubbly. ",
           category: "Italian",
           fav:true
  }]);
  return (
    <recipecontext.Provider value={{data,setdata}}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext;