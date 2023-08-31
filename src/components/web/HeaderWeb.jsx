import React from 'react'
import { Button, Col, Layout, Row, Select } from 'antd';
import { HiOutlineTranslate } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MdDownload } from "react-icons/md";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";
import { HiMiniUser } from 'react-icons/hi2';
import { IoLanguageOutline, IoLanguageSharp } from "react-icons/io5";
const { Header } = Layout;
const { Option } = Select
export const HeaderWeb = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const { language_, setLanguage, handleDownload, location } = props
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: `#7765e399`,
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            boxShadow: '10px 0px 10px #00000040',
            height: '12vh',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>


            <Col style={{ height: '100%' }}>
                <p style={{
                    // marginLeft: '1vw',
                    fontSize: '2.5em', fontWeight: 500, color: '#f4f3ee', fontFamily: 'Berlin Sans FB',
                    margin: '0'
                }}>Luis Alberto Serrano García</p>

                <p style={{
                    // marginLeft: '1vw',
                    fontSize: '1.5em', fontWeight: 400, color: '#f4f3ee', fontFamily: 'Berlin Sans FB',
                    margin: '-4.5vh 0 0 0'
                }}>{t('Resume.Description')}</p>
            </Col>



            <Row style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                width: '20%'

            }}>
                <Button
                    className='button'
                    type='ghost'
                    icon={<AiOutlineDownload size={25} style={{ color: '#f4f3ee' }} />}
                    onClick={handleDownload}
                />


                <Button
                    className='button'
                    type='ghost'
                    icon={<AiOutlineHome size={25} style={{ color: '#f4f3ee' }} />}
                    onClick={() => navigate("/portfolio/home", {
                        replace: true
                    })}
                />

                <Button
                    onClick={() => navigate("/portfolio/main-projects", {
                        replace: true
                    })}
                    icon={<IoHammerOutline size={25} style={{ color: '#f4f3ee' }} />}
                    className='button'
                    type='ghost' />

                <Button
                    onClick={() => navigate("/portfolio/resume", {
                        replace: true
                    })}
                    icon={<HiMiniUser size={25} style={{ color: '#f4f3ee' }} />}
                    className='button'
                    type='ghost' />



                <Button
                    icon={!language_ ? <IoLanguageOutline size={25} style={{ color: '#f4f3ee' }} /> : <IoLanguageSharp size={25} style={{ color: '#f4f3ee' }}  />}
                    className='button'
                    onClick={() => setLanguage(!language_)}
                    type='ghost' />


                
            </Row>



        </Header>
    )
}
