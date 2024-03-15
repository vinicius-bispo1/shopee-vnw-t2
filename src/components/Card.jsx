import * as S from "./styled"

export default function Card({imagem, titulo, texto}) {
  return (
    <S.Card>
        <img src={imagem} alt="" />
        <h2>{titulo}</h2>
        <p>R$:{texto}</p>
        <button>Compre Agora</button>
    </S.Card>
  )
}
