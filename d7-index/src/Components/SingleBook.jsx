import { useState } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"


const SingleBook = ({ book }) => {

    /* state = {
         selected: false
     }*/

    const [selected, setSelected] = useState(false)


    return (
        <div>
            <Card >
                <Card.Img onClick={() => setSelected(!selected)}
                    key={book.asin}
                    className="single-image" src={book.img} style={{ width: "250px", height: "25vw" }} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    {selected && <CommentArea asin={book.asin} />}

                </Card.Body>

            </Card>
        </div>
    );

}

export default SingleBook