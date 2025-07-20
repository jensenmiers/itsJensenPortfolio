import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
// import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
// import Testimonial from "@/src/components/Testimonial";
import ImageView from "@/components/popup/ImageView";
import { Analytics } from "@vercel/analytics/react";
import { boston } from "@/src/utils";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
  }, []);

  return (
    <Fragment>
      <Analytics />
      <ImageView />
      {/* End */}
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        <Home />
        {/* End Home Section */}
        {/* Portfolio Section - Commented out for future use */}
        {/* <Portfolio /> */}
        {/* End Portfolio Section */}
        {/* Skill Section */}
        <Skill />
        {/* End Skill Section */}
        {/* Work Section */}
        <Services />
        {/* End Work Section */}
        {/* testimonial Section */}
        {/* <Testimonial /> */}
        {/* End testimonial Section */}
        {/* Contact Section */}
        <Contact />
        {/* End Contact Section */}
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </Fragment>
  );
};
export default Index;
