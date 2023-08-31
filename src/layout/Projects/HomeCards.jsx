import React from 'react'
import { gifs } from '../hooks/gifsPaths'
import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "

export const HomeCards = (props) => {

    const { t } = useTranslation();
    return (

        <>

            {
                props.data.map((project) => (
                    <>
                        <div
                            className='home-card-large'
                            style={{
                                width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                                marginTop: '2vh', paddingTop: '5%', paddingBottom: '5%',
                                alignItems: 'center', justifyContent: 'center', flexDirection: `${project.order}`
                                // border:'2px solid #463f3a80',

                            }}>
                            <img src={project.gif} style={{
                                height: '20vw', width: 'auto', borderRadius: '2vh',
                                boxShadow: '0 0 20px #000000080',
                                border: '2px solid #463f3a20',
                                marginRight: `${project.order === 'row' ? '5vw' : '0vh'}`,
                                marginLeft: `${project.order !== 'row' ? '5vw' : '0vh'}`,
                            }} />

                            <Col style={{
                                width: '30vw',
                                marginLeft: '1vw',
                                marginRight: '1vw'

                            }}>
                                <p style={{
                                    fontSize: '2.2em', width: '100%', textAlign: `left`,
                                    fontWeight: 650, color: '#a99fea', margin: '0'
                                }}>{project.name}</p>

                                <p style={{
                                    fontSize: '1.2em', width: '100%', textAlign: `justify`,
                                    fontWeight: 400, wordWrap: 'break-word', color: '#463f3a80',
                                    fontStyle: 'italic'

                                    // fontStyle:'italic'
                                }}>{t(project.text)}</p>

                                <Row style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                    flexDirection: 'row', width: 'auto', margin: '-2vh 0 0 0'
                                }}>
                                    {
                                        project.tech.map((tech) => (
                                            <p style={{
                                                marginRight: '2vh', color: '#a99fea',
                                                fontStyle: 'italic', fontSize: '1.1em'
                                            }}>{tech.name}</p>
                                        ))
                                    }

                                </Row>




                                <div style={{
                                    width: '100%', height: '10vh',
                                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                    flexDirection: 'row'
                                }}>
                                    <Link to={props.action(project.gif)}
                                        target='_blank'>
                                        <Button
                                            className='button'
                                            // onClick={() => props.action(props.gif)}
                                            style={{
                                                width: '10vw', fontWeight: 500, height: 'auto',
                                                color: '#f4f3ee', backgroundColor: '#a99fea',
                                                borderRadius: '3vh', fontSize: '1.3em'
                                            }}
                                        >{t('HomeCards.button')}</Button>
                                    </Link>

                                    <Link to={props.action(project.gif)}
                                        target='_blank'>
                                        <Button
                                            className='button'
                                            type='secondary'
                                            // onClick={() => props.action(props.gif)}
                                            style={{
                                                width: '10vw', fontWeight: 500, height: 'auto',
                                                color: '#a99fea', backgroundColor: '#f4f3ee',
                                                borderRadius: '3vh', fontSize: '1.3em',
                                                marginLeft: '2vh', border: '1.5px solid #a99fea'
                                            }}
                                        >Mock-up</Button>
                                    </Link>

                                </div>

                            </Col>
                        </div>

                        <div
                            className='home-card-small'
                            style={{
                                width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                                marginTop: '2vh', paddingBottom: '5%',
                                alignItems: 'center', justifyContent: 'center', flexDirection: `column`
                                // border:'2px solid #463f3a80',

                            }}>
                            <p style={{
                                fontSize: '2.2em', width: '100%', textAlign: `center`,
                                fontWeight: 650, color: '#a99fea', margin: '0 0 3vh 0'
                            }}>{project.name}</p>

                            <img src={project.gif} style={{
                                height: 'auto', width: '80%', borderRadius: '2vh',
                                boxShadow: '0 0 20px #000000050',
                                border: '0px solid #463f3a', marginBottom: '2vh',
                                border: '2px solid #463f3a20',
                            }} />

                            {/* <p style={{
                                fontSize: '0.9em', width: '75%', textAlign: 'center',
                                fontWeight: 400, wordWrap: 'break-word', color: '#463f3a',
                                // fontStyle:'italic'
                            }}>{t(project.text)}</p> */}



                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'row', width: 'auto', margin: '-2vh 0 0 0',
                                width:'75%'
                            }}>
                                {
                                    project.tech.map((tech) => (
                                        <p style={{
                                            marginRight: '2vh', color: '#a99fea',
                                            fontStyle: 'italic', fontSize: '1.1em'
                                        }}>{tech.name}</p>
                                    ))
                                }

                            </Row>


                            <div style={{
                                width: '100%', height: '10vh',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row'
                            }}>
                                <Link to={props.action(project.gif)}
                                    target='_blank'>
                                    <Button
                                        className='button'
                                        // onClick={() => props.action(props.gif)}
                                        style={{
                                            width: 'auto', fontWeight: 500, height: 'auto',
                                            color: '#f4f3ee', backgroundColor: '#a99fea',
                                            borderRadius: '3vh', fontSize: '1.3em'
                                        }}
                                    >{t('HomeCards.button')}</Button>
                                </Link>

                                <Link to={props.action(project.gif)}
                                    target='_blank'>
                                    <Button
                                        className='button'
                                        type='secondary'
                                        // onClick={() => props.action(props.gif)}
                                        style={{
                                            width: 'auto', fontWeight: 500, height: 'auto',
                                            color: '#a99fea', backgroundColor: '#f4f3ee',
                                            borderRadius: '3vh', fontSize: '1.3em',
                                            marginLeft: '2vh', border: '1.5px solid #a99fea'
                                        }}
                                    >Mock-up</Button>
                                </Link>

                            </div>

                        </div>

                        <hr style={{
                            width: '65%',
                            border: '4px solid #7765e360', borderRadius: '2vh'
                        }} />
                    </>
                ))
            }

            {/* <div
                className='home-card-large'
                style={{
                    width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                    marginTop: '2vh', paddingTop: '5%', paddingBottom: '5%',
                    alignItems: 'center', justifyContent: 'center', flexDirection: `${props.order}`
                    // border:'2px solid #463f3a80',

                }}>
                <img src={props.gif} style={{
                    height: '20vw', width: 'auto', borderRadius: '0.5vh',
                    boxShadow: '0 0 20px #000000050',
                    border: '0px solid #463f3a',
                    marginRight: `${props.order === 'row' ? '10vw' : '0vh'}`,
                    marginLeft: `${props.order !== 'row' ? '10vw' : '0vh'}`,
                }} />

                <Col style={{
                    width: '35vw',
                    marginLeft: '1vw',
                    marginRight: '1vw'

                }}>
                    <p style={{
                        fontSize: '2.2em', width: '100%', textAlign: 'center',
                        fontWeight: 650, color: '#463f3a'
                    }}>{props.name}</p>

                    <p style={{
                        fontSize: '1.2em', width: '100%', textAlign: 'left',
                        fontWeight: 400, wordWrap: 'break-word', color: '#463f3a80',
                        fontStyle: 'italic'

                        // fontStyle:'italic'
                    }}>{props.text}</p>

                    <div style={{
                        width: '100%', height: '10vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Link to={props.action(props.gif)}
                            target='_blank'>
                            <Button
                                className='button'
                                // onClick={() => props.action(props.gif)}
                                style={{
                                    width: '10vw', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1.5vh', fontSize: '1.3em'
                                }}
                            >{t('HomeCards.button')}</Button>
                        </Link>

                    </div>

                </Col>


            </div>

            <div
                className='home-card-small'
                style={{
                    width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                    marginTop: '2vh', paddingBottom: '5%',
                    alignItems: 'center', justifyContent: 'center', flexDirection: `column`
                    // border:'2px solid #463f3a80',

                }}>
                <p style={{
                    fontSize: '2.2em', width: '100%', textAlign: 'center',
                    fontWeight: 650, color: '#463f3a'
                }}>{props.name}</p>

                <img src={props.gif} style={{
                    height: 'auto', width: '80%', borderRadius: '0.5vh',
                    boxShadow: '0 0 20px #000000050',
                    border: '0px solid #463f3a', marginBottom: '2vh'
                }} />

                <p style={{
                    fontSize: '0.9em', width: '80%', textAlign: 'justify',
                    fontWeight: 400, wordWrap: 'break-word', color: '#463f3a',
                    // fontStyle:'italic'
                }}>{props.text}</p>

                <div style={{
                    width: '100%', height: '10vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Link to={props.action(props.gif)}
                        target='_blank'>
                        <Button
                            className='button'
                            // onClick={() => props.action(props.gif)}
                            style={{
                                width: 'auto', fontWeight: 500, height: 'auto',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1.5vh', fontSize: '1.3em'
                            }}
                        >Full project</Button>
                    </Link>

                </div>

            </div> */}


        </>
    )
}
