import * as S from "./style.js";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context.js";
const Modo = () => {

    const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
    return( 
        <S.Toogle>
             <img src={Sun} alt="" className="iconeButton" />
            <img src={Moon} alt="" className="iconeButton" />
            <S.Button onClick={handleClick}     style={{ left: theme.state.darkMode ? 0 : 25 }}></S.Button>
        </S.Toogle>
    )
}

export default Modo;