import React, { useEffect } from 'react'
import { Col, FloatButton, Layout, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { assets } from '../../layout/hooks/gifsPaths';

const { Content } = Layout;

export const ContentLogin = (props) => {
    const { } = props
    const { t } = useTranslation();

    return (
        <Content className='scrollable-div'
            style={{
                marginTop: '5vh', // Ajusta este valor para que el contenido no quede detrás del header
                marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                overflowY: 'scroll',
                height: 'auto', // Ajusta estos valores según el header y footer
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column',
                // backgroundColor: `${bg}70`
            }}
        >
            <Col style={{
                height: '70%', width: '80%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', 
            }}>

                <img
                    className=''
                    src={assets.draw} style={{

                        width: '70%', 
                        // marginLeft: '5%'
                    }} />

                <p style={{
                    width: '80%', textAlign: 'left', margin: 0,
                    fontSize: '6em', fontWeight: 650, color: '#463f3a'
                }}>{t('Login.Hello')}</p>

                <p style={{
                    width: '80%', textAlign: 'left', margin: '-3vh 0 1vh 0',
                    fontSize: '2.5em', fontWeight: 650, color: '#463f3a'
                }}>{t('Login.Alberto')}</p>

                <p style={{
                    width: '80%', fontSize: '1.5em', fontWeight: 600, color: '#463f3a', margin: 0,
                    textAlign: 'justify'
                }}>{t('Login.text')}</p>

            </Col>




        </Content>
    )
}
