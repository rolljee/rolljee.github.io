import ListGroup from "react-bootstrap/ListGroup";

function listGroupItem(props) {
  const redirect = (p) => {
    window.open(p.link, "_blank");
  }

  console.log(props);
  return (
    <ListGroup.Item action onClick={() => redirect(props)} className="m-1">
      <h4 className="font-title">{props.title}</h4>
      <h6 className="font-description">{props.description}</h6>
    </ListGroup.Item>
  );
}

export default listGroupItem;