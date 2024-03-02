// components

import Footer from "../components/Footer";
import Header from "../components/HeaderWhite";
import PageChange from "../hooks/PageChange";

const Home = () => {
  return (
    <>
      <PageChange pageTitle="Eminence - Transforming Ideas into Digital Reality" />
      <Header />
      <div>Home</div>
      <Footer />
    </>
  );
};

export default Home;
