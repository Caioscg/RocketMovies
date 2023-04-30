import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'

import { Details } from './pages/Details'
import { SingIn } from './pages/SingIn'
import { SingUp } from './pages/SingUp'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'
import { New } from './pages/New'

import Theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)
