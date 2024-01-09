import React, { useEffect } from 'react'
import { Button, Col, Layout, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { HomeCards } from '../../components/HomeCards';
import { gifs } from '../../helpers/gifsPaths';
import { projects } from '../../helpers/projects';
import { goTo } from '../../helpers/functions';

const { Content } = Layout;

export const ContentProjects = ({ theme }) => {

    return (
        <>
            <Content className='scrollable-div resume-large'
                style={{
                    marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', padding: '4% 0 0 0',
                    backgroundColor: 'transparent'
                }}
            >
                <HomeCards action={goTo} data={projects} />

            </Content>

            <Content className='scrollable-div resume-small'
                style={{
                    marginTop: '5vh', // Ajusta este valor para que el contenido no quede detrás del header
                    marginBottom: '8vh', // Ajusta este valor para que el contenido no quede detrás del footer
                    overflowY: 'scroll',
                    height: 'auto', // Ajusta estos valores según el header y footer
                    alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: 'column', padding: '4% 0 0 0',
                    backgroundColor: 'transparent'
                }}
            >
                <HomeCards action={goTo} data={projects} />

            </Content>
        </>
    )
}
