import React from 'react'
import { AppProvider } from './context/AppProvider'
import { AppRouter } from './router/AppRouter'

export const Portfolio = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

