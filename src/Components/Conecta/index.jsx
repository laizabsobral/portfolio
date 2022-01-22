import * as S from "./conecta.js";
import Sobreimg from "../../img/Conecta.svg";
const Conecta = () => {
    return( 
        <S.Conecta>
            <S.SobreEsquerdo> 
          <S.SobreCard className="bg"> </S.SobreCard>
          <S.SobreCard> 
              <img src={Sobreimg} alt="" className="Sobreimg" />
          </S.SobreCard>
          </S.SobreEsquerdo>
          <S.SobreDireito>
              <S.TitleSobre> Conecta Elas <hr></hr> </S.TitleSobre>
              <S.DescSobre> Projeto criado em 2020 com objetivo de conectar e empoderar mulheres na TI, ajudando a iniciar sua carreira na tecnologia💜 </S.DescSobre>
          </S.SobreDireito>
        </S.Conecta>
    )
}

export default Conecta;