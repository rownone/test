import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

let domain = 'test.com';
try{
	console.log('NEXT_PUBLIC_VERCEL_URL',process.env.NEXT_PUBLIC_VERCEL_URL);
	domain = process.env.NEXT_PUBLIC_VERCEL_URL;
}catch(e){
	
	
}
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
		<h1>{domain}</h1>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
