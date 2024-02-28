import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Play Bookings",
    subtitle: "Web/WordPress",
    image: "assets/img/project-1.jpg",
  },
  {
    id: 2,
    title: "Full Combo Esports",
    subtitle: "Web/WordPress",
    image: "assets/img/project-2.jpg",
  },
  {
    id: 3,
    title: "U.S. National Park Directory",
    subtitle: "Web/WordPress",
    image: "assets/img/project-3.jpg",
  },
  {
    id: 4,
    title: "Enterprise SaaS",
    subtitle: "Web/WordPress",
    image: "assets/img/project-4.jpg",
  },
  {
    id: 5,
    title: "Personal Finance web app",
    subtitle: "Web/WordPress",
    image: "assets/img/project-5.jpg",
  },
  {
    id: 6,
    title: "Marketplace web and mobile client",
    subtitle: "Web/WordPress",
    image: "assets/img/project-6.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
