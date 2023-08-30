import React from 'react'
import { Button, Layout, Row } from 'antd';
import { PiUsersFill, PiChartDonutFill, PiBookFill, PiAddressBookFill, PiArrowSquareLeftFill, PiSignOutFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { IoHammer } from 'react-icons/io5';
import { HiOutlineTranslate } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
const { Footer } = Layout;
export const FooterMobile = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate()
    const { language_, setLanguage, handleDownload } = props

    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '10vh', boxShadow: '-10px 0px 10px #00000030',
            backgroundColor: `$#f4f3ee`
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
                    icon={<BiSolidHomeAlt2 size={25} style={{ color: '#7765e399' }} />}
                    onClick={() => navigate("/portfolio/home", {
                        replace: true
                    })}
                />
                <Button
                    icon={<HiOutlineTranslate size={25} style={{ color: `${!language_ ? '#877ebf' : '#7765e399'}` }} />}
                    className='button'
                    onClick={() => setLanguage(!language_)}
                    type='ghost' />

            </Row>
        </Footer>
    )
}
