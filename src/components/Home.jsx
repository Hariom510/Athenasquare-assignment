import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [firstPara, setFirstPara] = useState(false);
    const [secondPara, setSecondPara] = useState(false);
    const [thirdPara, setThirdPara] = useState(false);
    const { ref: myRef1, inView: isFirstVisible } = useInView();
    const { ref: myRef2, inView: isSecondVisible } = useInView();
    const { ref: myRef3, inView: isThirdVisible } = useInView();

    useEffect(()=>{
      if(isFirstVisible){
      setFirstPara(true);
    }
      else {
      setFirstPara(false);
    }
    }, [isFirstVisible]);

    useEffect(()=>{
      if(isSecondVisible){
      setSecondPara(true);
    }
      else {
      setSecondPara(false);
    }
    }, [isSecondVisible]);

    useEffect(()=>{
      if(isThirdVisible){
      setThirdPara(true);
    }
      else {
      setThirdPara(false);
    }
    }, [isThirdVisible]);


    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1`
            );
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false); 
          }
        };
        getData();
      }, []);

  return (
    <Container>
        <LeftContent>
        {loading && <div>A moment please...</div>}
        {error && (
        <div>{`There is a problem in fetching the data - ${error}`}</div>
        )}
        {data &&
          data.texts.map((val, idx, arr ) => {
            return (
              <>
            <TextContent>
            <h3>{val.heading}</h3>
            <h2>{val.subHeading}</h2>
            <p>{val.description}</p>
            {idx===0 && <span ref={myRef1}></span>}
            {idx===1 && <span ref={myRef2}></span>}
            {idx===2 && <span ref={myRef3}></span>}
            </TextContent>
            <ImageContent>
              {idx===0 && <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-1600.png" alt="" />}
              {idx===1 && <img src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-1600.png' alt='' /> }
              {idx===2 && <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-1600.png" alt='' /> }
            </ImageContent>
            </>
            )
            })}
        </LeftContent>
        <RightContent>
          {firstPara && <>
            <video autoPlay ={true} loop ={true} playsInline ={true}>
            <source src = "/videos/first.mp4" type ="video/mp4" />
            </video>
          </>}
          {secondPara && <>
            <video autoPlay ={true} loop ={true} playsInline ={true}>
            <source src = "/videos/second.mp4" type ="video/mp4" />
            </video>
          </>}
          {thirdPara && <>
            <video autoPlay ={true} loop ={true} playsInline ={true}>
            <source src = "/videos/third.mp4" type ="video/mp4" />
            </video>
          </>}
        </RightContent>
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    padding: 4%; 
    @media(max-width:1050px){
      flex-direction: column;
      margin-top: 10%;
  } 
`
const LeftContent = styled.div`
    width: 33vw;
    text-align: left;
    h3{
      font-size: 1.4rem;
      font-weight: 600;
      background-image: linear-gradient(60deg,#ff3a7c,#741eff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2{
      font-size: 3rem;
      font-weight: 600;
      margin-top: 0px;
      margin-bottom: 40px;
    }
    p{
      color: #4d4d4d;
      font-size: 1.125rem;
      margin-top: 0;
    }
    @media(max-width:1050px){
      width: 80vw;
      margin: 0 auto;
  }
`
const TextContent = styled.div`
  height: 100vh;
  bottom:0;
  /* margin-bottom: 100px; */
  @media(max-width:1050px){
      height: auto;
  }
  
`
const RightContent = styled.div`
    position: sticky;
    top: 7%;
    margin-left: 7%;
    width: 55vw;
    height: 400px;
    video{
      background-size: cover;
      background-position: 50% 50%;
      position: absolute;
      margin: auto;
      width: 100%;
      height: 100%;
      right: -100%;
      bottom: -100%;
      top: -100%;
      left: -100%;
      object-fit: cover;
      z-index: -100;
      border-radius: 3rem;
    }
    @media(max-width:1050px){
      display: none;  
  }
`
const ImageContent = styled.div`
  display: none;
  img{
    width: 80vw;
    height: auto;
  }
  @media(max-width:1050px){
    margin-top: 5%;
    margin-bottom: 12vh;
      display: block;
  }
`