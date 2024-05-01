import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    // The useState hook is a function that returns an array with two values. The first value is the current state value AKA initial state and the second value is a function that allows us to update the state value. 
    // The useState function takes in the initial state value as an argument. The initial state value can be a string, number, boolean, object, or array. The useState function is a named export from the react package
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 1},
        { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 2},
        { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 3 },
        { title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 4},
        { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 5},
        { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 6 }
    ]);

    // If a blog post is deleted, we can use the handleDelete function to delete the blog post. We can use the filter method to filter out the blog post that we want to delete. The id is passed in as an argument to the handleDelete function. 
    // And if the id of the blog post matches the id of the blog post that we want to delete, we can filter out the blog post that we want to delete.
    const handleDelete = (id) => { 
        // We can use the filter method to filter out the items that we want to keep. The filter method returns a new array with the items that pass the condition. The filter method does not change the original array. It doesn't mutate the original array.
        // We are filtering out the blog items with each "blog" that do not have the same id as the one we are deleting. We are then setting the new array to the setBlogs function to update the state value.
        const newBlogs = blogs.filter(blog => blog.id !== id);

        // We are updating the state value of the blogs array with the newBlogs array. We are setting the newBlogs array to the setBlogs function to update the state value.
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <h1>Welcome to Innovate Kit</h1>
            
            {/* To use the data within the BlogList component, we can use props to be able to easily manipulate them and make the data more reusable. Props is a way to pass data from one component to another or child component*/}
            {/* We can pass in a title with "title='All Blogs'" by just adding this behind "{blogs}"*/}
            {/* The "blogs=" property can be called whatever, the value is a dynamic value which is the actual blogs prop from the useState function */}
            <BlogList blogs={blogs} handleDelete={ handleDelete } /> 
            {/* We can reuse the prop like below */}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Yaz')} title="Test"/>  */}

        </div>
    );
}

export default Home;