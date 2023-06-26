import Script from 'next/script';
const config = {
	DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
}
const Staffing = () => {
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/staffing?d="+config.DOMAIN+"&container=staffing-script"}/>
        <div className="staffing-script"></div>
    </>
   
  )
}

export default Staffing