import React from 'react';
import styled from "styled-components"
import { useEffect,useState } from 'react';
import { questions } from "./Api";
import { MyAccordian } from './Accordian/MyAccordian';
import {motion} from "framer-motion"
import Stripe from "../Images/stripe2.png"

export const Section4 = () => {
    const [data, setData] = useState(questions);

  return (
     <Container>
        <Head>
        Some common <br/>
        questions
        <br/>
        <img src={Stripe} />
        </Head>

          <QuestionRoom>
          {data.map((curElem) => {
           const { id } = curElem;

             return <MyAccordian key={id} {...curElem} />;
           })}

            
          </QuestionRoom>
           <Button  whileHover={{scale:1.4}}>
           Create my free resume
           </Button>

     </Container>


  );
};

const Container=styled.div`
height: 1754px;
margin-top:-50px;
width: 1ref;
border-radius: 0px;
background: #041562;
position: relative;
border-bottom:solid white 10px;
`;
const Head=styled.h1`

font-family: DM Sans;
font-size: 78px;
font-style: normal;
font-weight: 700;
line-height: 101px;
letter-spacing: 0em;
text-align: center;
padding-top:50px;
color:white;

img{
    position:absolute;
    margin-top:10px;
    margin-left:-200px;
}
`;
const QuestionRoom=styled.div`
margin-top:300px;

`;
const Button=styled(motion.button)`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;


margin-top:100px;
width: 356px;
height: 69px;
left: 812px;
top: 7701px;

background: #FFC900;
border-radius: 7px;
`;