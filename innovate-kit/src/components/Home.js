import { useState } from 'react';

const Home = () => {

    // The useState hook is a function that returns an array with two values. The first value is the current state value and the second value is a function that allows us to update the state value. 
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
            <div className="blogs-container">
                {/* The curly braces are for injecting javascript code like below */}
                {/* What we are doing below is mapping the array of the blogs and calling the individual items through the mapped array. The "blog" value is the data from the array items as a whole. React requires a key!*/}
                { blogs.map((blog) => (
                    // The key is a unique value that is used to identify each item in the array.
                    // The key value should be unique for each item in the array. The key value is used by React to keep track of the items in the array and to update the items in the array efficiently.
                    <div className="blogs-items">
                        <div className="blog-card" key={blog.id}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className='add-btn' onClick={handleClick}>Add</button>
        </div>
    );
}

export default Home;