import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Home } from './pages/Home'
import { Theme } from './Theme'

function App() {

  return (
    <>
      <Theme>
        <CssBaseline />
        <Home />
      </Theme>
    </>

  )
}

export default App
