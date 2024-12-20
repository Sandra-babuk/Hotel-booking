import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AllHotels from './pages/AllHotels'
import MyHotel from "./pages/MyHotel"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/hotels" element={<AllHotels/>}></Route>
      <Route path="/myhotels/:id" element={<MyHotel/>}></Route>

     </Routes>
    </>
  )
}

export default App
