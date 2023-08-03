import { Button, Col, Row, Switch } from 'antd'
import React from 'react'
import { AiFillHome, AiOutlineRollback } from 'react-icons/ai'
import { HiOutlineTranslate } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { textsExperience } from './textsExperience'

export const CurriculumV = () => {
    return (
        <>
            <div className='resume-large'
                style={{
                    height: 'auto', width: 'auto', backgroundColor: '#f4f3ee',
                     alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
                    flexDirection: 'column', padding: '0 5% 5% 5%'
                }}
            >

                <div style={{
                    width: '90%', height: 'auto',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>

                    <Col>
                        <p style={{
                            // marginLeft: '1vw',
                            fontSize: '2.5em', fontWeight: 500, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                            margin: '5vh 0 0 1vw'
                        }}>Luis Alberto Serrano García</p>

                        <p style={{
                            // marginLeft: '1vw',
                            fontSize: '1.5em', fontWeight: 400, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                            margin: '0vh 0 0 1vw'
                        }}>Frontend developer - UI/UX designer</p>
                    </Col>



                    <Row style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                        marginTop: '3vh'
                    }}>

                        <Button
                            className='button'
                            style={{
                                width: 'auto', fontWeight: 500, height: 'auto',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1vh', fontSize: '1.1em'
                            }}>Download resume</Button>
                        <Link to="/portfolio/main-projects" style={{
                            marginRight: '0vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    margin: '0 0vh 0 1vh',
                                    width: 'auto', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1vh', fontSize: '1.1em'
                                }}>Projects</Button>
                        </Link>

                        <Button
                            icon={<HiOutlineTranslate style={{ color: '#f4f3ee' }} />}
                            className='button'
                            style={{
                                margin: '0 1vh 0 1vh',
                                aspectRatio: '1/1', fontWeight: 500, height: 'auto',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1vh', fontSize: '1.1em'
                            }} />

                        <Link to="/portfolio/main" style={{
                            marginRight: '2vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    aspectRatio: '1/1', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1vh', fontSize: '1.1em'
                                }}
                                icon={<AiFillHome size={20} style={{ color: '#f4f3ee' }} />} />
                        </Link>


                    </Row>


                </div>

                <hr style={{
                    width: '90%', marginTop: '4vh',
                    border: '1.3px solid #463f3a'
                }} />
                <Row style={{
                    width: '70%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}><b>Phone: </b>614 539 48 36</p>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}><b>Email: </b>albserrano8@gmail.com</p>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}><b>Linkedin: </b>albserranog</p>
                    {/* <Switch
                    style={{
                        backgroundColor: '#463f3a80',
                    }}
                    checkedChildren={'Español'} unCheckedChildren={'English'} /> */}
                </Row>
                <hr style={{
                    width: '90%',
                    border: '1.3px solid #463f3a'
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

                                fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                            }}>EXPERIENCE</p>

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
                                }}>DEC 2021 - Currently</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>Frontend developer / UI/UX designer / Python developer</p>

                            <ul>

                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic',
                                    fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                                }}>Frontend developer</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic',
                                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                        textAlign: 'justify'
                                    }}>{textsExperience.react}</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic',
                                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                        textAlign: 'justify'
                                    }}>{textsExperience.react_1}</p>

                                </li>

                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic',
                                    fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                                }}>UI/UX designer</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                                    }}>{textsExperience.uiux}</p>


                                </li>


                                <li style={{ marginTop: '3vh' }}><p style={{
                                    margin: '0 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                    fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                                }}>Python developer</p>
                                    <p style={{
                                        margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                                    }}>{textsExperience.python}</p>

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
                                    }}>Professional internships</p>
                                    <p style={{
                                        margin: '0 0 0 0',
                                        fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                                    }}>Graduate Laboratory of Instituto tecnológico de Chihauhua</p>
                                </Col>


                                <p style={{
                                    margin: '0 0 0 0',
                                    fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                                }}>AUG 2021 - JAN 2022</p>

                            </div>



                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}> Internship - Computer Vision and Machine Learning Curriculum Renewal</p>

                            <p style={{
                                margin: '3vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{textsExperience.internship}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{textsExperience.internship_1}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{textsExperience.internship_2}</p>

                        </div>


                    </Col>

                    <Col style={{
                        width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <div className='Summary' style={{
                            width: '80%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                            }}>SUMMARY</p>

                            <p style={{
                                margin: '0 0 0 0', textAlign: 'justify',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>{textsExperience.summary}</p>
                            <p style={{
                                margin: '1vh 0 0 0', textAlign: 'justify',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>{textsExperience.summary_1}</p>


                        </div>
                        <hr style={{
                            width: '80%', margin: '3vh 0 1vh 0',
                            border: '1.5px solid #463f3a'
                        }} />
                        <div className='Education' style={{
                            width: '80%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                            }}>EDUCATION</p>

                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                            }}>Electronic Engineer</p>
                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>Instituto Tecnológico de Chihuahua</p>

                            <p style={{
                                margin: '0 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>Specialization in Embedded Systems</p>

                            <p style={{
                                margin: '1vh 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>DEC 2021</p>
                        </div>

                        <hr style={{
                            width: '80%', margin: '3vh 0 1vh 0',
                            border: '1.5px solid #463f3a'
                        }} />
                        <div className='Education' style={{
                            width: '80%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                            }}>SKILLS</p>


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
                            width: '80%', margin: '3vh 0 1vh 0',
                            border: '1.5px solid #463f3a'
                        }} />
                        <div className='Education' style={{
                            width: '80%'
                        }}>
                            <p style={{

                                fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                            }}>LANGUAGUES</p>

                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>Spanish: <b>Native</b></p>

                            <p style={{
                                margin: '0.5vh 0 0 0',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>English: <b>B1</b></p>


                        </div>
                    </Col>
                </Row>

            </div>

            <div className='resume-small'
                style={{
                    height: 'auto', width: 'auto', backgroundColor: '#f4f3ee',
                     alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
                    flexDirection: 'column', padding: '0 5% 5% 5%'
                }}
            >

                <div style={{
                    width: '90%', height: 'auto',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'column',
                }}>

                    <Row style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                        marginTop: '3vh'
                    }}>

                        <Button
                            className='button'
                            style={{
                                width: 'auto', fontWeight: 500, height: 'auto',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1vh', fontSize: '1.1em'
                            }}>Download</Button>
                        <Link to="/portfolio/main-projects" style={{
                            marginRight: '0vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    margin: '0 0vh 0 1vh',
                                    width: 'auto', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1vh', fontSize: '1.1em'
                                }}>Projects</Button>
                        </Link>

                        <Button
                            icon={<HiOutlineTranslate style={{ color: '#f4f3ee' }} />}
                            className='button'
                            style={{
                                margin: '0 1vh 0 1vh',
                                aspectRatio: '1/1', fontWeight: 500, height: 'auto',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1vh', fontSize: '1.1em'
                            }} />

                        <Link to="/portfolio/main" style={{
                            marginRight: '2vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    aspectRatio: '1/1', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1vh', fontSize: '1.1em'
                                }}
                                icon={<AiFillHome size={20} style={{ color: '#f4f3ee' }} />} />
                        </Link>


                    </Row>

                    <Col>
                        <p style={{
                            // marginLeft: '1vw',
                            fontSize: '2.5em', fontWeight: 500, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                            margin: '5vh 0 0 1vw'
                        }}>L. Alberto Serrano G.</p>

                        <p style={{
                            // marginLeft: '1vw',
                            fontSize: '1.5em', fontWeight: 400, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                            margin: '0vh 0 0 1vw'
                        }}>Frontend developer - UI/UX designer</p>
                    </Col>

                </div>

                <hr style={{
                    width: '90%', marginTop: '4vh',
                    border: '1.3px solid #463f3a'
                }} />
                <Row style={{
                    width: '80%',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        margin: '0 0 0 0'
                    }}><b>Phone: </b>614 539 48 36</p>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        margin: '1vh 0 1vh 0'
                    }}><b>Email: </b>albserrano8@gmail.com</p>
                    <p style={{
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        margin: '0 0 0 0'
                    }}><b>Linkedin: </b>albserranog</p>
                    {/* <Switch
                    style={{
                        backgroundColor: '#463f3a80',
                    }}
                    checkedChildren={'Español'} unCheckedChildren={'English'} /> */}
                </Row>
                <hr style={{
                    width: '90%',
                    border: '1.3px solid #463f3a'
                }} />

                <div className='Summary' style={{
                    width: '80%'
                }}>
                    <p style={{

                        fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                    }}>SUMMARY</p>

                    <p style={{
                        margin: '0 0 0 0', textAlign: 'justify',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>{textsExperience.summary}</p>
                    <p style={{
                        margin: '1vh 0 0 0', textAlign: 'justify',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>{textsExperience.summary_1}</p>


                </div>
                <hr style={{
                    width: '80%', margin: '3vh 0 1vh 0',
                    border: '1.5px solid #463f3a'
                }} />
                <div className='Education' style={{
                    width: '80%'
                }}>
                    <p style={{

                        fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                    }}>EDUCATION</p>

                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                    }}>Electronic Engineer</p>
                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>Instituto Tecnológico de Chihuahua</p>

                    <p style={{
                        margin: '0 0 0 0', fontStyle: 'italic',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>Specialization in Embedded Systems</p>

                    <p style={{
                        margin: '1vh 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>DEC 2021</p>
                </div>

                <hr style={{
                    width: '80%', margin: '3vh 0 1vh 0',
                    border: '1.5px solid #463f3a'
                }} />
                <div style={{
                    width:'80%'
                }} className='Experience'>
                    <p style={{

                        fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                    }}>EXPERIENCE</p>

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
                        }}>DEC 2021 - Currently</p>

                    </div>



                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>Frontend developer / UI/UX designer / Python developer</p>

                    <ul>

                        <li style={{ marginTop: '3vh' }}><p style={{
                            margin: '0 0 0 0', fontStyle: 'italic',
                            fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                        }}>Frontend developer</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{textsExperience.react}</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                                textAlign: 'justify'
                            }}>{textsExperience.react_1}</p>

                        </li>

                        <li style={{ marginTop: '3vh' }}><p style={{
                            margin: '0 0 0 0', fontStyle: 'italic',
                            fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                        }}>UI/UX designer</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>{textsExperience.uiux}</p>


                        </li>


                        <li style={{ marginTop: '3vh' }}><p style={{
                            margin: '0 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                            fontWeight: 500, color: '#463f3a80', fontSize: '1.2em'
                        }}>Python developer</p>
                            <p style={{
                                margin: '1vh 0 0 0', fontStyle: 'italic', textAlign: 'justify',
                                fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                            }}>{textsExperience.python}</p>

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
                            }}>Professional internships</p>
                            <p style={{
                                margin: '0 0 0 0',
                                fontWeight: 550, color: '#463f3a', fontSize: '1.3em'
                            }}>Graduate Laboratory of Instituto tecnológico de Chihauhua</p>
                        </Col>


                        <p style={{
                            margin: '0 0 0 0',
                            fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                        }}>AUG 2021 - JAN 2022</p>

                    </div>



                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}> Internship - Computer Vision and Machine Learning Curriculum Renewal</p>

                    <p style={{
                        margin: '3vh 0 0 0', fontStyle: 'italic',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        textAlign: 'justify'
                    }}>{textsExperience.internship}</p>
                    <p style={{
                        margin: '1vh 0 0 0', fontStyle: 'italic',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        textAlign: 'justify'
                    }}>{textsExperience.internship_1}</p>
                    <p style={{
                        margin: '1vh 0 0 0', fontStyle: 'italic',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em',
                        textAlign: 'justify'
                    }}>{textsExperience.internship_2}</p>

                </div>
                <hr style={{
                    width: '80%', margin: '3vh 0 1vh 0',
                    border: '1.5px solid #463f3a'
                }} />
                <div className='skills' style={{
                    width: '80%'
                }}>
                    <p style={{

                        fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                    }}>SKILLS</p>


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
                    width: '80%', margin: '3vh 0 1vh 0',
                    border: '1.5px solid #463f3a'
                }} />
                <div className='languages' style={{
                    width: '80%'
                }}>
                    <p style={{

                        fontWeight: 500, color: '#463f3a', fontSize: '1.4em'
                    }}>LANGUAGUES</p>

                    <p style={{
                        margin: '0 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>Spanish: <b>Native</b></p>

                    <p style={{
                        margin: '0.5vh 0 0 0',
                        fontWeight: 400, color: '#463f3a80', fontSize: '1.2em'
                    }}>English: <b>B1</b></p>


                </div>












            </div>
        </>

    )
}
