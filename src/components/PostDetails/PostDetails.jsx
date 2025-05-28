import {  useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate =useNavigate();


    const {id,title,body } = post;
    console.log(title);

    console.log(postId);

    const handleGoBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Id: {id}  Post Details</h2>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;