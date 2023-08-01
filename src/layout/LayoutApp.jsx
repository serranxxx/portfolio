import { Button, Carousel, Col, Layout, Row } from 'antd'
import React from 'react'
import { HomeCards } from './Projects/HomeCards'
import { assets, gifs } from './hooks/gifsPaths'
import {  useNavigate } from 'react-router-dom'
const { Footer } = Layout

export const LayoutApp = () => {

  const navigate = useNavigate()

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
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img src={assets.text} className='image-text' />

          <Row
            className='button-container'
            style={{
              display: 'flex', alignItems: 'center'
            }}>
           
              <Button
                className='button-main button'
                onClick={() => navigate(`/portfolio/main-projects`)}
                style={{
                  fontWeight: 500, height: 'auto', width: 'auto',
                  color: '#f4f3ee', backgroundColor: '#7765e3',
                  borderRadius: '1.5vh', padding:'1% 5% 1% 5%',
                  border: '2px solid #7765e3',
                }}
              >Projects</Button>

            <Button
              className='button-main button'
              style={{
                fontWeight: 500, height:'auto', width: 'auto',
                color: '#7765e3', border: '2px solid #7765e3',
                borderRadius: '1.5vh', marginLeft: '2vh',
                backgroundColor: '#f4f3ee', padding:'1% 5% 1% 5%',
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
