import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
function ProductCard(props) {
  const navigate = useNavigate()
  const { 
    id,
  color,
  department,
  productName,
  price,
  productAdjective,
  productMaterial,
  product,
  image} = props
  return (
    <Card style={{ width: '18rem',margin:"10px "}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/product/${id}`)}>Voir Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;