import * as S from "./sobre.js";
import Sobreimg from "../../img/Sobre.svg";

const Sobre = () => {
    return( 
        <S.Sobre>
          <S.SobreEsquerdo> 
          <S.SobreCard className="bg"> </S.SobreCard>
          <S.SobreCard> 
              <img src={Sobreimg} alt="" className="Sobreimg" />
          </S.SobreCard>
          </S.SobreEsquerdo>
          <S.SobreDireito>
              <S.TitleSobre> Sobre mim <hr></hr> </S.TitleSobre>
              <S.DescSobre> - Formada no curso técnico em Desenvolvimento de sistemas,</S.DescSobre>
              <S.DescSobre> - Cursando o tecnólogo em Gestão da tecnologia da informação,</S.DescSobre>
              <S.DescSobre> - Estagiária de front-end,</S.DescSobre>
              <S.DescSobre> - CEO do Conecta Elas,</S.DescSobre>




            
          </S.SobreDireito>
        </S.Sobre>
    )
}

export default Sobre;