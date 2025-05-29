  import Navbar from "./Components/Navbar";
  import Mainroutes from "./Routes/Mainroutes"

  const App = () => {
    return (
      <div className="bg-cover bg-center min-h-screen w-full bg-fixed bg-[url('/bg.svg')]">
        <Navbar/>
        <Mainroutes/>
      </div>
    )
  }

  export default App;