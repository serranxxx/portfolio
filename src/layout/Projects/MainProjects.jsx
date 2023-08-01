import React from 'react'
import { HomeCards } from './HomeCards'
import { gifs } from '../hooks/gifsPaths'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { GrProjects } from "react-icons/gr";
import { AiOutlineRollback } from "react-icons/ai";

const taskify_text = "A classic to-do list project with a twist! While rooted in the simplicity of a traditional to-do list, Taskify is meticulously crafted to focus on delivering a truly unique and creative user experience. It goes beyond the standard by offering users the exciting option to create projects with multiple tasks"
const avatar_text = "The ultimate platform to craft your fully personalized avatars! Unleash your creativity as you select everything from skin tone to accessories, designing avatars that truly reflect your unique identity. Save, delete, and favorite your creations."
const send_text = "A simple but pretty interface that's all about style! With a stylish login screen and a beautifully crafted layout, this project mixes colors, tools, and styles. While it is not loaded with functionality yet, it shows off a great design and offers a good user experience."
const pancrasio_text = "A Point of Sale (POS) solution! Managing your business. Add products to your inventory and keep track of sales with detailed daily and monthly reports, including profits. Stay on top of your stock levels with an inventory report, ensuring you know exactly when to restock. Plus, export all this valuable data to Excel for your convenience."

export const MainProjects = () => {

    const navigate = useNavigate()

    const goTo = (index) => {
        switch (index) {
            case gifs.taskify:
                return `https://serranxxx.github.io/taskify/`


            case gifs.avatar:
                return `https://serranxxx.github.io/avatar-studio/`


            case gifs.send:
                return `https://serranxxx.github.io/send-review/`


            case gifs.pancrasio:
                return `https://serranxxx.github.io/san-pancrasio/`


            default:

        }
    }

    return (
        <>

            <div
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
                    }}>Projects</p>
                    <Link to="/portfolio/main" style={{
                        marginRight: '3vh'
                    }}>
                        <Button
                            type='ghost'
                            icon={<AiOutlineRollback size={30} style={{ color: '#463f3a' }} />} />
                    </Link>

                </div>

                <hr style={{
                    width: '90%', border: '2px solid #463f3a80',
                    borderRadius: '2vh'
                }} />

                <HomeCards name="Taskify" action={goTo} gif={gifs.taskify} order={'row'} text={taskify_text} />
                <HomeCards name="Avatar Studio" action={goTo} gif={gifs.avatar} order={'row-reverse'} text={avatar_text} />
                <HomeCards name="Sender Reviewer" action={goTo} gif={gifs.send} order={'row'} text={send_text} />
                <HomeCards name="San Pancrasio" action={goTo} gif={gifs.pancrasio} order={'row-reverse'} text={pancrasio_text} />


            </div>

        </>
    )
}
