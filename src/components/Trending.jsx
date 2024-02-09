import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const  Trending = () => {
  return (
<Container>
Trending
<Content>
    <Wrap>
      <Link to="/">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Link>
    </Wrap>
    <Wrap>
      <Link to="/">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Link>
    </Wrap>
    <Wrap>
      <Link to="/">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Link>
    </Wrap>
    <Wrap>
      <Link to="/">
        <img src="https://scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Link>
    </Wrap>
</Content>

</Container>
       
      
    
  )
}


const Container=styled.div`
padding: 0 0 26px;
`;

const Content=styled.div`
display: grid;
grid-gap:25px;
grid-template-columns: repeat(4,minmax(0,1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;


const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default  Trending