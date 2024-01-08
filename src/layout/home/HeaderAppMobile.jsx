import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Layout, Menu, Row, Select, Switch } from 'antd';


import { GoHomeFill, GoHome } from "react-icons/go";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import { IoDocumentTextOutline, IoDocumentText } from "react-icons/io5";
import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { IoLanguageOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

import { IoLanguage } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { appContext } from '../../context/appContext';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;


export const HeaderAppMobile = ({
    type, position, code
}) => {

    const { switchLanguage, language, theme, changeTheme } = useContext(appContext)
    const { t } = useTranslation();
    const [onHome, setOnHome] = useState(true)
    const [onProjects, setOnProjects] = useState(false)
    const [onResume, setOnResume] = useState(false)
    const [onSettings, setOnSettings] = useState(false)
    const [themebg, setThemebg] = useState(false)
    const [languagebg, setLanguagebg] = useState(false)
    const [lang, setLang] = useState(!!!language)
    // const [theme, setTheme] = useState(true)
    const [visible, setVisible] = useState(false)

    const [primary, setPrimary] = useState('#F5F5F5')
    const [second, setSecond] = useState('#7765e399')
    const [third, setThird] = useState('#FAFAFA')
    const [text, setText] = useState('#463f3a')

    const menu = (

        <>
            {

                <Menu style={{
                    backgroundColor: theme ? `#f5f5f5` :'#222', width: 300,
                    marginTop: '15px', borderRadius: '3vh',
                    marginRight: '-30px'

                }}>

                    <Menu.Item
                        onMouseEnter={() => setLanguagebg(true)} onMouseLeave={() => setLanguagebg(false)}
                        style={{
                            color: `${theme ? '' : (languagebg ? '#f5f5f580' : '#f5f5f580')}`,
                            height: 50, cursor: 'default',
                            backgroundColor: theme ? `#FAFAFA` : '#252525', borderRadius: '2vh 2vh 0 0',
                            // borderBottom: '1px solid #000'
                        }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', paddingLeft: '1em', paddingRight: '1em' }}>
                            <div style={{ width: '15%' }}>
                                {
                                    !languagebg
                                        ? <IoLanguageOutline size={15} />
                                        : <IoLanguage size={15} />
                                }

                            </div>
                            <div style={{ width: '70%', fontStyle: 'italic' }}>

                                <p>
                                    {
                                        language ? "English"
                                            : 'Español'
                                    }
                                </p>

                            </div>
                            <div style={{ width: '20%' }}>
                                <Switch
                                    checked={language}
                                    onChange={() => switchLanguage(!language)}
                                    size="small"
                                    style={{ width: '50%', backgroundColor: language ? theme ? '#A69AE6' : '#A69AE680' : '', color: '#000' }}
                                // style={{  }}
                                />
                            </div>
                        </div>
                        {/* <hr/> */}
                    </Menu.Item>

                    <Menu.Item
                        onMouseEnter={() => setThemebg(true)} onMouseLeave={() => setThemebg(false)}
                        style={{
                            color: `${theme ? '' : (themebg ? '#f5f5f580' : '#f5f5f580')}`,
                            height: 50, cursor: 'default',
                            backgroundColor: theme ? `#FAFAFA` : '#252525', borderRadius: '0 0 2vh 2vh'
                        }}>
                        <div style={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                            paddingLeft: '1em', paddingRight: '1em', position: 'relative'
                        }}>
                            <div style={{ width: '15%' }}>
                                {
                                    theme
                                        ? !themebg ? <MdOutlineWbSunny size={15} /> : <BsFillBrightnessHighFill size={15} />
                                        : !themebg ? <IoMoonOutline size={15} /> : <BsFillMoonFill size={15} />
                                }

                            </div>
                            <div style={{ width: '70%', fontStyle: 'italic' }}>
                                {
                                    theme
                                        ? <p>Light</p>
                                        : <p>Dark</p>
                                }
                            </div>
                            <div style={{ width: '20%' }}>
                                <Switch
                                    checked={theme}
                                    onChange={() => changeTheme(!theme)}
                                    size="small"
                                    style={{ width: '50%', backgroundColor: theme ? theme ? '#A69AE6' : '#A69AE680' : '', color: '#000' }}
                                // style={{ width: '50%' }}
                                />
                            </div>

                        </div>
                        {/* <hr/> */}
                    </Menu.Item>


                </Menu>

            }
        </>

    )

    const handlePages = (index) => {
        switch (index) {
            case 'home':
                setOnHome(true)
                setOnProjects(false)
                setOnResume(false)
                break;

            case 'projects':
                setOnHome(false)
                setOnProjects(true)
                setOnResume(false)
                break;

            case 'resume':
                setOnHome(false)
                setOnProjects(false)
                setOnResume(true)
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        switch (type) {
            case 'home':
                setPrimary('#F5F5F590')
                setSecond('#7765e399')
                setThird('#FAFAFA')
                setText('#463f3a')
                break;

            case 'content':
                setPrimary('#7765e399')
                setSecond('#FAFAFA')
                setThird('#7765e399')
                setText('#FAFAFA')
                break;

            default:
                break;
        }
    }, [])

    // useEffect(() => {
    //     switchLanguage(lang)
    // }, [lang])



    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: theme ? '#f5f5f5' : '#252525', backdropFilter: 'blur(16px)',
            // padding:'0 5% 0 5%',
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            boxShadow: '10px 0px 10px #00000040',
            borderBottom: '1px solid #463f3a20',
            height: '9vh',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
        }}>



            <Col style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <h2 style={{
                    fontSize: position === 'home' ? '2.5em' : '1.3em', color: second,
                    fontWeight: 800, marginRight: '10px',
                    fontStyle: position === 'resume' ? 'italic' : 'italic',
                }}>{code}</h2>
                {/* <p style={{
                    fontSize: '1.5em' , color: second,
                    fontWeight: 800, marginRight:'10px',
                    display: position === 'resume' ? '' : 'none',
                }}>-</p> */}
                <p style={{
                    fontSize: '1em', color: theme ? text : '#f5f5f580',
                    fontWeight: 500, marginRight: '10px',
                    display: position === 'resume' ? '' : 'none',
                    fontStyle:'italic',
                    marginTop: '-8.5vh'
                }}> Developer - {t('Resume.uiux')}</p>
            </Col>


        </Header>
    )
}
