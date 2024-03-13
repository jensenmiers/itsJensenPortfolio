import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Software Development",
    icon: "bi bi-phone",
    desc: "Transforming your vision into efficient software solutions. Our dedicated team crafts seamless applications tailored for robust performance and scalability, ensuring your technology propels you ahead of the curve.",
  },
  {
    id: 2,
    name: "Business Analysis",
    icon: "bi bi-laptop",
    desc: "Unlock the potential of your business with in-depth analysis. We delve into the core of your operations to streamline processes, identify growth opportunities, and drive decision-making that fosters sustainable success.",
  },
  {
    id: 3,
    name: "Project Management",
    icon: "bi bi-columns",
    desc: "Navigating the complexities of stakeholder dynamics, our project management service ensures that every voice is heard and integrated into a seamless plan. With a focus on collaboration and clear communication, we guide your project to success through meticulous oversight and a dedication to meeting your business objectives on time and within budget.",
  },
  {
    id: 4,
    name: "Product Development",
    icon: "bi bi-triangle",
    desc: "From concept to market-ready, we bring products to life. Our innovative approach melds design and functionality, ensuring your offering stands out in the marketplace and delivers exceptional user experiences.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services We Offer"} subHeading={"Services"} />
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
