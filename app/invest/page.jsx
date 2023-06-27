import Script from 'next/script';
import { getDomain } from '../../lib/data';

const Invest = () => {
  const domain = getDomain();
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/investment?d="+domain+"&container=invest-script"}/>
        <div className="invest-script"></div>
    </>
   
  )
}

export default Invest