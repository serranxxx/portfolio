import { Button, Col, Layout, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { assets } from './hooks/gifsPaths'
import { useNavigate } from 'react-router-dom'
import { HiOutlineTranslate } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
import i18n from '../languages/i18n'
import { appContext } from '../context/appContext'

const { Footer } = Layout



export const LayoutApp = () => {

  const navigate = useNavigate()
  const { newLanguage, language } = useContext(appContext)
  const [language_, setLanguage] = useState(true)
  const { t } = useTranslation();

  const setnewLanguage = () => {
    // setLanguage(!language_)
    if (language_) i18n.changeLanguage('en')
    else i18n.changeLanguage('es')
    newLanguage(language_)
  }

  useEffect(() => {
    setnewLanguage()
  }, [language_])
  


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
          icon={<HiOutlineTranslate style={{ color: `${!language_ ? '#bcb8b1' : '#f4f3ee'}` }} />}
          className='button'
          onClick={() => setLanguage(!language_)}
          style={{
            position: 'absolute', top: '3%', right: '3%',
            margin: '0 0.5vh 0 0.5vh',
             fontWeight: 500, height: 'auto',
            backgroundColor: `${language_ ? '#bcb8b1' : 'transparent'}`,
            borderRadius: '1vh', fontSize: '1em', color:`${!language_ ? '#bcb8b1' : '#f4f3ee'}`,
            border: `${language_ ? '0px solid #bcb8b1' : '2px solid #bcb8b1'}`
          }}>{t('button.translate')}</Button>
        <Col style={{
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <img src={language_ ? assets.text : assets.text_spanish} className='image-text' />

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


    </>


  )
}
