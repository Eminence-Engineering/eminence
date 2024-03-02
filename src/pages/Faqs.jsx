// components
import PageChange from "../hooks/PageChange";

// images
import bgFaq from "../assets/images/bg-faq.png";
import Header from "../components/Header";

const Faqs = () => {
  return (
    <div className="lg:pt-7 flex flex-col min-h-screen">
      <PageChange pageTitle="FAQs | Eminence" />
      <Header />
      <main className="container p-5 flex-1 flex flex-col items-center justify-center gap-16 md:gap-24">
        <img src={bgFaq} alt="" />
        <h2 className="font-semibold text-3xl md:text-6xl">
          We Are Coming Soon
        </h2>
      </main>
    </div>
  );
};

export default Faqs;
