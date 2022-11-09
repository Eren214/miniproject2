import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  return (
    <Card
      style={{
        width: 180,
        height: 150,
        border: "1px solid rgb(49, 54, 61)",
        color: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Card.Img variant="top" src={item?.image} />
    </Card>
  );
}

export default BasicCard;