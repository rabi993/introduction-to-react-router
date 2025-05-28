import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const postStyle ={
        border: '2px solid purple',
        padding: '5px',
        borderRadius:'20px'
    }
    const handleShowDetail =()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>title: {title}</p>
            <Link to={`/post/${id}`}><button> click for Body</button></Link>
            <button onClick={handleShowDetail}>Clic to see details</button>
            
        </div>
    );
};

export default Post;