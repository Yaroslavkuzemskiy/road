import './globals.css'




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='wrapper'>
          <main>
           {children}
          </main>
        
        </div>
      </body>
    </html>
  )
}
