import Image from 'next/image'
const config = {
  DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
}
async function getData() {
    const url = `https://api1.contrib.co/v2/domains/getdomainconfig?key=5c1bde69a9e783c7edc2e603d8b25023&domain=${config.DOMAIN}`
    const res = await fetch(url)
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Logo() {
  const data = await getData();
  if(data.data.logo){
    return (
        <Image 
              src={data.data.logo}
              width={300}
              height={300}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            />
    )
  }else{
    return(
        <h1 className="tw-text-5xl font-800">{config.DOMAIN}</h1>
    )
  }
}
