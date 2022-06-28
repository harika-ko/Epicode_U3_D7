import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {

    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: null
    })

    useEffect(() => {
        setComment(() => ({
            ...comment,
            elementId: asin
        }));
    }, [asin])


    const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTU5ODM0OTksImV4cCI6MTY1NzE5MzA5OX0.FVezzfR-MwArRrxMi8U3lRh44jeNrRDlY6_z6TeJKIw",
                }
            })
            if (response.ok) {
                alert('Added your Comment!')
            } else {
                alert('API Error')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Form onSubmit={sendComment}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment.comment}
                        onChange={e => setComment({
                            ...comment,
                            comment: e.target.value,
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={comment.rate}

                        onChange={e => setComment({
                            ...comment,
                            rate: e.target.value
                        })}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Comment
                </Button>
            </Form>
        </div>
    )

}

export default AddComment