const freelancerIcon =
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const companyIcon = "https://cdn-icons-png.flaticon.com/512/3071/3071154.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <div>
          {props.available === true ? <button>Available</button> : null}
        </div>
        <p>{props.rate}</p>
      </div>
      <div className="center">
        <img className="userImg" src={props.profileImg} alt="" />
        <h3>{props.name}</h3>
        <h5>{props.profession}</h5>
        <div className="center-work">
          <img
            className="icon"
            src={props.company === "Freelancer" ? freelancerIcon : companyIcon}
            alt="img"
          />
          <span>{props.company}</span>
        </div>
        <div className="skills">
          {props.skills.map(function (elem) {
            return <button className="skills-btn">{elem}</button>;
          })}
        </div>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <p>VIEW PROFILE</p>
      </div>
    </div>
  );
};
export default Card;
