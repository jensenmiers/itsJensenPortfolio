import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Software Development",
    icon: "bi bi-phone",
    desc: "We transform your vision into efficient software solutions. Our dedicated team crafts seamless applications tailored for robust performance and usability, ensuring your technology propels you ahead of your competition.",
  },
  {
    id: 2,
    name: "Business Analysis",
    icon: "bi bi-laptop",
    desc: "What you measure matters. Steer your business and unlock its best with innovative fresh eyes. We dive deep into your operations to streamline, identify growth, and drive decision-making that builds sustainable success.",
  },
  {
    id: 3,
    name: "Project Management",
    icon: "bi bi-columns",
    desc: "Navigating big projects and teams can be a nightmare, You can 'plan your work and work your plan' but who's there when tasks inevitably go wrong? Communication is critical. Just hand the reins to our project managers.",
  },
  {
    id: 4,
    name: "Product Design",
    icon: "bi bi-triangle",
    desc: "From concept to deployment, we bring products to life. Our passionate approach melds design aesthetic and functionality, ensuring your product stands out in the marketplace and delivers exceptional performance and user experience.",
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
