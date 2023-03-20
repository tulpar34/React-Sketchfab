import React, { useState } from 'react'
import styled from 'styled-components'
import ProductDesign from './ProductDesign';
import Development from './Development';
import WebDesign from './WebDesign';


const data = [
  "Web Design",
  "Web Gelistirme",
  "illüstrasyon",
  "Ürün Dizayn",
  "Sosyal Medya"
]

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
position:relative;
color:#000;
font-size:14px;
font-weight:300;
`;
const Container = styled.div`
width:1000px;
display:flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
 width:100%;
 flex-direction:column;
}
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

@media only screen and (max-width: 768px) {
padding:20px;
justify-content:center;
}
`;
const List = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:20px;
`;
const ListItem = styled.li`
  font-size:67px;
  font-weight:bold;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke:1px #fff;
  position:relative;

  @media only screen and (max-width: 768px) {
   font-size:24px;
   color:#fff;
   -webkit-text-stroke:0px;
  }

  ::after{
    content:'${(props) =>props.text}';
    position:absolute;
    top:0;
    left:0;
    color:#fff;
    width:0;
    overflow:hidden;
    white-space:nowrap;
  }
  &:hover{
    ::after{
      animation:movieText 0.5s linear both;

      @keyframes movieText {
       to{
        width:100%;
       }
      }
    }
  }
`;
const Right = styled.div`
flex:1;
`;

const Works = () => {

  const [work, setWork] = useState('Web Design')
  return (
    <Section>
      <Container>
         <Left>
          <List>
            {data.map((item) => (
               <ListItem key={item} text={item}onClick={()=>setWork(item)}>{item}</ListItem>
               ))}
            
          </List>
         </Left>
         <Right>
          {
           work === 'Web Design' ? (<WebDesign/>)  : 
           work ==='Web Gelistirme' ? (<Development/>) :
          <ProductDesign/>
          }
         </Right>
      </Container>
    </Section>
  )
}

export default Works
