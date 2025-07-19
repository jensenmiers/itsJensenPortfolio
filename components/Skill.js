import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "JavaScript", icon: "fab fa-js" },
  { id: 2, name: "React", icon: "fab fa-react" },
  { id: 3, name: "Next.js", icon: "fas fa-code-branch"},
  { id: 4, name: "Node.js", icon: "fab fa-node" },
  { id: 5, name: "SQL", icon: "fas fa-database" },
  { id: 6, name: "Webflow", icon: "fas fa-window-maximize" },
];
const experiencesData = [
  {
    id: 1,
    date: "2023 - Present",
    designation: "Data Analyst",
    company: "Perr & Knight Inc, California",
  },
  {
    id: 2,
    date: "2022 - Present",
    designation: "Software Developer",
    company: "Startups & Business Owners",
  },
  {
    id: 3,
    date: "2019 - 2022",
    designation: "Head of Business & Ops",
    company: "Full Combo Gaming, California",
  },
  {
    id: 4,
    date: "2017 - 2019",
    designation: "Business Analyst",
    company: "Cognizant Inc, New York",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <SectionTitle
              heading={"About Me"}
              subHeading={"My Background"}
              text={
                "I design and develop software with my foundational business background. I live and breathe technology & business."
              }
            />

            <div className="skill-box">
              <h3>My Technologies</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-4" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>My Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/jensenavatar.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Chat with me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
