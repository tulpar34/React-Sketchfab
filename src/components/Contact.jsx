import React, { useState,useRef } from 'react'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
`;
const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
gap:50px;
`;
const Left = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:flex-end;

 @media only screen and (max-width: 768px) {
   justify-content:center;
   }
`;
const Title = styled.h1`
  font-weight:200;
`;
const Form = styled.form`
  width:500px;
  display:flex;
  flex-direction:column;
  gap:25px;

  @media only screen and (max-width: 768px) {
    width:300px;
     }
`;
const Input = styled.input`
  padding:20px;
  background-color:white;
  border:none;
  outline:none;
  border-radius:4px;
  &:focus{
    background:#e8e6e6;
  }
`;
const TextArea = styled.textarea`
  padding:20px;
  border:none;
  outline:none;
  border-radius:4px;
  background-color:#fff;
  resize:none;
  &:focus{
    background:#e8e6e6;
  }
`;
const Button = styled.button`
  background-color:#da4ea2;
  border:none;
  outline:none;
  border-radius:4px;
  color:#fff;
  font-weight:bold;
  cursor:pointer;
  padding:20px;
`;
const Right = styled.div`
 flex:1;

 @media only screen and (max-width: 768px) {
   display:none;
   }
`;



const Contact = () => {
  const ref = useRef()
const[success,setSuccess] = useState(null)
const handleSubmit = e => {
 e.preventDefault()
 emailjs.sendForm('service_3r7ae48', 'template_v872lac', ref.current, '21vTmN8sBItDOjOTO')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
}
  return (
    <Section>
    <Container>
      <Left>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>İletşim</Title>
          <Input placeholder='Adınız'name="name"></Input>
          <Input placeholder='Email' name="email"></Input>
          <TextArea placeholder='Mesajınızı Yazın' name="message" rows={10}></TextArea>
          <Button type='submit'>Gönder</Button>
          {success && "Mesajınız Teslim Edildi.En Kısa Sürede Geri Dönüş Yapılacaktır."}
        </Form>
      </Left>
      <Right>
        <Map/>
      </Right>
    </Container>
    </Section>
  )
}

export default Contact
