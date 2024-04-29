import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "./(frontend)/components/Header";
import Footer from "./(frontend)/components/Footer";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ModalPopup from './(frontend)/components/ModalPopup';
import ModalRequest from './(frontend)/components/ModalRequest';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'], })

export const metadata = {
  title: "Web & Mobile Apps Development | Software | AR/VR Development",
  keywords: "software development, mobile app development, AEM developers, website design and development company, ecommerce development, mobile app development company, website designing",
  description: "Infoicon Technologies is a leading software development company, offering web, mobile apps, Java, ar/vr development & related IT services to worldwide customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/stylesheet.css" rel="stylesheet" />
        <link href="/assets/css/contact.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </head>

      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        <ModalPopup />
        <ModalRequest />
      </body>
    </html>
  );
}
