import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, FloatButton, Layout, Row, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { appContext } from '../../context/appContext';
import { stringsCorrection } from '../../helpers/functions';

const { Content } = Layout;

export const ContentResume = ({ handleDownload }) => {
    const { t } = useTranslation();
    const { theme, language } = useContext(appContext)

    const [onDownload, setOnDownload] = useState(true)

    return (
        <>
            <Content className='scrollable-div resume-large'
                style={{
                    marginTop: '15vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column',
                    // backgroundColor: `${bg}70`
                }}
            >
                <Row style={{
                    width: '93%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row', margin: '3vh 0 2vh 0', position: 'relative',
                    // borderBottom:'1px solid #000'
                }}>
                    <Row style={{
                        width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',

                    }}>

                        <Row style={{
                            position: 'absolute', right: '20px', display: 'flex', alignItems: 'center',
                            justifyContent: 'flex-end', width: '25%',

                        }}>

                            {/* <div
                                onClick={handleDownload}
                                // onMouseEnter={() => setOnDownload(!onDownload)}
                                style={{
                                    padding: onDownload ? '3% 5% 3% 12%' : '5%',
                                    borderRadius: '3vh', position: 'relative',
                                    display: 'flex', alignItems: 'center',
                                    justifyContent: 'flex-end', cursor: 'pointer',
                                    transition: 'transform 0.25s ease-out',
                                    backgroundColor: theme ? '#463f3a20' : '#f5f5f520'
                                }}>
                                <Button

                                    // onClick={handleDownload}
                                    icon={<MdDownload size={18} style={{ color: theme ? '#F5F5F5' : '#252525' }} />}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: theme ? '#463f3a' : '#f5f5f580', borderRadius: '50%',
                                        color: '#F5F5F5', fontWeight: '600', position: 'absolute',
                                        left: onDownload ? '3px' : '1px', transition: 'transform 0.25s ease-out',
                                        border: '0px solid #463f3a'
                                    }} />
                                {
                                    onDownload ?
                                        <p style={{
                                            fontWeight: 600, margin: 0, transition: 'transform 0.25s ease-out',
                                            marginLeft: '5px', color: theme ? '#463f3a' : '#f5f5f580'
                                        }}>Download</p>
                                        : <></>
                                }

                            </div> */}
                        </Row>



                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'transparent', padding: '0 2% 0 2%',
                            // borderRadius: '3vh'
                        }}>
                            <MdEmail size={20} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                            <p style={{
                                fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                marginLeft: '10px', margin: '8px'
                            }}>albserrano8@gmail.com</p>
                        </Row>
                        <div style={{
                            width: '1.5px', height: '20px', backgroundColor: theme ? '#463f3a' : '#f5f5f580',
                            borderRadius: '3vh'
                        }} />

                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'transparent', padding: '0 2% 0 2%', borderRadius: '3vh'
                        }}>
                            <FaLinkedin size={20} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                            <p style={{
                                fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                marginLeft: '10px', margin: '8px'
                            }}>albserranog</p>
                        </Row>
                        <div style={{
                            width: '1.5px', height: '20px', backgroundColor: theme ? '#463f3a' : '#f5f5f580',
                            borderRadius: '3vh'
                        }} />
                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'transparent', padding: '0 2% 0 2%',

                            // borderRight:'1px solid #000'
                            // borderRadius: '3vh',

                        }}>
                            <FaPhoneAlt size={16} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                            <p style={{
                                fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                marginLeft: '10px', margin: '8px'
                            }}>614 539 48 36</p>
                        </Row>

                    </Row>

                </Row>

                <hr style={{
                    width: '90%', border: theme ? '1px solid #463f3a30' : '1px solid #F5F5F520',
                    borderRadius: '2vh'
                }} />

                <Row style={{
                    width: '90%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Col style={{
                        width: '65%',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                        flexDirection: 'column'
                    }}>

                        <div style={{

                        }} className='Experience'>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.4em'
                            }}>{t('Resume.experience')}</p>

                            <div style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 550, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.3em'
                                }}>MAS <b>Meta</b>Map</p>

                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                }}>{t('Resume.metamapDate')}</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.Meta.description')}</p>

                            <ul>

                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic',
                                    fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                }}>{t('Resume.frontendDev')}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                        textAlign: 'justify'
                                    }}>{t('Resume.full1')}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                        textAlign: 'justify'
                                    }}>{t('Resume.full2')}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                        textAlign: 'justify'
                                    }}>{t('Resume.full3')}</p>

                                </li>

                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic',
                                    fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                }}>{t('Resume.uiux')}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>{t('Resume.uiux.text')}</p>


                                </li>


                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                    fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                }}>{t('Resume.PythonDev')}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
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
                                        fontWeight: 650, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.3em'
                                    }}>{t('Resume.internship')}</p>
                                    <p style={{
                                        margin: '0 0 0 0',
                                        fontWeight: 550, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.3em'
                                    }}>{t('Resume.internship_')}</p>
                                </Col>


                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                }}>{t('Resume.internshipDate')}</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.internshipSubtitle')}</p>

                            <p style={{
                                margin: '3vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text2')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text3')}</p>

                        </div>


                    </Col>

                    <Col style={{
                        width: '35%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                        flexDirection: 'column',
                        // border:'1px solid red'
                    }}>
                        <div className='Summary' style={{
                            width: '90%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.4em'
                            }}>{t('Resume.Summary')}</p>

                            <p style={{
                                margin: '0 0 0 0', textAlign: 'justify',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.summary.text')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', textAlign: 'justify',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.summary.text1')}</p>


                        </div>
                        <hr style={{
                            margin: '3vh 0 1vh 0',
                            width: '90%',
                            border: theme ? '1px solid #463f3a30' : '1px solid #F5F5F520', borderRadius: '3vh'
                        }} />
                        <div className='Education' style={{
                            width: '90%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.4em'
                            }}>{t('Resume.education')}</p>

                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 550, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.3em'
                            }}>{t('Resume.education.text')}</p>
                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>Instituto Tecnológico de Chihuahua</p>

                            <p style={{
                                margin: '0 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.education.speacilization')}</p>

                            <p style={{
                                margin: '1vh 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.education.date')}</p>
                        </div>

                        <hr style={{
                            margin: '3vh 0 1vh 0',
                            width: '90%',
                            border: theme ? '1px solid #463f3a30' : '1px solid #F5F5F520', borderRadius: '2vh'
                        }} />
                        <div className='Education' style={{
                            width: '90%',
                        }}>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.4em'
                            }}>{t('Resume.skills')}</p>


                            <Row style={{
                                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                                flexDirection: 'row', width: '70%',
                            }}>
                                <Col>
                                    <p style={{
                                        margin: '0 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>React JS</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>MongoDB</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>GitHub / GitLab</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>Postman</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>Node JS</p>
                                </Col>
                                <Col style={{
                                    display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                                    flexDirection: 'column',
                                }}>
                                    <p style={{
                                        margin: '0 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>Figma</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>Adobe Illustrator</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>Adobe XD</p>
                                    <p style={{
                                        margin: '0.5vh 0 0 0',
                                        fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                                    }}>QT Creator</p>


                                </Col>
                            </Row>

                        </div>
                        <hr style={{
                            margin: '3vh 0 1vh 0',
                            width: '90%',
                            border: theme ? '1px solid #463f3a30' : '1px solid #F5F5F520', borderRadius: '3vh'
                        }} />
                        <div className='Education' style={{
                            width: '90%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.4em'
                            }}>{t('Resume.languages')}</p>

                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.lan.spanish')}<b>{t('Resume.spanish')}</b></p>

                            <p style={{
                                margin: '0.5vh 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1.2em'
                            }}>{t('Resume.lan.english')}<b>B1</b></p>


                        </div>
                    </Col>
                </Row>


            </Content>

            <Content className='scrollable-div resume-small'

                style={{
                    marginTop: '10vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column',
                    // backgroundColor: `${bg}70`
                }}
            >
                <FloatButton.BackTop visibilityHeight={0} style={{ right: '30px', bottom: '100px', opacity: '30%' }} />


                <Row style={{
                    width: '85%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    flexDirection: 'column'
                }}>

                    <Col style={{
                        width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                        flexDirection: 'column',
                        // border:'1px solid red'
                    }}>

                        <Row style={{
                            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                            flexDirection: 'row', width: '100%',
                            marginBottom: '1vh'
                        }}>

                            <div className='Education' style={{
                                width: '28%', display: 'flex', alignItems: 'flex-end',
                                justifyContent: 'flexx-start', flexDirection: 'column',
                                // borderLeft:'1px solid red'
                            }}>
                                <p style={{

                                    fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.2em',
                                    fontWeight: 600
                                }}>{stringsCorrection(t('Resume.education'))}</p>

                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 550, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                    textAlign: 'right'
                                }}>{t('Resume.education.text')}</p>
                                <p style={{
                                    margin: '0 0 0 0', textAlign: 'right', width: '100%',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>Instituto Tecnológico de Chihuahua</p>

                                <p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic', textAlign: 'right',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.education.speacilization')}</p>

                                <p style={{
                                    margin: '1vh 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.education.date')}</p>
                            </div>



                            <div style={{
                                width: '2px', height: '100px',
                                backgroundColor: '#463f3a30', margin: '20% 5% 0 5%',
                                borderRadius: '3vh'
                            }} />

                            <div className='Summary' style={{
                                width: '60%'
                            }}>
                                <p style={{

                                    fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.2em',
                                    fontWeight: 600
                                }}>{stringsCorrection(t('Resume.Summary'))}</p>

                                <p style={{
                                    margin: '0 0 0 0', textAlign: 'justify',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.summary.text')}</p>
                                <p style={{
                                    margin: '1vh 0 0 0', textAlign: 'justify',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.summary.text1')}</p>


                            </div>



                        </Row>


                        <Row style={{
                            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                            flexDirection: 'row', width: '100%',
                            marginBottom: '1vh'
                        }}>
                            <div className='languages' style={{
                                width: '28%', display: 'flex', alignItems: 'flex-end',
                                justifyContent: 'flexx-start', flexDirection: 'column',
                            }}>
                                <p style={{

                                    fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.2em',
                                    fontWeight: 600
                                }}>{stringsCorrection(t('Resume.languages'))}</p>

                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.lan.spanish')}<b>{t('Resume.spanish')}</b></p>

                                <p style={{
                                    margin: '0.5vh 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.lan.english')}<b>B1</b></p>


                            </div>

                            <div style={{
                                width: '2px', height: '100px',
                                backgroundColor: '#463f3a30', margin: '10% 5% 0 5%',
                                borderRadius: '3vh'
                            }} />

                            <div className='skills' style={{
                                width: '60%',
                            }}>
                                <p style={{

                                    fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.2em',
                                    fontWeight: 600,
                                }}>{stringsCorrection(t('Resume.skills'))}</p>


                                <Row style={{
                                    display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                                    flexDirection: 'row', width: '100%',
                                }}>
                                    <Col>
                                        <p style={{
                                            margin: '0 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>React JS</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>MongoDB</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>GitHub</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>Postman</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>Node JS</p>
                                    </Col>
                                    <Col style={{
                                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                                        flexDirection: 'column', marginLeft: '15px'
                                    }}>
                                        <p style={{
                                            margin: '0 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>Figma</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>Adobe Illustrator</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>Adobe XD</p>
                                        <p style={{
                                            margin: '0.5vh 0 0 0',
                                            fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                        }}>QT Creator</p>


                                    </Col>
                                </Row>

                            </div>

                        </Row>

                    </Col>

                    <Col style={{
                        width: '100%',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                        flexDirection: 'column'
                    }}>

                        <div style={{

                        }} className='Experience'>
                            <p style={{

                                fontWeight: 500, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1.2em',
                                fontWeight: 600
                            }}>{stringsCorrection(t('Resume.experience'))}</p>

                            <div style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 550, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1em'
                                }}>MAS <b>Meta</b>Map</p>

                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.metamapDate')}</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.Meta.description')}</p>

                            <p style={{
                                margin: '2vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.frontendDev')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.full1')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.full2')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.full3')}</p>

                            <p style={{
                                margin: '2vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.uiux')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.uiux.text')}</p>


                            <p style={{
                                margin: '2vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                fontWeight: 500, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.PythonDev')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.python.text')}</p>



                            <div style={{
                                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <Col>
                                    <p style={{
                                        margin: '5vh 0 0 0',
                                        fontWeight: 650, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1em'
                                    }}>{t('Resume.internship')}</p>
                                    <p style={{
                                        margin: '0 0 0 0',
                                        fontWeight: 550, color: theme ? '#463f3a' : '#f5f5f580', fontSize: '1em'
                                    }}>{t('Resume.internship_')}</p>
                                </Col>


                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                                }}>{t('Resume.internshipDate')}</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em'
                            }}>{t('Resume.internshipSubtitle')}</p>

                            <p style={{
                                margin: '3vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text2')}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: theme ? '#463f3a80' : '#f5f5f580', fontSize: '1em',
                                textAlign: 'justify'
                            }}>{t('Resume.intern.text3')}</p>

                        </div>


                    </Col>

                    <hr style={{
                        width: '70%', border: theme ? '1px solid #463f3a30' : '1px solid #F5F5F520',
                        borderRadius: '2vh', marginTop:'4vh', marginBottom:'3vh'
                    }} />

                    <Row style={{
                        width: '93%',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexDirection: 'row', margin: '0 0 1vh 0', position: 'relative',
                        // borderBottom:'1px solid #000'
                    }}>
                        <Row style={{
                            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',

                        }}>
                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'transparent', padding: '0 2% 0 2%',

                                // borderRight:'1px solid #000'
                                // borderRadius: '3vh',

                            }}>
                                <FaPhoneAlt size={16} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                                <p style={{
                                    fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                    marginLeft: '10px', margin: '8px'
                                }}>614 539 48 36</p>
                            </Row>

                            <div style={{
                                width: '1.5px', height: '20px', backgroundColor: theme ? '#463f3a' : '#f5f5f580',
                                borderRadius: '3vh'
                            }} />

                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'transparent', padding: '0 2% 0 2%', borderRadius: '3vh'
                            }}>
                                <FaLinkedin size={20} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                                <p style={{
                                    fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                    marginLeft: '10px', margin: '8px'
                                }}>albserranog</p>
                            </Row>

                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'transparent', padding: '0 2% 0 2%',
                                // borderRadius: '3vh'
                            }}>
                                <MdEmail size={20} style={{ color: theme ? '#463f3a' : '#f5f5f580' }} />
                                <p style={{
                                    fontWeight: 600, color: theme ? '#463f3a' : '#f5f5f580',
                                    marginLeft: '10px', margin: '8px'
                                }}>albserrano8@gmail.com</p>
                            </Row>

                        </Row>

                    </Row>

                    


                </Row>


            </Content>
        </>
    )
}
