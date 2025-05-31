
# 📄 Recipe App - Overview


## 📦 Data Handling

### Where is data stored?
Favorite recipes are stored in `localStorage` under the key `"fav"`.

### How is data used?
1. On component load, the Home page fetches `fav` data from `localStorage`.
2. If the data exists and contains recipes:
   - It maps over the array and displays each item using the `Recipecard` component.
3. If the data is `null` or an empty array:
   - A message is displayed: `"Add Fav recipes to view recipes here."`

---

## ✍️ UI Explanation

### Elements on Home Page:

- **Intro Paragraph**:
  A paragraph welcoming the user and describing the app's purpose.

  Example:
  ```
  Welcome to the Recipe App! Here you can view your favorite recipes, explore new ones, and create your own.
  ```

- **Favorite Recipes Section**:
  Displays recipe cards using the `Recipecard` component.

- **Fallback Message**:
  Shown when no favorite recipes are stored.

---

## ✅ Tips

- Ensure `localStorage.setItem("fav", JSON.stringify(favArray))` is used correctly wherever favorites are updated.
- Use conditional rendering to handle the UI display based on data availability.
- Keep styles consistent using Tailwind classes like `flex`, `backdrop-blur`, `text-gray`, etc.

---

## 🛠 Technologies Used

- **React** for UI components
- **React Router** for page routing
- **React Context API** for global state (recipes)
- **Tailwind CSS** for styling
- **localStorage** for persistent state

---
