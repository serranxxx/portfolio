import React from 'react'
import { Button, Col, Layout, Row, Select } from 'antd';
import { HiOutlineTranslate } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MdDownload } from "react-icons/md";
import { IoHammer } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";


const { Header } = Layout;
const { Option } = Select
export const HeaderMobile = (props) => {
    const { t } = useTranslation();
    const { handleDownload } = props
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
                    fontSize: '2em', fontWeight: 650, color: '#f4f3ee',
                    margin: '0'
                }}>Alberto Serrano</p>

                <p style={{
                    // marginLeft: '1vw',
                    fontSize: '1em', fontWeight: 400, color: '#f4f3ee',
                    margin: '-5vh 0 0 0'
                }}>{t('Resume.Description')}</p>
            </Col>


            <Button
                className='button'
                type='ghost'
                icon={<MdDownload size={30} style={{ color: '#f4f3ee' }} />}
                onClick={handleDownload}
            />



        </Header>
    )
}
