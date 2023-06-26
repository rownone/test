import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

let config = {
	DOMAIN: 'devfund.com'
};

try{
	config.DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL
}catch(e){}

export const metadata = {
  title: 'Welcome to devfund.net',
  description: 'devfund.net - Join our exclusive community of like minded people on devfund.net',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

 
      </head>
      <body>
		<h1>{config.DOMAIN}</h1>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
