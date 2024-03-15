import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
export const Header = styled.header`

background-color: #ff7337;
height: 20vh;
display: flex;
justify-content: space-around;
align-items: center;
img{
width: 10vw;
}
input{
  width: 30vw;
  height: 5vh;
  padding-left: 10px;
}
`
export const Lista = styled.ul`
/* border: solid 1px yellow; */
list-style: none;
width: 20vw;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
font-weight: 700;
`

export const Card = styled.div`
 /* border: solid 1px yellow; */
 width: 20vw;
 height: 50vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 img{
  width: 15vw;
 }
 &:hover{
  box-shadow: 5px 5px 5px 5px  gray;
 }
 p{
   color: #ff7337;
 }
 button{
  background-color: #ff7337;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
 }
`
export const BoxProduto = styled.section`
 /* border: solid 1px blue; */
 height: 70vh;
 display: flex;
justify-content: space-evenly;
align-items: center;
`
