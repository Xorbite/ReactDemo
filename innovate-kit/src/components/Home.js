import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from '../functions/useFetch';

const Home = () => {

    // Here we are destructuring the object that is returned from the useFetch function. We are getting the externalData, isPending, and error state values from the object that is returned from the useFetch function.
    // We are reffering to the externalData as "blogs" to make it more readable. We are then using the isPending and error state values to display a loading message and an error message respectively. The parameter in the useFetch function is the URL of the API that we want to fetch data from.
    const { externalData: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // // If a blog post is deleted, we can use the handleDelete function to delete the blog post. We can use the filter method to filter out the blog post that we want to delete. The id is passed in as an argument to the handleDelete function. 
    // // And if the id of the blog post matches the id of the blog post that we want to delete, we can filter out the blog post that we want to delete.
    // const handleDelete = (id) => { 
    //     // We can use the filter method to filter out the items that we want to keep. The filter method returns a new array with the items that pass the condition. The filter method does not change the original array. It doesn't mutate the original array.
    //     // We are filtering out the blog items with each "blog" that do not have the same id as the one we are deleting. We are then setting the new array to the setBlogs function to update the state value.
    //     const newBlogs = blogs.filter(blog => blog.id !== id);

    //     // We are updating the state value of the blogs array with the newBlogs array. We are setting the newBlogs array to the setBlogs function to update the state value.
    //     setData(newBlogs);
    // }


    return ( 
        <div className="home">
            <h1>Welcome to Innovate Kit</h1>
            
            
            { isPending && <div>Loading...</div>}
            {/* The error message is displayed if there is an error in fetching the data from the API. The error message is displayed if the error state value is not null. */}
            { error && <div>{ error }</div> }
            {/* To use the data within the BlogList component, we can use props to be able to easily manipulate them and make the data more reusable. Props is a way to pass data from one component to another or child component*/}
            {/* We can pass in a title with "title='All Blogs'" by just adding this behind "{blogs}"*/}
            {/* The "blogs=" property can be called whatever, the value is a dynamic value which is the actual blogs prop from the useState function */}
            {/* Conditional templating in React. The logical and evaluates the left first, if it is false it never bothers with the rights and therefore it doesn't output anything */}
            { blogs && <BlogList blogs={blogs}/>}
            {/* We can reuse the prop like below */}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Yaz')} title="Test"/>  */}

        </div>
    );
}

export default Home;