/* eslint-disable react/prop-types */
function Button(props) {
  return <button onClick={props.action}>{props.content}</button>;
}

export default Button;