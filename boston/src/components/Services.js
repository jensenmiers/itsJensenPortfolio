import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Software Development",
    icon: "bi bi-phone",
    desc: "I turn ideas into top-notch software. I build smooth, high-performing apps that put you ahead of competititors.",
  },
  {
    id: 2,
    name: "Project Management",
    icon: "bi bi-laptop",
    desc: "I steer complex projects to success, managing challenges with strategic planning and clear communication.",
  },
  {
    id: 3,
    name: "Technology Sourcing",
    icon: "bi bi-columns",
    desc: "I help find the perfect software solution, leveraging research to enhance your business with market-leading tech.",
  },
  {
    id: 4,
    name: "Business Analysis",
    icon: "bi bi-triangle",
    desc: "I delve deep to uncover and refine your business's core, enhancing efficiency and spotlighting growth opportunities.",
  },
  {
    id: 5,
    name: "Customer Acquisition",
    icon: "bi bi-money",
    desc: "I maximize acquisition ROI, using targeted digital strategies to lower costs and engage your ideal audience.",
  },
  {
    id: 6,
    name: "Product Design",
    icon: "bi bi-money",
    desc: "I realize your vision from concept to launch, merging aesthetic with functionality.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
