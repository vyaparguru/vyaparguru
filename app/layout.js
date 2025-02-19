import './../globals.css';
import Navbar from '../components/NavigationBar/Navbar';
import Footer from '../components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

export const metadata = {
  title: "Vyapar Guru Infotech Pvt Ltd",
  description: "Vyapar Guru Infotech Pvt Ltd",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vyapar Guru Infotech</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1PLTZ7K4XW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1PLTZ7K4XW');
            `,
          }}
        />
      </head>
      <body>
        <Navbar /> 
        <main>{children}</main> 
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  );
}
