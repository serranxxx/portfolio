import { Layout, message, } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'
import { assets } from '../helpers/gifsPaths'
import { ContentResume, ContentWeb } from '../layout/Resume/ContentResume'
import { HeaderApp } from '../layout/home/HeaderApp'
import { HeaderAppMobile } from '../layout/home/HeaderAppMobile'
import { FooterApp } from '../layout/home/FooterApp'


export const Resume = () => {

    
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
                style={{ minHeight: '100vh', backgroundColor: theme ?  '#f5f5f5' : '#252525' }}>
                <HeaderApp type={'home'} position={'resume'} code={'Luis Alberto Serrano García'} handleDownload={handleDownload}/>
                {/* <HeaderWeb language_={language_} setLanguage={setLanguage} handleDownload={handleDownload} location={true} /> */}
                <ContentResume handleDownload={handleDownload}/>
            </Layout>


            <Layout
                className='resume-small'
                style={{ minHeight: '100vh', backgroundColor: theme ?  '#f5f5f5' : '#252525'  }}>
                <HeaderAppMobile type={'home'} position={'resume'} code={'Luis Alberto Serrano García'}/>
                {/* <ContentMobile /> */}
                <ContentResume />
                <FooterApp type={'home'} position={'resume'} code={'Luis Alberto Serrano García'} handleDownload={handleDownload}/>
                {/* <FooterMobile language_={language_} setLanguage={switchLanguage} /> */}
            </Layout>


        </>

    )
}
