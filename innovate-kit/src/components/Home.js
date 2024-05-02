import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // The isPending state value is a boolean value that is used to check if the data is still being fetched from the API. The isPending state value is set to true when the data is still being fetched from the API. The isPending state value is set to false when the data has been fetched from the API.
    const [isPending, setIsPending] = useState(true);

    // We first fetch the data from the API that is connected to the database. We then use the useState hook to store the data that we get from the API. Then we update the state value of blogs.

    // The useState hook is a function that returns an array with two values. The first value is the current state value AKA initial state and the second value is a function that allows us to update the state value. 
    // The useState function takes in the initial state value as an argument. The initial state value can be a string, number, boolean, object, or array. The useState function is a named export from the react package
    const [blogs, setBlogs] = useState(
        // [{ title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 1},
        // { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 2},
        // { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 3 },
        // { title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 4},
        // { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 5},
        // { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 6 }]
        null
    );

    const [error, setError] = useState(null);


    // If a blog post is deleted, we can use the handleDelete function to delete the blog post. We can use the filter method to filter out the blog post that we want to delete. The id is passed in as an argument to the handleDelete function. 
    // And if the id of the blog post matches the id of the blog post that we want to delete, we can filter out the blog post that we want to delete.
    const handleDelete = (id) => { 
        // We can use the filter method to filter out the items that we want to keep. The filter method returns a new array with the items that pass the condition. The filter method does not change the original array. It doesn't mutate the original array.
        // We are filtering out the blog items with each "blog" that do not have the same id as the one we are deleting. We are then setting the new array to the setBlogs function to update the state value.
        const newBlogs = blogs.filter(blog => blog.id !== id);

        // We are updating the state value of the blogs array with the newBlogs array. We are setting the newBlogs array to the setBlogs function to update the state value.
        setBlogs(newBlogs);
    }


    // We can use the useEffect hook to run code when the component renders. The useEffect hook takes in a callback function as an argument.
    // The callback function is the code that we want to run when the component renders. We can use it for example for fetching data from an API, updating the DOM, or even authenticating a user.
    // The useEffect hook takes in a second argument which is an array of dependencies. The array of dependencies is an array of values that the useEffect hook depends on.
    // The empty array of dependencies means that the useEffect hook does not depend on any values. The useEffect hook will only run once when the component renders.
    useEffect(() => {
        // The setTimeout function is to simulate a real-world scenario where the data is being fetched from a server using an API. 
        setTimeout(() => { 
            fetch('http://localhost:8000/blogs')
                // The res parameter is the response from the API. We can use the res parameter to get the data from the API.
                .then(res => {
                    if (!res.ok) {
                        // The passed in data is a JSON object. We can use the json method to convert the data to a JSON object.
                        throw Error('Could not fetch the data for that resource');
                    }

                    return res.json();
                })
                // The data parameter is the data from the API. We can use the data parameter to update the state value of the blogs array.
                // If the data is fetched successfully, we can use the data to update the state value of the blogs array. And update the error state value to null. Otherwise, we update the error state value to show the error message.
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
        // Once this promise is resolved, we can use the data that we get from the API. We can use the data to update the state value of the blogs array.
    }, []);

    return ( 
        <div className="home">
            <h1>Welcome to Innovate Kit</h1>
            
            
            {isPending && <div>Loading...</div>}
            {/* The error message is displayed if there is an error in fetching the data from the API. The error message is displayed if the error state value is not null. */}
            { error && <div>{ error }</div> }
            {/* To use the data within the BlogList component, we can use props to be able to easily manipulate them and make the data more reusable. Props is a way to pass data from one component to another or child component*/}
            {/* We can pass in a title with "title='All Blogs'" by just adding this behind "{blogs}"*/}
            {/* The "blogs=" property can be called whatever, the value is a dynamic value which is the actual blogs prop from the useState function */}
            {/* Conditional templating in React. The logical and evaluates the left first, if it is false it never bothers with the rights and therefore it doesn't output anything */}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
            {/* We can reuse the prop like below */}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Yaz')} title="Test"/>  */}

        </div>
    );
}

export default Home;