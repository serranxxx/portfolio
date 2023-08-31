import React from 'react'
import { Button, Col, Layout, Row, Select } from 'antd';
import { HiOutlineTranslate, HiOutlineUser } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MdDownload } from "react-icons/md";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import { AiOutlineHome } from 'react-icons/ai';

const { Header } = Layout;
const { Option } = Select
export const HeaderProjects = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const { language_, setLanguage, } = props
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: `#7765e399`,
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            boxShadow: '10px 0px 10px #00000040',
            height: '12vh',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>


            <p style={{
                // marginLeft: '1vw',
                fontSize: '2.5em', fontWeight: 400, color: '#f4f3ee', fontFamily: 'Berlin Sans FB',

            }}>{t('Projects.title')}</p>


            <Row style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                width: '14%'

            }}>

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
                    icon={<IoHammer size={25} style={{ color: '#f4f3ee' }} />}
                    className='button'
                    type='ghost' />

                <Button
                    onClick={() => navigate("/portfolio/resume", {
                        replace: true
                    })}
                    icon={<HiOutlineUser size={25} style={{ color: '#f4f3ee' }} />}
                    className='button'
                    type='ghost' />



                <Button
                    icon={<HiOutlineTranslate size={25} style={{ color: `${!language_ ? '#7765e3' : '#f4f3ee'}` }} />}
                    className='button'
                    onClick={() => setLanguage(!language_)}
                    type='ghost' />

            </Row>



        </Header>
    )
}
