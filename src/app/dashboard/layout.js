import Menu from '../components/header-dashboard/Headerdashboard'
import Box from '@mui/joy/Sheet';

export default function DashboardtLayout({ children }) {
    return (
        <>

          
            <Menu />
            <main>
            <Box color="neutral" sx={{ marginLeft: 6, marginRight: 6, background: '#ffffff' }}>
            {children}
            </Box>
            </main>
        </>
    )
  }