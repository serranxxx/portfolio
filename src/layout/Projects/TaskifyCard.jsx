import { Button, Row } from 'antd'
import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const TaskifyCard = () => {
    return (
        <div
            style={{
                height: 'auto', width: 'auto', backgroundColor: '#f4f3ee',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
                flexDirection: 'column', padding: '0 5% 5% 5%'
            }}
        >
            <div style={{
                width: '100%', height: 'auto',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <Row style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                }}>
                    <p style={{
                        marginLeft: '3vh',
                        fontSize: '5vh', fontWeight: 450, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                    }}>Taskify (step by step)</p>

                    <Link to="https://serranxxx.github.io/taskify/" 
                    target='_blank'
                    style={{
                        marginRight: '3vh'
                    }}>
                        <Button
                            style={{
                                width: '15vh', fontWeight: 500, height: '5vh',
                                color: '#f4f3ee', backgroundColor: '#7765e3',
                                borderRadius: '1.5vh', fontSize: '2vh', marginLeft: '4vh'
                            }}
                        >Full project</Button>
                    </Link>


                </Row>



                <Link to="/portfolio/main-projects" style={{
                    marginRight: '3vh'
                }}>
                    <Button
                        type='ghost'
                        icon={<AiOutlineRollback size={30} style={{ color: '#463f3a' }} />} />
                </Link>


            </div>

        </div>
    )
}
