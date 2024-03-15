import * as S from "./styled"

export default function Header() {

    
  return (
    <S.Header>
        <img src="https://magis5.com.br/wp-content/uploads/2022/08/shopee-logo-branco.png" alt="" />
        <input placeholder="Buscar na shopee" type="text" />
        <S.Lista>
            <li>Ofertas</li>
            <li>Produtos em Destaque</li>
        </S.Lista>
    </S.Header>
  )
}
