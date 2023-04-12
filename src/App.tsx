import { useState } from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Home } from './pages/Home'
import { Theme } from './Theme'

function App() {

  return (
    <>

      <Theme>
        <CssBaseline />
        <Container>
          <Home />
        </Container>
      </Theme>
    </>

  )
}

export default App
