import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { getData, getDomain } from '../lib/data';
import Script from 'next/script';

const c = await getData();

export async function generateMetadata({ params, searchParams }, parent) {
	return {
		title: c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default function RootLayout({ children }) {
  const domain = getDomain();
  return (
    <html lang="en">
      <head>
        
        { c.data.adsenseClientId!==''?(<Script id="g-ads" async='' src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${c.data.adsenseClientId}`} crossorigin="anonymous"  data-checked-head="true"></Script>):'' }
        <Script id="g-manager" async src={`https://www.googletagmanager.com/gtag/js?id=${c.data.accountGA}`}></Script>
        <Script id="g-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${c.data.accountGA}');
          `}
        </Script>
        <Script id="g-matomo" type="text/javascript">
          {`
            var _paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setCookieDomain", "*.${domain}"]);
            _paq.push(["setDomains", ["*.${domain}"]]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//stats.numberchallenge.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', ${c.data.piwikId}]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      {/*
        <noscript>{`<p><img src="${"//stats.numberchallenge.com/matomo.php?idsite="+c.data.piwikId}" alt="" /></p>`}</noscript>
         
        <Script id="test-script" src="https://tools.contrib.com/js/test.js"></Script>
        */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
