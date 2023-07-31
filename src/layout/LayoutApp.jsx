import { Button, Carousel, Col, Layout, Row } from 'antd'
import React from 'react'
import { HomeCards } from './HomeCards'
import { assets, gifs } from './hooks/gifsPaths'
const { Footer } = Layout

export const LayoutApp = () => {


  return (
    <>

      <div
      className='container'
        style={{
          height: '100vh', width: 'auto', backgroundColor: '#f4f3ee',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <Col style={{
          height:'100%', 
          display:'flex', alignItems:'center', justifyContent:'center',
          flexDirection:'column'
        }}>
          <img src={assets.text} className='image-text' />

          <Row 
          className='button-container'
          style={{
            display:'flex', alignItems:'center'
          }}>
            <Button
            className='button-main'
              style={{
                fontWeight: 500, height: '60%', width: '30%',
                color: '#f4f3ee', backgroundColor: '#7765e3',
                borderRadius: '1.5vh', 
              }}
            >Projects</Button>

            <Button
            className='button-main'
              style={{
                fontWeight: 500, height: '60%', width: '30%',
                color: '#7765e3', border: '2px solid #7765e3',
                borderRadius: '1.5vh',  marginLeft: '2vh',
                backgroundColor: '#f4f3ee'
              }}
            >About me</Button>
          </Row>
        </Col>



        <img 
        className='image-draw'
        src={assets.draw} style={{
          
          
          marginLeft: '5%'
        }} />

      </div>

      {/* <div
          style={{
            height: 'auto', width: 'auto', backgroundColor: '#bcb8b1',
            display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
            flexDirection: 'column', padding: '5%'

          }}
        >
         

          <HomeCards name="Avatar Studio" gif={gifs.avatar} />
          <HomeCards name="Taskify" gif={gifs.taskify} />
          <HomeCards name="Sender Reviewer" gif={gifs.send} />
          <HomeCards name="San Pancrasio" gif={gifs.pancrasio} />


        </div>  */}

  
    </>


  )
}
