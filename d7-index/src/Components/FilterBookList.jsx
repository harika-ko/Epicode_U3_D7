import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

const FilterBookList = ({ book }) => {

    const [searchQuery, setSearchQuery] = useState(" ")


    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label className="text-light">Search</Form.Label>
                        <Form.Control type="text" placeholder="Search here"
                            value={searchQuery} onChange={
                                e => setSearchQuery(e.target.value)
                            } />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                {
                    book.filter(selectedBook => selectedBook.title.toLowerCase().includes(searchQuery)).map(selectedBook => (
                        <Col key={selectedBook.asin}>
                            <SingleBook book={selectedBook} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default FilterBookList