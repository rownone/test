import Script from 'next/script';
const config = {
	DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
}
const Invest = () => {
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/investment?d="+config.DOMAIN+"&container=invest-script"}/>
        <div className="invest-script"></div>
    </>
   
  )
}

export default Invest