import React from 'react'
import { gifs } from '../hooks/gifsPaths'
import { Button, Col, FloatButton, Row, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "

export const HomeCards = (props) => {

    const { t } = useTranslation();
    return (

        <>

            <FloatButton.BackTop visibilityHeight={0} style={{ right: '30px', bottom: '100px', opacity: '60%' }} />

            {
                props.data.map((project) => (
                    <>

                        <Row
                            className='home-card-large'
                            style={{
                                width: '70%', alignItems: 'center',
                                justifyContent: 'space-between', flexDirection: 'row',
                                margin: 0, marginTop: '3vh'
                            }}>
                            <p style={{
                                fontSize: '2.2em', width: '100%', textAlign: `left`,
                                fontWeight: 650, color: '#a99fea', margin: '0',
                                width: '25%', fontStyle: 'italic'
                            }}>{project.name}</p>
                            <div style={{
                                width: '75%',
                                border: '3px solid #7765e360', borderRadius: '2vh',
                                margin: 0
                            }} />
                        </Row>

                        <div
                            className='home-card-large'
                            style={{
                                width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                                marginTop: '0vh', padding: '2% 0 2% 0',
                                alignItems: 'center', justifyContent: 'center', flexDirection: `${project.order}`
                                // border:'2px solid #463f3a80',

                            }}>


                            <img src={project.gif} style={{
                                height: '22vw', width: 'auto', borderRadius: '2vh',
                                boxShadow: '0 0 10px #00000020',
                                border: '2px solid #463f3a20',
                                marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                            }} />

                            <Col style={{
                                width: '30vw',
                                marginLeft: '1vw',
                                marginRight: '1vw'

                            }}>


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
                                            <Tag style={{
                                                marginRight: '2vh', color: '#a99fea',
                                                fontStyle: 'italic', fontSize: '1.1em',
                                                marginTop: '2vh'
                                            }}>{tech.name}</Tag>
                                        ))
                                    }

                                </Row>




                                <div style={{
                                    width: '100%', height: '10vh', marginTop: '3vh',
                                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                    flexDirection: 'row'
                                }}>
                                    <Link to={project.link}
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

                                    {
                                        project.mock ?
                                            <>
                                                <Link to={project.web}
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

                                            </>

                                            : <></>
                                    }


                                </div>

                            </Col>
                        </div>

                        <div
                            className='home-card-small'
                            style={{
                                width: '80%', height: 'auto', backgroundColor: '#f4f3ee',
                                margin: '4vh 0 2vh 0',
                                // paddingBottom: '5%',
                                alignItems: 'center', justifyContent: 'center', flexDirection: `column`,
                                border: '2px solid #7765e360',
                                padding: '3% 2% 2% 2%', borderRadius: '2vh',
                                boxShadow: '0px 0px 10px #00000030'

                            }}>


                            <img src={project.gif} style={{
                                height: 'auto', width: '98%', borderRadius: '2vh',
                                boxShadow: '0 0 20px #000000050',
                                border: '2px solid #463f3a20',
                            }} />
                            <p style={{
                                fontSize: '1.8em', width: '95%', textAlign: `left`,
                                fontWeight: 650, color: '#a99fea', margin: '2vh 0 0vh 0'
                            }}>{project.name}</p>




                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'row', width: 'auto', margin: '-2vh 0 0 0',
                                width: '95%'
                            }}>
                                {
                                    project.tech.map((tech) => (
                                        <Tag style={{
                                            marginRight: '2vh', color: '#a99fea',
                                            fontStyle: 'italic', fontSize: '1em', marginTop: '3vh'
                                        }}>{tech.name}</Tag>
                                    ))
                                }

                            </Row>

                            <p style={{
                                fontSize: '1em', width: '94%', textAlign: 'justify',
                                fontWeight: 400, wordWrap: 'break-word', color: '#463f3a80',
                                // fontStyle:'italic'
                            }}>{t(project.text)}</p>



                            <div style={{
                                width: '95%', margin: '2vh 0 1vh 0',
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <Link to={project.link}
                                    target='_blank'>
                                    <Button
                                        className='button'
                                        // onClick={() => props.action(props.gif)}
                                        style={{
                                            width: 'auto', fontWeight: 500, height: 'auto',
                                            color: '#f4f3ee', backgroundColor: '#a99fea',
                                            fontSize: '1.3em'
                                        }}
                                    >{t('HomeCards.button')}</Button>
                                </Link>

                                {
                                    project.mock ?
                                        <>
                                            <Link to={project.web}
                                                target='_blank'>
                                                <Button
                                                    className='button'
                                                    type='secondary'
                                                    // onClick={() => props.action(props.gif)}
                                                    style={{
                                                        width: 'auto', fontWeight: 500, height: 'auto',
                                                        color: '#a99fea', backgroundColor: '#f4f3ee',
                                                         fontSize: '1.3em',
                                                        marginLeft: '2vh', border: '1.5px solid #a99fea'
                                                    }}
                                                >Mock-up</Button>
                                            </Link>

                                        </>

                                        : <></>
                                }



                            </div>

                        </div >



                    </>
                ))
            }




        </>
    )
}
