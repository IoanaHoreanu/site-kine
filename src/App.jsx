import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./components/Navigation";

function App() {
    document.title = 'Baltatescu Ana Maria';
  return (
    <>
    <Navigation/>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
} 

export default App;