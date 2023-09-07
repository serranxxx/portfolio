import { Layout, } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context/appContext'
import i18n from '../../languages/i18n'
import { useTranslation } from 'react-i18next'
import { assets } from '../hooks/gifsPaths'
import { HeaderMobile } from '../../components/mobile/HeaderMobile'
import { ContentMobile } from '../../components/mobile/ContentMobile'
import { HeaderWeb } from '../../components/web/HeaderWeb'
import { ContentWeb } from '../../components/web/ContentWeb'
import { FooterMobile } from '../../components/mobile/FooterMobile'


export const CurriculumV = () => {

    const { newLanguage, language } = useContext(appContext)
    const [language_, setLanguage] = useState(true)
    const { t } = useTranslation();

    const setnewLanguage = () => {
        // setLanguage(!language_)
        if (language_) i18n.changeLanguage('en')
        else i18n.changeLanguage('es')
        newLanguage(language_)
    }

    useEffect(() => {
        setnewLanguage()
    }, [language_])

    const handleDownload = () => {
        // Ruta relativa al archivo PDF en la carpeta "assets"
        const pdfPath = `${language_ ? assets.resume : assets.cv}`;

        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank'; // Abre en una nueva pestaña (opcional)
        link.download = `${language_ ? 'AlbertoSerrano-Resume' : 'AlbertoSerrano-Curriculum'}`; // Nombre del archivo al descargar (opcional)

        // Simular el clic en el enlace para iniciar la descarga
        link.click();
    };


    return (
        <>

            <Layout
                className='resume-large'
                style={{ minHeight: '100vh', backgroundColor: '#f4f3ee' }}>
                <HeaderWeb language_={language_} setLanguage={setLanguage} handleDownload={handleDownload} location={true}/>
                <ContentWeb />
            </Layout>


            <Layout 
            className='resume-small'
            style={{ minHeight: '100vh', backgroundColor: '#f4f3ee' }}>
                <HeaderMobile handleDownload={handleDownload} />
                <ContentMobile />
                <FooterMobile language_={language_} setLanguage={setLanguage} />
            </Layout>

  
        </>

    )
}
