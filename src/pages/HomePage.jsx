import { Layout } from 'antd'
import React, { useContext, useState } from 'react'
import { HeaderApp } from '../layout/home/HeaderApp'
import { ContentHome } from '../layout/home/ContentHome'
import { appContext } from '../context/appContext'
import { HeaderAppMobile } from '../layout/home/HeaderAppMobile'
import { FooterApp } from '../layout/home/FooterApp'


export const HomePage = () => {

    const { theme } = useContext(appContext)

    return (
        <>
            <Layout
                className='resume-large'
                style={{ minHeight: '100vh', backgroundColor: theme ? '#f5f5f5' : '#252525' }}>
                <HeaderApp type={'home'} position={'home'} code={'AS.'} />
                <ContentHome />
            </Layout>

            <Layout
                className='resume-small'
                style={{ minHeight: '100vh', backgroundColor: theme ? '#f5f5f5' : '#252525' }}>
                <HeaderAppMobile type={'home'} position={'home'} code={''} />
                <ContentHome />
                <FooterApp type={'home'} position={'home'} code={'AS.'} />

            </Layout>
        </>
    )
}
