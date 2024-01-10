import React, { useContext, useEffect, useState } from 'react'
import { Button, Layout, Row } from 'antd'
import { ContentProjects } from '../layout/Projects/ContentProjects'
import { HeaderApp } from '../layout/home/HeaderApp'
import { appContext } from '../context/appContext'
import { HeaderAppMobile } from '../layout/home/HeaderAppMobile'
import { FooterApp } from '../layout/home/FooterApp'
import { assets } from '../helpers/gifsPaths'



export const Projects = () => {

    const { theme, language } = useContext(appContext)
    const handleDownload = () => {

        // message.success('enter')
        // Ruta relativa al archivo PDF en la carpeta "assets"
        const pdfPath = `${language ? assets.resume : assets.cv}`;

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank'; // Abre en una nueva pestaña (opcional)
        link.download = `${language ? 'AlbertoSerrano-Resume' : 'AlbertoSerrano-Curriculum'}`; // Nombre del archivo al descargar (opcional)

        // Simular el clic en el enlace para iniciar la descarga
        link.click();
    };

    return (
        <>

            <Layout
                className='resume-large'
                style={{ minHeight: '100vh', backgroundColor: theme ? '#F5F5F5' : '#252525' }}>
                <HeaderApp type={'home'} position={'projects'} code={'AS.'} handleDownload={handleDownload} />
                <ContentProjects />
            </Layout>

            <Layout
                className='resume-small'
                style={{ minHeight: '100vh', backgroundColor: theme ? '#F5F5F5' : '#252525' }}>
                <HeaderAppMobile type={'home'} position={'projects'} code={'Projects'} />
                <ContentProjects />
                <FooterApp type={'home'} position={'projects'} code={'AS.'} handleDownload={handleDownload} />
            </Layout>

            {/* <Layout
                className='resume-small'
                style={{ minHeight: '100vh', backgroundColor: '#f4f3ee' }}>
                <HeaderProjectsMobile language_={language_} setLanguage={setLanguage}  />
                <ContentProjects goTo={goTo}/>
                <FooterProjects language_={language_} setLanguage={setLanguage} />
            </Layout> */}


            {/* <div
                style={{
                    height: 'auto', width: 'auto', backgroundColor: '#f4f3ee',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto',
                    flexDirection: 'column', padding: '0 5% 5% 5%'
                }}
            >
                <div style={{
                    width: '90%', height: 'auto',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row',
                }}>

                    <p style={{
                        marginLeft: '1vw',
                        fontSize: '2.3em', fontWeight: 450, color: '#463f3a', fontFamily: 'Berlin Sans FB',
                    }}>{t('Projects.title')}</p>

                    <Row style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                    }}>


                        <Link to="/portfolio/resume" style={{
                            marginRight: '0vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    margin: '0 0vh 0 1vh',
                                    width: 'auto', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '1vh 0 0 1vh', fontSize: '1.1em'
                                }}>{t('Projects.button')}</Button>
                        </Link>

                        <Link to="/portfolio/main" style={{
                            marginRight: '0vh'
                        }}>
                            <Button
                                className='button'
                                style={{
                                    width: 'auto', fontWeight: 500, height: 'auto',
                                    color: '#f4f3ee', backgroundColor: '#7765e3',
                                    borderRadius: '0 1vh 1vh 0', fontSize: '1.1em'
                                }}
                            >
                                {t('button.home')}
                            </Button>
                        </Link>


                        <Button
                            icon={<HiOutlineTranslate style={{ color: `${!language_ ? '#bcb8b1' : '#f4f3ee'}` }} />}
                            className='button'
                            onClick={() => setLanguage(!language_)}
                            style={{
                                // position: 'absolute', top: '3%', right: '3%',
                                margin: '0 2vh 0 2vh',
                                fontWeight: 500, height: 'auto',
                                backgroundColor: `${language_ ? '#bcb8b1' : 'transparent'}`,
                                borderRadius: '1vh', fontSize: '1em', color: `${!language_ ? '#bcb8b1' : '#f4f3ee'}`,
                                border: `${language_ ? '2px solid #bcb8b1' : '2px solid #bcb8b1'}`
                            }}>{t('button.translate')}</Button>




                    </Row>

                </div>

                <hr style={{
                    width: '90%', border: '2px solid #463f3a80',
                    borderRadius: '2vh'
                }} />

                <HomeCards name="Mindscribe" action={goTo} gif={gifs.journal} order={'row-reverse'} text={t('Projects.journal')} />
                <HomeCards name="Taskify" action={goTo} gif={gifs.taskify} order={'row'} text={t('Projects.taskify')} />
                <HomeCards name="Avatar Studio" action={goTo} gif={gifs.avatar} order={'row-reverse'} text={t('Projects.avatar')} />
                <HomeCards name="Sender Reviewer" action={goTo} gif={gifs.send} order={'row'} text={t('Projects.send')} />
                <HomeCards name="San Pancrasio" action={goTo} gif={gifs.pancrasio} order={'row-reverse'} text={t('Projects.POS')} />


            </div> */}

        </>
    )
}
