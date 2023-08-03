import { Button, Carousel, Col, Layout, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { HomeCards } from './Projects/HomeCards'
import { assets, gifs } from './hooks/gifsPaths'
import { useNavigate } from 'react-router-dom'
import { HiOutlineTranslate } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
import i18n from '../languages/i18n'

const { Footer } = Layout



export const LayoutApp = () => {

  const navigate = useNavigate()
  const { t } = useTranslation();
  const [language, setLanguage] = useState(false)

  useEffect(() => {
    if (!language) i18n.changeLanguage('en')
    else i18n.changeLanguage('es')
  }, [language])


  return (
    <>

      <div
        className='container'
        style={{
          height: '100vh', width: 'auto', backgroundColor: '#f4f3ee',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <Button
          icon={<HiOutlineTranslate style={{ color: `${!language? '#7765e3': '#f4f3ee'}` }} />}
          className='button'
          onClick={() => setLanguage(!language)}
          style={{
            position: 'absolute', top: '3%', right: '3%',
            margin: '0 0.5vh 0 0.5vh',
            aspectRatio: '1/1', fontWeight: 500, height: 'auto',
             backgroundColor: `${language? '#7765e3': 'transparent'}`,
            borderRadius: '1vh', fontSize: '1.1em',
            border:`${language? '' : '2px solid #7765e3'}`
          }} />
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
                borderRadius: '1.5vh', padding: '1% 7% 1% 7%',
                border: '2px solid #7765e3',
              }}
            >{t('Login.button.projects')}</Button>

            <Button
              className='button-main button'
              onClick={() => navigate(`/portfolio/resume`)}
              style={{
                fontWeight: 500, height: 'auto', width: 'auto',
                color: '#7765e3', border: '2px solid #7765e3',
                borderRadius: '1.5vh', marginLeft: '2vh',
                backgroundColor: '#f4f3ee', padding: '1% 5% 1% 5%',
              }}
            >{t('Login.button.about')}</Button>
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
