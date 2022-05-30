import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) { 
  return (
    <>
      <Head>
      
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <>
        {props.children}
      </>
      <Footer />
    </>
  );
}
