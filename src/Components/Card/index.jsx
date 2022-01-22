
import * as S from "./styles.js";
import foto from "../../img/foto.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// para instalar comando npm install react-icons --save

function Card() {

  return (
    <>
        <S.Banner> 
          <S.BannerEsquerdo> 
            <S.BannerWrapper> 
              <S.Intro> Olá, meu nome é </S.Intro>
              <S.Descri> Laiza Benevides </S.Descri>
              <S.TitleItem> Desenvolvedora Front-End <span className="emoji"> 💻 </span></S.TitleItem>
              <S.Bio> Garota pernambucana de apenas 18 anos, que encontrou sua paixão no tecnólogo de Desenvolvimento de Sistemas
                aos 14 anos. Desde então busca espalhar conhecimento na sua área de desenvolvimento front-end para outras garotas,
                empoderando-as na área da TI, 
                por isso decidiu criar um projeto para conectar mulheres, chamado Conecta Elas.</S.Bio>
              <S.Icons>
                <S.IconsInstagram>
                  <a href="https://www.instagram.com/conecta_elas/" className="link"> 
                   <AiFillInstagram size={34} /> 
                  </a> 
                </S.IconsInstagram>
                <S.IconsGithub>
                  <a href="https://github.com/laizabsobral" className="link"> 
                    <AiFillGithub size={34}/> 
                  </a>
                </S.IconsGithub>
                <S.IconsLinkedin> 
                  <a href="https://www.linkedin.com/in/laiza-benevides-1957a11b2/" className="link"> 
                    <AiFillLinkedin size={34} />
                  </a>
                </S.IconsLinkedin>
              </S.Icons>
              
              {/* <S.Button id={'change-theme-btn'} onClick={onChangeTheme}> Mudar tema </S.Button> */}
            </S.BannerWrapper>
          </S.BannerEsquerdo>
          <S.BannerDireito> 
            <img src={foto} alt="" className="MinhaFoto" />
          </S.BannerDireito>
        </S.Banner>
    </>
  );
}

export default Card;