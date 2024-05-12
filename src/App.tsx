import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";

function App() {
   return (
      <>
         <Button>Кнопка</Button>
         <Button appearence="big">Кнопка</Button>
         <Input placeholder="Email..." />
         <div>
            <a href="/">menu</a>
            <a href="/cart">cart</a>
         </div>
         <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </>
   );
}

export default App;
