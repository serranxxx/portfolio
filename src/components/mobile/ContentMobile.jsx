import React, { useEffect } from 'react'
import { Col, FloatButton, Layout, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const { Content } = Layout;

export const ContentMobile = (props) => {
    const { } = props
    const { t } = useTranslation();

    return (
        <Content className='scrollable-div'
            style={{
                marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
                marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                overflowY: 'scroll',
                height: 'auto', // Ajusta estos valores según el header y footer
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column',
                // backgroundColor: `${bg}70`
            }}
        >
            <FloatButton.BackTop visibilityHeight={0} style={{right:'30px', bottom:'100px', opacity:'60%'}} />
            <div className='Summary' style={{
                width: '80%'
            }}>
                <p style={{

                    fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                }}>{t('Resume.Summary')}</p>

                <p style={{
                    margin: '0 0 0 0', textAlign: 'justify',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.summary.text')}</p>
                <p style={{
                    margin: '1vh 0 0 0', textAlign: 'justify',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.summary.text1')}</p>


            </div>
            <hr style={{
                margin: '4vh 0 1vh 0',
                width: '65%',
                border: '2px solid #7765e360', borderRadius: '2vh'
            }} />

            <div style={{
                width: '80%'
            }} className='Experience'>
                <p style={{

                    fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                }}>{t('Resume.experience')}</p>

                <div style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                    }}>MAS <b>Meta</b>Map</p>

                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>{t('Resume.metamapDate')}</p>

                </div>



                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.Meta.description')}</p>

                <ul>

                    <li style={{ marginTop: '4vh' }}><p style={{
                        margin: '0 0 0 0', fontStyle: 'italic',
                        fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                    }}>{t('Resume.frontendDev')}</p>
                        <p style={{
                            margin: '1vh 0 0 0', fontStyle: 'italic',
                            fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                            textAlign: 'justify'
                        }}>{t('Resume.React1')}</p>
                        <p style={{
                            margin: '1vh 0 0 0', fontStyle: 'italic',
                            fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                            textAlign: 'justify'
                        }}>{t('Resume.React2')}</p>

                    </li>

                    <li style={{ marginTop: '4vh' }}><p style={{
                        margin: '0 0 0 0', fontStyle: 'italic',
                        fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                    }}>{t('Resume.uiux')}</p>
                        <p style={{
                            margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                            fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                        }}>{t('Resume.uiux.text')}</p>


                    </li>


                    <li style={{ marginTop: '4vh' }}><p style={{
                        margin: '0 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                        fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                    }}>{t('Resume.PythonDev')}</p>
                        <p style={{
                            margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                            fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                        }}>{t('Resume.python.text')}</p>

                    </li>

                </ul>

                <div style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Col>
                        <p style={{
                            margin: '5vh 0 0 0',
                            fontWeight: 650, color: '#463f3a', fontSize: '1.3em'
                        }}>{t('Resume.internship')}</p>
                        <p style={{
                            margin: '0 0 0 0',
                            fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                        }}>{t('Resume.internship_')}</p>
                    </Col>


                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>{t('Resume.internshipDate')}</p>

                </div>



                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.internshipSubtitle')}</p>

                <p style={{
                    margin: '4vh 0 0 0', fontStyle: 'italic',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                    textAlign: 'justify'
                }}>{t('Resume.intern.text')}</p>
                <p style={{
                    margin: '1vh 0 0 0', fontStyle: 'italic',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                    textAlign: 'justify'
                }}>{t('Resume.intern.text2')}</p>
                <p style={{
                    margin: '1vh 0 0 0', fontStyle: 'italic',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                    textAlign: 'justify'
                }}>{t('Resume.intern.text3')}</p>

            </div>

            <hr style={{
                margin: '3vh 0 1vh 0',
                width: '65%',
                border: '2px solid #7765e360', borderRadius: '2vh'
            }} />
            <div className='Education' style={{
                width: '80%'
            }}>
                <p style={{

                    fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                }}>{t('Resume.education')}</p>

                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                }}>{t('Resume.education.text')}</p>
                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>Instituto Tecnológico de Chihuahua</p>

                <p style={{
                    margin: '0 0 0 0', fontStyle: 'italic',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.education.speacilization')}</p>

                <p style={{
                    margin: '1vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.education.date')}</p>
            </div>

            <hr style={{
                margin: '4vh 0 1vh 0',
                width: '65%',
                border: '2px solid #7765e360', borderRadius: '2vh'
            }} />

            <div className='Education' style={{
                width: '80%'
            }}>
                <p style={{

                    fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                }}>{t('Resume.skills')}</p>


                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>React JS</p>
                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>MongoDB</p>
                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>GitHub / GitLab</p>
                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>Adobe Illustrator</p>
                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>Adobe XD</p>
                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>QT Creator</p>

            </div>
            <hr style={{
                margin: '4vh 0 1vh 0',
                width: '65%',
                border: '2px solid #7765e360', borderRadius: '2vh'
            }} />
            <div className='Education' style={{
                width: '80%'
            }}>
                <p style={{

                    fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                }}>{t('Resume.languages')}</p>

                <p style={{
                    margin: '0 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.lan.spanish')}<b>{t('Resume.spanish')}</b></p>

                <p style={{
                    margin: '0.5vh 0 0 0',
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                }}>{t('Resume.lan.english')}<b>B1</b></p>


            </div>

            <hr style={{
                width: '65%', marginTop: '4vh',
                border: '2px solid #7765e360', borderRadius: '2vh'
            }} />
            <Row style={{
                width: '80%',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexDirection: 'column'
            }}>
                <p style={{
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em', margin: '1vh'
                }}><b>{t('Resume.phone')}</b>614 539 48 36</p>
                <p style={{
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em', margin: '1vh'
                }}><b>{t('Resume.email')}</b>albserrano8@gmail.com</p>
                <p style={{
                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em', margin: '1vh'
                }}><b>{t('Resume.linkedin')}</b>albserranog</p>

            </Row>


        </Content>
    )
}
