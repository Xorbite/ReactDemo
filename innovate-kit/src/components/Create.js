import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {


    // Here we are creating the state values for the title, content, and author of the blog post. We are using the useState hook to create the state values. 
    // So we can update the state values of the title, content, and author of the blog post.
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Yaz');
    const [isPending, setIsPending] = useState(false);

    // The useHistory hook is used to access the history object. With the history object, we can navigate to different pages in the application.
    const navigate = useNavigate();

    // We are taking the event object as a parameter in the handleSubmit function. The event object is passed to the handleSubmit function when the form is submitted.
    const handleSubmit = (e) => { 
        e.preventDefault();

        // We are creating a blog object with the title, content, and author of the blog post. The blog object is created when the form is submitted.
        const blog = { title, content, author };
        
        setIsPending(true);

        // We are sending a POST request to the API with the blog object. The blog object is sent to the API when the form is submitted.
        // The fetch function takes in the URL of the API and an object with the method, headers, and body of the request. 
        // The body of the request is the blog object that we want to send to the API. We stringify the blog object to convert it to a JSON string.
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            
            // We are using the history object to navigate to the home page after the blog post is added. We are using the push method to navigate to the home page.
            navigate('/');
        }).catch(error => {
            console.error('Failed to add the blog:', error);
            setIsPending(false);
        })


        
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-items">
                    <label>Blog Title:</label>
                    <input
                        type="text"
                        required
                        // We are binding the value of the input field to the title state value. The value of the input field is set to the title state value.
                        // The value of the input field is updated when the title state value is updated.
                        // The event object is passed to the setTitle function when the input field value is changed. The event object contains the value of the input field.
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-items">
                    <label>Blog Content:</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>                
                <div className="form-items">
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Yaz">Yaz</option>
                    <option value="Mark">Mark</option>
                    <option value="Naomi">Naomi</option>
                </select>
                </div>   
                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{author}</p>
            </form>    
        </div>
    );
}
 
export default Create;