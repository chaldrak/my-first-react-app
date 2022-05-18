export default function Button(props) {
  return (
    <button className="button" type="button" style={props.theme}>
      {props.title}
    </button>
  );
}