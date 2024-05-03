import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../functions/useFetch";

const BlogDetails = () => {

    // The useParams hook is used to access the parameters from the URL. The useParams hook is a named export from the react-router-dom library.
    // The useParams hook returns an object that contains the key/value pairs of the URL parameters. The key is the name of the parameter and the value is the value of the parameter.
    // We are passing in the id of the blog post from the URL to the BlogDetails component. We are then using the useParams hook to get the id of the blog post.
    const { id } = useParams();
    // Here we are destructuring the object that is returned from the useFetch function. We are getting the data, error, and isPending state values from the object that is returned from the useFetch function.
    // We are basically grabbing the data, error, and isPending state values from the object that is returned from the useFetch function. We are then using the data, error, and isPending state values to display the blog post details.
    const { externalData: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        // The fetch function takes in the URL of the API and an object with the method of the request. The method of the request is set to DELETE to delete the blog post.
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            navigate('/');
        })
    }


    return ( 
        // The Blog Details component is used to display the details of a single blog post. The Blog Details component receives the blog id from the URL using the useParams hook.
        <div className="blog-details">
            {/* The isPending state value is used to display a loading message while the data is being fetched from the API. The loading message is displayed if the isPending state value is true. */}
            {/* Basically this is gonna show the loading message if the data is still being fetched from the API. If it's true then show 'Loading...' */}
            { isPending && <div>Loading...</div>}
            {/* The error message is displayed if there is an error in fetching the data from the API. The error message is displayed if the error state value is not null. */}
            { error && <div>{ error }</div> } 
            {/* The blog post details are displayed if the blog post is fetched successfully. The blog post details are displayed if the blog state value is not null. */}
            {/* If the blog is fetched, then show the correspondent data */}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.content}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;