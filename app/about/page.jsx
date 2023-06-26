import Script from 'next/script';
const config = {
	DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
};
const About = () => {
  return (
    <>

    <Script src={"https://tools.contrib.com/pages/aboutnew?d="+config.DOMAIN+"&container=aboutnew-script"}/>
       <div className="aboutnew-script"></div>
    </>
   
  )
}

export default About