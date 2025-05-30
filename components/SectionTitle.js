const SectionTitle = ({ heading, subHeading, text }) => {
  return (
    <div className="section-heading">
      <h6>
        <span>{subHeading}</span>
      </h6>
      <h3>
        <span>{heading}</span>
      </h3>
      {text && <p>{text}</p>}
    </div>
  );
};
export default SectionTitle;
