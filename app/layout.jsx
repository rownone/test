import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


export const metadata = {
  title: 'Welcome to devfund.net',
  description: 'devfund.net - Join our exclusive community of like minded people on devfund.net',
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id
  console.log('params',params)
  console.log('searchParams',params)
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: 'hello',
  }
}
 

export default function RootLayout({ children, params, searchParams }) {
  return (
    <html lang="en">
      <head>

 
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
