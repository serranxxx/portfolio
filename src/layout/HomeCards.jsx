import React from 'react'
import { gifs } from './hooks/gifsPaths'
import { Button, Col } from 'antd'

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "

export const HomeCards = (props) => {
    return (
        <div style={{
            width: '85%', height: '65vh', backgroundColor: '#f4f3ee',
            marginTop: '2vh', borderRadius: '2vh', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
            // border:'2px solid #463f3a80', 
            marginBottom:'8vh'
        }}>
            <img src={props.gif} style={{
                height: '80%', width: 'auto', borderRadius: '0.5vh',
                boxShadow:'0 0 20px #00000010'
            }} />

            <Col style={{
                width: '40vh',
                marginLeft: '5vh'
            }}>
                <p style={{
                    fontSize: '4vh', width: '100%', textAlign: 'center',
                    fontWeight: 650, color:'#463f3a'
                }}>{props.name}</p>

                <p style={{
                    fontSize: '2vh', width: '100%', textAlign: 'left',
                    fontWeight: 500, wordWrap:'break-word', color:'#463f3a'
                }}>{text}</p>

                <div style={{
                    width:'100%', height:'10vh',
                    display:'flex', alignItems:'center', justifyContent:'center'
                }}>
                    <Button
                    style={{
                        width:'60%', fontWeight:500, height:'5vh',
                        color:'#f4f3ee', backgroundColor:'#7765e3',
                        borderRadius:'1.5vh'
                    }}
                    >Quick view</Button>
                </div>
            </Col>

        </div>
    )
}
