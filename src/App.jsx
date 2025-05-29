import Navbar from "./Components/Navbar";
import Mainroutes from "./Routes/Mainroutes"

const App = () => {
  return (
    <div className="bg-[url(../public/bg.svg)] bg-cover bg-center h-screen w-screen ">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App;