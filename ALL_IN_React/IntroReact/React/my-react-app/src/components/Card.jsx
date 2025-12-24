function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="profile img" />
      <h1>
        {props.user},{props.age}
      </h1>
      <p>{props.p}</p>
      <button>View profile</button>
    </div>
  );
}
export default Card;
