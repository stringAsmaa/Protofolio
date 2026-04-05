import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import store from './store'

function Main() {
  const [mode, setMode] = useState('light')

  const theme = useMemo(() =>
    createTheme({
    palette: {
  mode,    
  primary: {
    main: mode === 'light' ? 'rgb(151, 125, 151)' : '#c911eeff',
        main1: mode === 'light' ? 'rgb(247, 239, 247)' : '#c911eeff', // أزرق رئيسي لللايت، أزرق فاتح للدارك

    // أزرق رئيسي لللايت، أزرق فاتح للدارك
    contrastText:mode === 'light' ?'#ffffffff' : '#000000',
    text:mode === 'light' ? '#ffffff' : '#c911eeff',
    text4:mode === 'light' ? '#9819d2ff' : '#ffffff',
    text3:mode === 'light' ? 'rgb(14, 10, 15)' : '#9819d2ff',

    // لون النص على الأزرار
  },
  background: {
        main: mode === 'light' ? 'rgb(139, 11, 139)' : 'rgb(195, 187, 197)', // أزرق رئيسي لللايت، أزرق فاتح للدارك

    default: mode === 'light' ? '#5f027280' : '#000000', // الأبيض لللايت، الأسود للدارك
    paper: mode === 'light' ? '#ffffff' : '#121212',   // البطاقات
  },
  text: {
    primary: mode === 'light' ? 'rgb(14, 12, 14)' : '#ffffff', // النص الرئيسي: أزرق لللايت، أبيض للدارك
    secondary: mode === 'light' ? 'rgb(37, 30, 37)' : '#b0b0b0', 
        secondary1: mode === 'light' ? 'rgb(37, 30, 37)' : 'rgb(139, 11, 139)', // النص الثانوي
// النص الثانوي
  },
  divider:{
            main: mode === 'light' ? '#3a04327c' : '#d8bfbfff', // لون خلفية  

  }
},
      typography: {
        fontFamily: 'CairoBlack, Arial, sans-serif',
      },
       navbar: {
        main: mode === 'light' ? '#f5c2ed7c' : '#121212', // لون خلفية  
        contrastText: mode === 'light' ? '#c319d2ff' : '#521f4dff', // لون النص والأيقونات
        hover: mode === 'light' ? '#f8e3fdff' : '#1f1f1f', // عند التحويم
        border: mode === 'light' ? 'rgb(226, 218, 226)' : '#c319d2ff',
                border1: mode === 'light' ? 'rgb(226, 218, 226)' : '#9819d2ff',

        span:mode === 'light' ? '#700a99ff' : '#ffffff',
                body: mode === 'light' ? '#c2e0f52c' : '#000000',
                 body1: mode === 'light' ? '#3b4044b2' : '#ffffff',
                // لون خلفية  البودي
button:mode === 'light' ? '#ffffff' : '#9819d2ff',
            Text:mode === 'light' ? '#000000' :'#ad19d2ff' ,  
               paper: mode === 'light' ? '#ffffff' : '#121212', 
               icon:mode=== 'light' ? '#3b4044b2' : '#cc19d2ff', //ت
// لون النص مخصص  

      },
    }),
    [mode]
  )

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
