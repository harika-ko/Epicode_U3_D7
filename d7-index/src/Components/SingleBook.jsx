import { useState } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"


const SingleBook = ({ book }) => {

    /* state = {
         selected: false
     }*/

    const [selected, setSelected] = useState(false)


    return (
        <div>
            <Card onClick={() => setSelected(!selected)}
                key={book.asin} style={{ backgroundColor: selected ? "grey" : "white" }}>
                <Card.Img className="single-image" src={book.img} style={{ width: "250px", height: "25vw" }} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    {selected && <CommentArea asin={book.asin} />}

                </Card.Body>

            </Card>
        </div>
    );

}

export default SingleBook