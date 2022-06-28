import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap"
import CommentArea from "./CommentArea";


const BookList = ({ books }) => {
    return (

        <Container>
            <Row>
                {
                    books.slice(0, 12).map((currentBook) => (
                        <Col key={currentBook.asin}>
                            <SingleBook book={currentBook} />
                        </Col>
                    ))
                }
            </Row>
        </Container>

    )
}


export default BookList