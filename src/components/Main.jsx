import Card from "./Card"
import * as S from "./styled"


export default function Main() {
  return (
    <main>
      <S.BoxProduto>
        <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-23020-om8lzilm48mv44"} 
        titulo={"Ovo da Páscoa"}
        texto={"45,00"}  
        />
        <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-7rcby-lrrw0s7k4hogce"} 
        titulo={"Barra de chocolate"}  
        texto={"10,00"}
        />
         <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-7rcby-lrrw0s7k4hogce"} 
        titulo={"Barra de chocolate"}  
        texto={"10,00"}
        />
      </S.BoxProduto>
            <S.BoxProduto>
        <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-23020-om8lzilm48mv44"} 
        titulo={"Ovo da Páscoa"}
        texto={"45,00"}  
        />
        <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-7rcby-lrrw0s7k4hogce"} 
        titulo={"Barra de chocolate"}  
        texto={"10,00"}
        />
         <Card  imagem={"https://down-br.img.susercontent.com/file/sg-11134201-7rcby-lrrw0s7k4hogce"} 
        titulo={"Barra de chocolate"}  
        texto={"10,00"}
        />
      </S.BoxProduto>
    </main>
  )
}
