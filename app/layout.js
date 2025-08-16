import './../globals.css';
import Navbar from '../components/NavigationBar/Navbar';
import Footer from '../components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import Script from 'next/script';

export const metadata = {
  title: "Vyapar Guru Infotech Pvt Ltd",
  description: "Vyapar Guru Infotech Pvt Ltd",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1PLTZ7K4XW"/>        
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1PLTZ7K4XW');
            `,
          }}
        />
        <Navbar /> 
        <main>{children}</main> 
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  );
}
