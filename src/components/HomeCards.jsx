import React, { useContext } from 'react'
import { gifs } from '../helpers/gifsPaths'
import { Button, Col, FloatButton, Row, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../helpers/projects'
import { appContext } from '../context/appContext'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "

export const HomeCards = () => {

    const { t } = useTranslation();
    const { theme } = useContext(appContext)
    return (

        <>

            <FloatButton.BackTop visibilityHeight={0} style={{ right: '30px', bottom: '100px', opacity: '30%' }} />

            {
                projects.map((project) => (
                    <>

                        <div
                            className='home-card-large'
                            style={{
                                width: 'auto', height: 'auto', backgroundColor: 'transparent',
                                marginTop: '0vh',
                                padding: '2% 0 2% 0', width: '85%',
                                alignItems: 'center', justifyContent: 'space-between', flexDirection: `${project.order}`
                                // border:'2px solid #463f3a80',

                            }}>


                            {
                                project.native ?
                                    <Row style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexDirection: 'row', width: '70%'
                                    }}>


                                        <img src={project.nativegif} style={{
                                            // height: '22vw', width: 'auto',
                                            width: '20%', marginRight: '20px',
                                            borderRadius: '2vh',
                                            boxShadow: '0 0 10px #00000020',
                                            border: '1px solid #463f3a20',
                                            // marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                            // marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                                        }} />

                                        <img src={project.gif} style={{
                                            // height: '22vw', width: 'auto', 
                                            width: '77%',
                                            borderRadius: '2vh',
                                            // boxShadow: '0 0 10px #00000020',
                                            border: '1px solid #463f3a20',
                                            // marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                            // marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                                        }} />







                                    </Row>
                                    :
                                    <img src={project.gif} style={{
                                        // height: '22vw', width: 'auto', 
                                        width: '50%',
                                        borderRadius: '2vh',
                                        // boxShadow: '0 0 10px #00000020',
                                        border: '1px solid #463f3a20',
                                        marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                        marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                                    }} />

                            }





                            <Col style={{
                                width: project.native ? '27%' : '45%',
                                // marginLeft: '1vw',
                                marginRight: '1vw',
                                display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                                flexDirection: 'column'

                            }}>

                                <p style={{
                                    fontSize: '1.5em', width: '100%', textAlign: `left`,
                                    fontWeight: 700, color: theme ? '#463f3a99' : '#f5f5f580', margin: '0',
                                    fontStyle: 'italic'
                                }}>{project.name}</p>


                                <p style={{
                                    fontSize: '1.1em', width: '100%', textAlign: `justify`,
                                    fontWeight: 400, wordWrap: 'break-word', color: theme ? '#463f3a80' : '#f5f5f580',
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
                                                marginRight: '2vh', color: theme ? '#463f3a80' : '#f5f5f580',
                                                fontStyle: 'italic', fontSize: '1em',
                                                marginTop: '2vh', backgroundColor: theme ? '' : '#a99fea20',
                                                border: theme ? '' : '0px solid #000'
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
                                                color: theme ? '#f4f3ee' : '#f5f5f580', backgroundColor: theme ? '#a99fea' : '#574C98',
                                                border: theme ? '1.5px solid #a99fea' : '1.5px solid #574C98', fontWeight: 700,
                                                borderRadius: '3vh',
                                                // fontSize: '1.3em'
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
                                                        type='ghost'
                                                        // onClick={() => props.action(props.gif)}
                                                        style={{
                                                            width: 'auto', fontWeight: 500, height: 'auto',
                                                            color: theme ? '#463f3a80' : '#574C98',
                                                            fontWeight: 700,
                                                            // fontSize: '1.3em',
                                                            marginLeft: '15px', border: '0px solid #f5f5f5'
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
                            className='home-card-large'
                            style={{
                                width: '85%',
                                border: theme ? '1px solid #463f3a10' : '1px solid #222', borderRadius: '2vh',
                                margin: '4vh 0 4vh 0'
                            }} />

                        <div
                            className='home-card-small'
                            style={{
                                width: '90%', height: 'auto', backgroundColor: theme ? '#f5f5f5' : '#252525',
                                margin: '4vh 0 2vh 0',
                                // paddingBottom: '5%',
                                alignItems: 'center', justifyContent: 'center', flexDirection: `column`,
                                // border: '2px solid #7765e360',
                                padding: '3% 2% 2% 2%', borderRadius: '2vh',
                                // boxShadow: '0px 0px 10px #00000030'

                            }}>

                            {
                                project.native ?
                                    <Row style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexDirection: 'row', width: '98%'
                                    }}>


                                        <img src={project.nativegif} style={{
                                            // height: '22vw', width: 'auto',
                                            width: '20%',
                                            marginRight: '10px',
                                            borderRadius: '1vh',
                                            boxShadow: '0 0 10px #00000020',
                                            border: '1px solid #463f3a20',
                                            // marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                            // marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                                        }} />

                                        <img src={project.gif} style={{
                                            // height: '22vw', width: 'auto', 
                                            width: '75%',
                                            borderRadius: '1vh',
                                            // boxShadow: '0 0 10px #00000020',
                                            border: '1px solid #463f3a20',
                                            // marginRight: `${project.order === 'row' ? '2vw' : '0vh'}`,
                                            // marginLeft: `${project.order !== 'row' ? '2vw' : '0vh'}`,
                                        }} />







                                    </Row>
                                    :
                                    <img src={project.gif} style={{
                                        height: 'auto', width: '98%', borderRadius: '2vh',
                                        boxShadow: '0 0 20px #000000050',
                                        border: '0px solid #463f3a20',
                                    }} />

                            }

                            {/* <img src={project.gif} style={{
                                height: 'auto', width: '98%', borderRadius: '2vh',
                                boxShadow: '0 0 20px #000000050',
                                border: '2px solid #463f3a20',
                            }} /> */}
                            <p style={{
                                fontSize: '1.3em', width: '95%', textAlign: `left`,
                                fontWeight: 650, color: theme ? '#463f3a99' : '#f5f5f580', margin: '2vh 0 0vh 0'
                            }}>{project.name}</p>




                            <Row style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                flexDirection: 'row', width: 'auto', margin: '-2vh 0 0 0',
                                width: '95%'
                            }}>
                                {
                                    project.tech.map((tech) => (
                                        <Tag style={{
                                            marginRight: '2vh', color: theme ? '#463f3a80' : '#f5f5f580',
                                            fontStyle: 'italic', fontSize: '0.8em',
                                            marginTop: '3vh', backgroundColor: theme ? '' : '#a99fea20',
                                            border: theme ? '' : '0px solid #000'
                                        }}>{tech.name}</Tag>
                                    ))
                                }

                            </Row>

                            <p style={{
                                fontSize: '1em', width: '95%', textAlign: `justify`,
                                fontWeight: 400, wordWrap: 'break-word', color: theme ? '#463f3a80' : '#f5f5f580',
                                fontStyle: 'italic'
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
                                            color: theme ? '#f4f3ee' : '#f5f5f580', backgroundColor: theme ? '#a99fea' : '#574C98',
                                            border: theme ? '1.5px solid #a99fea' : '1.5px solid #574C98', fontWeight: 700,
                                            borderRadius: '3vh',
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
                                                        color: theme ? '#463f3a80' : '#574C98',
                                                        fontWeight: 700,
                                                        // fontSize: '1.3em',
                                                        marginLeft: '15px', border: '0px solid #f5f5f5'
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
