const Button = (props) => {
  return (
    <div>
      {props.children} // this will show count value // this will show button
      and we acces count text and button from parant element
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};
export default Button;
