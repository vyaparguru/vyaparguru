import './../globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      </body>
    </html>
  );
}
