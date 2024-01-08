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
import { MdDownload } from "react-icons/md";
import { Footer } from 'antd/es/layout/layout';

const { Header } = Layout;


export const FooterApp = ({
    type, position, code, handleDownload
}) => {

    const { switchLanguage, language, theme, changeTheme } = useContext(appContext)
    const { t } = useTranslation();
    const [onHome, setOnHome] = useState(true)
    const [onProjects, setOnProjects] = useState(false)
    const [onResume, setOnResume] = useState(false)
    const [onSettings, setOnSettings] = useState(false)
    const [themebg, setThemebg] = useState(false)
    const [languagebg, setLanguagebg] = useState(false)
    const [downloadbg, setDownloadbg] = useState(false)
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
                    backgroundColor: theme ? `#f5f5f5` : '#222', width: 300,
                    marginBottom: '20px', borderRadius: '3vh',
                    marginRight: '-70px'

                }}>

                    <Menu.Item
                        onMouseEnter={() => setLanguagebg(true)} onMouseLeave={() => setLanguagebg(false)}
                        style={{
                            color: `${theme ? '' : (languagebg ? '#f5f5f580' : '#f5f5f580')}`,
                            height: 50, cursor: 'default',
                            backgroundColor: theme ? languagebg ? `#f3f3f3` : '#fafafa' : languagebg ? `#222` : '#252525', borderRadius: '2vh 2vh 0 0',
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
                            backgroundColor: theme ? themebg ? `#f3f3f3` : '#fafafa' : themebg ? `#222` : '#252525', borderRadius: '0'
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

                    <Menu.Item
                        onMouseEnter={() => setDownloadbg(true)} onMouseLeave={() => setDownloadbg(false)}
                        onClick={handleDownload}

                        style={{
                            color: `${theme ? '' : (downloadbg ? '#f5f5f580' : '#f5f5f580')}`,
                            height: 50, cursor: 'pointer',
                            backgroundColor: theme ? `#A69AE620` : `#A69AE640`, borderRadius: '0 0 2vh 2vh'
                        }}>
                        <div style={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                            paddingLeft: '1em', paddingRight: '1em', position: 'relative'
                        }}>
                            <div style={{ width: '15%' }}>
                                {

                                    !downloadbg ? <IoDocumentTextOutline size={15} /> : <IoDocumentText size={15} style={{}} />
                                }

                            </div>
                            <div style={{ width: '70%', fontStyle: 'italic' }}>
                                {
                                    language
                                        ? <p style={{
                                            color: theme ? '' : '#f5f5f580'
                                        }}>Download resume</p>
                                        : <p style={{
                                            color: theme ? '' : '#f5f5f580'
                                        }}>Descargar curriculum</p>
                                }
                            </div>
                            <div style={{ width: '20%' }}>
                                <Button
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: theme ? 'transparent' : 'transparent', border: '0px solid #000',
                                        borderRadius: '50%'
                                    }}
                                    icon={<MdDownload size={25} style={{
                                        color: theme ? '#00000080' : '#f5f5f580', margin: 0
                                    }} />}
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
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            backgroundColor: theme ? '#f5f5f5' : '#252525', backdropFilter: 'blur(16px)',
            // padding:'0 5% 0 5%',
            // background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), red)`,
            boxShadow: '10px 0px 10px #00000040',
            borderTop: '1px solid #463f3a20',
            height: '8vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>


            <Row style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'row',
            }}>

                {
                    position === 'home' ?
                        <Button
                            // onClick={() => setOnHome(false)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '1.5vh', fontWeight: 600, backgroundColor: `${second}`,
                                border: '0px solid #000', color: theme ? third : '#F5F5F590'
                            }}
                            icon={<GoHomeFill size={20} style={{ color: theme ? third : '#F5F5F590' }} />}>
                            {/* {t('nav.Home')} */}
                        </Button>
                        :
                        <Link to={"/portfolio/home"}>
                            <Button
                                onClick={() => handlePages('home')}
                                type='ghost'
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                                icon={<GoHome size={25} style={{ color: theme ? text : `${third}80` }} />} />
                        </Link>

                }

                {
                    position === 'projects' ?

                        <Button
                            // onClick={() => setOnProjects(false)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '1.5vh', fontWeight: 600, backgroundColor: second,
                                border: '0px solid #000', color: theme ? third : '#F5F5F590', margin: '0 8px 0 8px'
                            }}
                            icon={<IoHammer size={20} style={{ color: theme ? third : '#F5F5F580' }} />}>
                            {/* {t('nav.Projects')} */}
                        </Button>

                        :
                        <Link to={"/portfolio/projects"} style={{
                            margin: '0px 8px 0 8px'
                        }} >
                            <Button
                                onClick={() => handlePages('projects')}
                                type='ghost'
                                icon={<IoHammerOutline size={25} style={{ color: theme ? text : `${third}80` }} />}
                            />
                        </Link>

                }

                {
                    position === 'resume' ?

                        <Button
                            // onClick={() => setOnResume(false)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '1.5vh', fontWeight: 600, backgroundColor: second,
                                border: '0px solid #000', color: theme ? third : '#F5F5F590', margin: '0 8px 0 0'
                            }}
                            icon={<IoDocumentText size={20} style={{ color: theme ? third : '#F5F5F590' }} />}>
                            {/* {t('nav.Resume')} */}
                        </Button>

                        :
                        <Link to={"/portfolio/resume"} style={{ margin: '0px 8px 0 0' }}>
                            <Button
                                onClick={() => handlePages('resume')}
                                type='ghost'
                                icon={<IoDocumentTextOutline size={25} style={{ color: theme ? text : `${third}80` }} />}
                                style={{

                                }} />
                        </Link>

                }

                {
                    // onSettings ?
                    <Dropdown overlay={menu} onVisibleChange={() => setVisible(!visible)}  visible={visible}>
                        <Button
                            onClick={() => setOnSettings(false)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '1.5vh', fontWeight: 600,
                                backgroundColor: visible ? second : 'transparent',
                                border: '0px solid #000', color: theme ? third : '#F5F5F590',
                            }}
                            icon={visible ?
                                <IoSettingsSharp size={22} style={{ color: theme ? third : `${third}80` }} />
                                : <IoSettingsOutline size={22} style={{ color: theme ? text : `${third}80` }} />} />
                    </Dropdown>
                }


            </Row>
        </Footer>





        // </Header>
    )
}
