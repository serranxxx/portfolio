import { Button, Col, Layout, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { assets } from './hooks/gifsPaths'
import { useNavigate } from 'react-router-dom'
import { HiOutlineTranslate } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';
import i18n from '../languages/i18n'
import { appContext } from '../context/appContext'
import { IoLanguageOutline, IoLanguageSharp } from 'react-icons/io5'
import { ContentLogin } from '../components/mobile/ContentLogin'
import { FooterLogin } from '../components/mobile/FooterLogin'

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
        className='container login-large'
        style={{
          height: '100vh', width: '100%', backgroundColor: '#f4f3ee',
           alignItems: 'center', justifyContent: 'center',
          flexDirection: 'row', position: 'relative'
        }}
      >
        {/* <Button
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
          }}>{t('button.translate')}</Button> */}

        <Button
          icon={language_ ? <IoLanguageOutline size={25} style={{ color: '#463f3a' }} /> : <IoLanguageSharp size={25} style={{ color: '#463f3a' }} />}
          className='button'
          onClick={() => setLanguage(!language_)}
          style={{ position: 'absolute', top: '30px', right: '30px' }}
          type='ghost' />

        <Col style={{
          height: '70%', width: '60%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          {/* <img src={language_ ? assets.text : assets.text_spanish} className='image-text' /> */}
          <p style={{
            width: '100%', textAlign: 'left', margin: 0,
            fontSize: '8em', fontWeight: 650, color: '#463f3a'
          }}>{t('Login.Hello')}</p>

          <p style={{
            width: '100%', textAlign: 'left', margin: '-5vh 0 0 0',
            fontSize: '8em', fontWeight: 650, color: '#463f3a'
          }}>{t('Login.Alberto')}</p>

          <p style={{
            width: '100%', fontSize: '2em', fontWeight: 600, color: '#463f3a', margin: 0
          }}>{t('Login.text')}</p>
          <Row
            className='button-container'
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
              width: '100%'
            }}>

            <Button
              className='button-main button'
              onClick={() => navigate(`/portfolio/main-projects`)}
              style={{
                fontWeight: 500, height: 'auto', width: 'auto',
                color: '#f4f3ee', backgroundColor: '#a99fea',
                borderRadius: '1.5vh', padding: '1% 7% 1% 7%',
                border: '2px solid #a99fea',
              }}
            >{t('Login.button.projects')}</Button>

            <Button
              className='button-main button'
              onClick={() => navigate(`/portfolio/resume`)}
              style={{
                fontWeight: 500, height: 'auto', width: 'auto',
                color: '#a99fea', border: '2px solid #a99fea',
                borderRadius: '1.5vh', marginLeft: '2vh',
                backgroundColor: '#f4f3ee', padding: '1% 5% 1% 5%',
              }}
            >{t('Login.button.about')}</Button>
          </Row>
        </Col>

        <img
          className='image-draw'
          src={assets.draw} style={{

            width: '25%',
            // marginLeft: '5%'
          }} />

      </div>

      <div
        className='container login-medium'
        style={{
          height: '100vh', width: '100%', backgroundColor: '#f4f3ee',
           alignItems: 'center', justifyContent: 'center',
          flexDirection: 'row', position: 'relative'
        }}
      >
        <Button
          icon={language_ ? <IoLanguageOutline size={25} style={{ color: '#463f3a' }} /> : <IoLanguageSharp size={25} style={{ color: '#463f3a' }} />}
          className='button'
          onClick={() => setLanguage(!language_)}
          style={{ position: 'absolute', top: '30px', right: '30px' }}
          type='ghost' />

        <Col style={{
          height: '70%', width: '80%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          {/* <img src={language_ ? assets.text : assets.text_spanish} className='image-text' /> */}
          <p style={{
            width: '100%', textAlign: 'left', margin: 0,
            fontSize: '6em', fontWeight: 650, color: '#463f3a'
          }}>{t('Login.Hello')}</p>

          <p style={{
            width: '100%', textAlign: 'left', margin: '-3vh 0 0 0',
            fontSize: '6em', fontWeight: 650, color: '#463f3a'
          }}>{t('Login.Alberto')}</p>

          <p style={{
            width: '100%', fontSize: '1.5em', fontWeight: 600, color: '#463f3a', margin: 0
          }}>{t('Login.text')}</p>
          <Row
            className='button-container'
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
              width: '100%'
            }}>

            <Button
              className='button-main button'
              onClick={() => navigate(`/portfolio/main-projects`)}
              style={{
                fontWeight: 500, height: 'auto', width: 'auto',
                color: '#f4f3ee', backgroundColor: '#a99fea',
                borderRadius: '1.5vh', padding: '1% 7% 1% 7%',
                border: '2px solid #a99fea',
              }}
            >{t('Login.button.projects')}</Button>

            <Button
              className='button-main button'
              onClick={() => navigate(`/portfolio/resume`)}
              style={{
                fontWeight: 500, height: 'auto', width: 'auto',
                color: '#a99fea', border: '2px solid #a99fea',
                borderRadius: '1.5vh', marginLeft: '2vh',
                backgroundColor: '#f4f3ee', padding: '1% 5% 1% 5%',
              }}
            >{t('Login.button.about')}</Button>
          </Row>
        </Col>


      </div>

      <Layout
        className='login-small'
        style={{ minHeight: '100vh', backgroundColor: '#f4f3ee', }}>
        {/* <HeaderProjectsMobile language_={language_} setLanguage={setLanguage} /> */}
        <ContentLogin />
        <FooterLogin language_={language_} setLanguage={setLanguage} />
      </Layout>


    </>


  )
}
