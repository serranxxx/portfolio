import React, { useContext, useEffect } from 'react'
import { Button, Col, Layout, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { assets } from '../../helpers/gifsPaths';
import { Link } from 'react-router-dom';
import { appContext } from '../../context/appContext';


const { Content } = Layout;

export const ContentHome = () => {

  const { t } = useTranslation();
  const { theme } = useContext(appContext)

  return (
    <>
      <Content className='scrollable-div resume-large'
        style={{
          marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
          marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
          overflowY: 'scroll',
          height: 'auto', // Ajusta estos valores según el header y footer
          alignItems: 'center', justifyContent: 'center',
          flexDirection: 'row', padding: '5%'
          // backgroundColor: `${bg}70`
        }}>
        <img
          // className='image-draw'
          src={assets.draw} style={{

            width: '20%',
            // display: theme ? '' : 'none',
            marginRight: '30px'
          }} />
        <Col style={{
          width: '50%',
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'flex-start', flexDirection: 'column'
        }}>
          <p style={{
            width: '100%', textAlign: 'left', margin: 0,
            fontSize: '6em', fontWeight: 650, color: theme ? '#463f3a' : '#F5F5F580'
          }}>{t('Login.Hello')}</p>

          <p style={{
            width: '100%', textAlign: 'left', margin: '-2vh 0 0 0',
            fontSize: '6em', fontWeight: 650, color: theme ? '#463f3a' : '#F5F5F580'
          }}>{t('Login.Alberto')}</p>

          <p style={{
            width: '85%', fontSize: '1.4em', fontWeight: 500, color: theme ? '#463f3a' : '#F5F5F580', margin: '1vh 0 0 0',
            textAlign: 'justify'
          }}>{t('Login.text')}</p>

          <Row style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          flexDirection: 'row', marginTop: '40px',
          // border:'1px solid red'
        }}>

          <Link to={"/portfolio/projects"} style={{
            width: '35%', marginRight: '20px',
          }}>
            <Button style={{
              width: '100%', borderRadius: '3vh',
              backgroundColor: '#7765e399', height: '5vh',
              color: theme ? '#F5F5F5' : '#F5F5F590', fontWeight: 'bolder',
               border: '0px solid #000'
            }}>
              {t('Login.button.projects')}
            </Button>
          </Link>


          <Link to={"/portfolio/resume"} style={{
            width: '35%'
          }}>
            <Button
              type='ghost'
              style={{
                width: '100%', borderRadius: '3vh',
                border: '2px solid #7765e399', height: '5vh',
                color: '#7765e399', fontWeight: 'bolder'
              }}>
              {t('Login.button.about')}
            </Button>
          </Link>


        </Row>
        </Col>



      </Content>

      <Content className='scrollable-div resume-small'
        style={{
          marginTop: '8vh', // Ajusta este valor para que el contenido no quede detrás del header
          marginBottom: '8vh', // Ajusta este valor para que el contenido no quede detrás del footer
          overflowY: 'scroll',
          height: 'auto', // Ajusta estos valores según el header y footer
          alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', padding: '5%'
          // backgroundColor: `${bg}70`
        }}>
        <img
          // className='image-draw'
          src={assets.draw} style={{

            width: '45%',
            // display: theme ? '' : 'none',
            marginRight: '5px'
          }} />
        <Col style={{
          width: '90%',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexDirection: 'column',
          
        }}>
          <p style={{
            width: '75%', textAlign: 'left', margin: 0,
            fontSize: '1.5em', fontWeight: 650, color: theme ? '#463f3a' : '#F5F5F580'
          }}>{t('Login.Hello')}</p>

          <p style={{
            width: '75%', textAlign: 'left', margin: '0vh 0 0 0',
            fontSize: '1.5em', fontWeight: 650, color: theme ? '#463f3a' : '#F5F5F580'
          }}>{t('Login.Alberto')}</p>

          <p style={{
            width: '75%', fontSize: '1.2em', fontWeight: 500, color: theme ? '#463f3a' : '#F5F5F580', margin: '1vh 0 0 0',
            textAlign: 'justify'
          }}>{t('Login.text')}</p>

          {/* <Row style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
          flexDirection: 'row', marginTop: '40px',
          // border:'1px solid red'
        }}>

          <Link to={"/portfolio/projects"} style={{
            width: '35%', marginRight: '20px',
          }}>
            <Button style={{
              width: '100%', borderRadius: '3vh',
              backgroundColor: '#7765e399', height: '5vh',
              color: theme ? '#F5F5F5' : '#F5F5F590', fontWeight: 'bolder',
               border: '0px solid #000'
            }}>
              {t('Login.button.projects')}
            </Button>
          </Link>


          <Link to={"/portfolio/resume"} style={{
            width: '35%'
          }}>
            <Button
              type='ghost'
              style={{
                width: '100%', borderRadius: '3vh',
                border: '2px solid #7765e399', height: '5vh',
                color: '#7765e399', fontWeight: 'bolder'
              }}>
              {t('Login.button.about')}
            </Button>
          </Link>


        </Row> */}
        </Col>



      </Content>
    </>
  )
}
