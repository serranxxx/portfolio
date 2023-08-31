import React, { useEffect } from 'react'
import { Col, Layout, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { HomeCards } from '../../layout/Projects/HomeCards';
import { gifs } from '../../layout/hooks/gifsPaths';
import { projects } from '../../helpers/projects';

const { Content } = Layout;

export const ContentProjects = (props) => {
    const { goTo } = props
    const { t } = useTranslation();

    return (
        <Content className='scrollable-div'
            style={{
                marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
                marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
                overflowY: 'scroll',
                height: 'auto', // Ajusta estos valores según el header y footer
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'column',
                // backgroundColor: `${bg}70`
            }}
        >
            <HomeCards action={goTo} data={projects} />

        </Content>
    )
}
