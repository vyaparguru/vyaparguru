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
