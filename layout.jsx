import './globals.css'
export const metadata = {
  title: 'The Trust Book',
  description: 'Galaxy-themed AI eBook platform — generate, publish, sell.'
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
