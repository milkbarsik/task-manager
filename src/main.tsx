import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<BrowserRouter>
			<ConfigProvider
				theme={{
					components: {
						Input: {
							colorPrimary: '#1a1a1a',
							colorBgContainer: '#1a1a1a',
							colorBorder: '#1a1a1a',
							hoverBorderColor: '#ff8000',
							activeBorderColor: '#ff8000',
							activeShadow: '0 0 5px 1px #ff8000',
							colorText: 'white',
							fontSize: 20,
							paddingBlock: 10,
							colorTextPlaceholder: 'rgba(255, 255, 255, 0.5)'
						},
						Radio: {
							buttonBg: '#1a1a1a',
							buttonCheckedBg: '#1a1a1a',
							colorBorder: '#1a1a1a',
							buttonColor: 'white',
							colorPrimary: '#ff8000',
							colorPrimaryHover: '#ff8000',
							borderRadius: 5,
							controlHeight: 50,
							fontSize: 15
						}
					}
				}}
			>
				<App />
			</ConfigProvider>
		</BrowserRouter>
  </StrictMode>,
)
