import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'
import { Resume } from '../pages/Resume'
import { HomePage } from '../pages/HomePage'
import { Projects } from '../pages/Projects'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/portfolio*" element ={<LayoutApp />} />
        <Route path ="/portfolio/home" element ={<HomePage />} />
        <Route path ="/portfolio/projects" element ={<Projects />} />
        <Route path ="/portfolio/resume" element ={<Resume />} />
        {/* <Route path ="/portfolio/main-projects/taskify" element ={<TaskifyCard />} /> */}
    </Routes>
  )
}
