import React, { useEffect } from 'react'
import { Button, Col, Layout, Row } from 'antd';
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
                flexDirection: 'column', padding:'4% 0 0 0'
                // backgroundColor: `${bg}70`
            }}
        >
            {/* <Row style={{
                width:'30%', display:'flex', alignItems:'center', justifyContent:'space-between',
                flexDirection:'row', marginBottom:'5vh'
            }}>
                <Button style={{
                    borderRadius:'2vh', height:'5vh'
                }}>React.JS</Button>
                <Button>Node.JS</Button>
                <Button>AdobeXD</Button>
                <Button>Python</Button>
            </Row> */}
            <HomeCards action={goTo} data={projects} />

        </Content>
    )
}
