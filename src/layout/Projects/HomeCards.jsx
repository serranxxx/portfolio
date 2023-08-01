import React from 'react'
import { gifs } from '../hooks/gifsPaths'
import { Button, Col } from 'antd'
import { Link } from 'react-router-dom'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "

export const HomeCards = (props) => {
    return (

        <>

            
            <div style={{
                width: 'auto', height: 'auto', backgroundColor: '#f4f3ee',
                marginTop: '2vh', display: 'flex', paddingTop: '5%', paddingBottom: '5%',
                alignItems: 'center', justifyContent: 'center', flexDirection: `${props.order}`
                // border:'2px solid #463f3a80',

            }}>
                <img src={props.gif} style={{
                    height: '40vh', width: 'auto', borderRadius: '0.5vh',
                    boxShadow: '0 0 20px #000000050',
                    border: '0px solid #463f3a',
                    marginRight: `${props.order === 'row' ? '15vh' : '0vh'}`,
                    marginLeft: `${props.order !== 'row' ? '15vh' : '0vh'}`,
                }} />

                <Col style={{
                    width: '60vh',
                    marginLeft: '5vh',
                    
                }}>
                    <p style={{
                        fontSize: '4vh', width: '100%', textAlign: 'center',
                        fontWeight: 650, color: '#463f3a'
                    }}>{props.name}</p>

                    <p style={{
                        fontSize: '2vh', width: '100%', textAlign: 'left',
                        fontWeight: 500, wordWrap: 'break-word', color: '#463f3a'
                    }}>{props.text}</p>

                    <div style={{
                        width: '100%', height: '10vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Link to={props.action(props.gif)}
                        target='_blank'>
                            <Button
                                // onClick={() => props.action(props.gif)}
                                style={{
                                    width: '20vh', fontWeight: 500, height: '5vh',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1.5vh', fontSize: '2vh'
                                }}
                            >Full project</Button>
                        </Link>

                    </div>

                </Col>


            </div>
            <hr style={{
                width: '90%', border: '2px solid #463f3a20',
                borderRadius: '2vh'
            }} />

        </>
    )
}
