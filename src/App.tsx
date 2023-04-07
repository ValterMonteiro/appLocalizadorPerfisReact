import { useState } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Home } from './pages'

function App() {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={ }>
        <Home />
      </ThemeProvider>
    </>

  )
}

export default App
