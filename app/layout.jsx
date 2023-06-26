import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const config = {
	DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
};

export const metadata = {
  title: 'Welcome to Contrib.com',
  description: 'Contrib.com - Join our exclusive community of like minded people on contrib.com'
}

export async function generateMetadata({ params, searchParams }, parent) {
	
	const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${config.DOMAIN}`
	console.log('url',url)
	
	const res = await fetch(url).catch((error) => {
		console.log('error',error)
	});

	const domainInfo = await res.json()
	
	return {
		title: domainInfo.data.title,
		description: domainInfo.data.description,
	}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
