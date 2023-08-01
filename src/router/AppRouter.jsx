import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'
import { MainProjects } from '../layout/Projects/MainProjects'
import { TaskifyCard } from '../layout/Projects/TaskifyCard'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ="/portfolio*" element ={<LayoutApp />} />
        <Route path ="/portfolio/main" element ={<LayoutApp />} />
        <Route path ="/portfolio/main-projects" element ={<MainProjects />} />
        <Route path ="/portfolio/main-projects/taskify" element ={<TaskifyCard />} />
    </Routes>
  )
}
