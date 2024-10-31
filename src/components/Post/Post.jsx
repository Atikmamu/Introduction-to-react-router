import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px',

    }


    const handleShowDetails = () => {
           navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h1>id: {id}</h1>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;