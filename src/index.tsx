import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme, ThemeProvider } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { SafeThemeProvider } from '@safe-global/safe-react-components'
import SafeProvider from '@safe-global/safe-apps-react-sdk'

import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found on public/index.html')

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <SafeThemeProvider mode="light">
      {(safeTheme: Theme) => (
        <ThemeProvider theme={safeTheme}>
          <SafeProvider
            loader={
              <>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                  <Typography textAlign="center" variant="h1">Waiting for Safe...</Typography>
                  <CircularProgress color="primary" />
             

               
                  <Typography variant="h4" textAlign="center" gutterBottom>
                    How to mint MintNPass NFT on Safe{`{Wallet}`} for free?
                  </Typography>
                  <Link 
                    href="https://www.youtube.com/watch?v=2ML_0lvoWn0" 
                    color="green" 
                    underline="hover"
                    variant="h6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </Link>
                  
                </Box>

              </>

             
            }
          >
            <App />
          </SafeProvider>
        </ThemeProvider>
      )}
    </SafeThemeProvider>
  </React.StrictMode>,
)
