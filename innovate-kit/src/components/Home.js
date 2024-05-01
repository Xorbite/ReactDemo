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

    const handleClick = () => { 

    }

    return ( 
        <div className="home">
            <h1>Welcome to Innovate Kit</h1>
            
            {/* To use the data within the BlogList component, we can use props to be able to easily manipulate them and make the data more reusable. Props is a way to pass data from one component to another or child component*/}
            {/* We can pass in a title with "title='All Blogs'" by just adding this behind "{blogs}"*/}
            {/* The "blogs=" property can be called whatever, the value is a dynamic value which is the actual blogs prop from the useState function */}
            <BlogList blogs={blogs} /> 

            <button className='add-btn' onClick={handleClick}>Add</button>
        </div>
    );
}

export default Home;