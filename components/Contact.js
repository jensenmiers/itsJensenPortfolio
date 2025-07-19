import { useEffect } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { id: 1, label: "Cell", value: "+1 310 999 8980", icon: "fas fa-phone-alt" },
  {
    id: 2,
    label: "Email",
    value: "hi@itsjensen.com",
    icon: "fas fa-envelope",
  },
  {
    id: 3,
    label: "Address",
    value: (
      <>
        838 N Las Palmas Ave,<br />
        Los Angeles, CA 90038
      </>
    ),
    icon: "fas fa-map-marker-alt",
  },
];

const Contact = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <SectionTitle
          heading={"Let's Chat"}
          subHeading={"Contact"}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-5">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p>{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="contact-form">
              <h6>Schedule a Meeting</h6>
              <p className="lead">
                Book a time that works for you.
              </p>
              {/* Calendly inline widget begin */}
              <div className="calendly-container">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/jensenmiers/new-meeting?hide_gdpr_banner=1" 
                  style={{minWidth: '350px', height: '700px'}}
                ></div>
              </div>
              {/* Calendly inline widget end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
