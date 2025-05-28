import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body } = post;
    console.log(title);
    return (
        <div>
            <h2>Id: {id}  Post Details</h2>
            <h4>Title: {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;