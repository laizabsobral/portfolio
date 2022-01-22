import { GlobalStyle } from "./styles/global";
import Card from "./Components/Card";
import "./App.css";
import Sobre from "./Components/Sobre";
import  Conecta  from "./Components/Conecta";
import Modo from "./Components/Modo";
import { ThemeContext } from "./context";
import { useContext } from "react";



function App() {
 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{
    backgroundColor: darkMode ? "#2A063A" : "white", 
    color: darkMode && "white",
    }}>
  
        <Modo/>
        <GlobalStyle/>
        <Card />
        <Sobre /> 
        <Conecta /> 
   
 
    </div>
  );
}

export default App;