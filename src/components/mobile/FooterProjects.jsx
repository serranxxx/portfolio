import React from 'react'
import { Button, Layout, Row } from 'antd';
import { PiUsersFill, PiChartDonutFill, PiBookFill, PiAddressBookFill, PiArrowSquareLeftFill, PiSignOutFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { IoHammer, IoLanguageOutline, IoLanguageSharp } from 'react-icons/io5';
import { HiOutlineTranslate, HiOutlineUser } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { HiMiniUser } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';
const { Footer } = Layout;
export const FooterProjects = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate()
    const { language_, setLanguage, handleDownload } = props

    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '10vh', boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: `#f4f3ee`
        }}>
            <Row style={{
                width: '70%',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>



                <Button
                    onClick={() => navigate("/portfolio/main-projects", {
                        replace: true
                    })}
                    icon={<IoHammer size={25} style={{ color: '#7765e399' }} />}
                    className='button'
                    type='ghost' />

                <Button
                    className='button'
                    type='ghost'
                    icon={<AiOutlineHome size={25} style={{ color: '#7765e399' }} />}
                    onClick={() => navigate("/portfolio/home", {
                        replace: true
                    })}
                />

                <Button
                    onClick={() => navigate("/portfolio/resume", {
                        replace: true
                    })}
                    icon={<HiOutlineUser size={25} style={{ color: '#7765e399' }} />}
                    className='button'
                    type='ghost' />


                <Button
                    icon={language_ ? <IoLanguageOutline size={25} style={{ color: '#7765e399' }} /> : <IoLanguageSharp size={25} style={{ color: '#7765e399' }} />}
                    className='button'
                    onClick={() => setLanguage(!language_)}
                    type='ghost' />

            </Row>
        </Footer>
    )
}
