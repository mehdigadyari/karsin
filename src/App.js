import React from 'react'
import ThemeProvider from './component/ThemeProvider'
import RTL from './component/RTL'
import MasterLayout from './screen/MasterLayout'
import { CssBaseline } from '@material-ui/core'
export default function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <MasterLayout />
      </RTL>
    </ThemeProvider>
  )
}
