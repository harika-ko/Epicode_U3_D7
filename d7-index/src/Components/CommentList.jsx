import SingleComment from "./SingleComment";


const CommentList = ({ commentArray }) => {
    return (
        <div>
            {commentArray && commentArray.length > 0 && commentArray.map(comment =>
                < SingleComment commentData={comment} />)}
        </div>

    )
}


export default CommentList