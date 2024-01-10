import { Layout } from 'antd'
import React, { useContext, useState } from 'react'
import { HeaderApp } from '../layout/home/HeaderApp'
import { ContentHome } from '../layout/home/ContentHome'
import { appContext } from '../context/appContext'
import { HeaderAppMobile } from '../layout/home/HeaderAppMobile'
import { FooterApp } from '../layout/home/FooterApp'
import { assets } from '../helpers/gifsPaths'


export const HomePage = () => {

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
                style={{ minHeight: '100vh', backgroundColor: theme ? '#f5f5f5' : '#252525' }}>
                <HeaderApp type={'home'} position={'home'} code={'AS.'} handleDownload={handleDownload}/>
                <ContentHome />
            </Layout>

            <Layout
                className='resume-small'
                style={{ minHeight: '100vh', backgroundColor: theme ? '#f5f5f5' : '#252525' }}>
                <HeaderAppMobile type={'home'} position={'home'} code={''} />
                <ContentHome />
                <FooterApp type={'home'} position={'home'} code={'AS.'} handleDownload={handleDownload} />

            </Layout>
        </>
    )
}
