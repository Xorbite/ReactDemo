// We receive the passed in data using "props" parameter from the parent component and then we can use it in the child component. We can then use the data to display the blog posts in the BlogList component.
// The "props" parameter is an object that contains all the properties passed to the component. If we want to pass specific data to be received, we can specfy which data we want to access by using the names instead of the whole "props" object itself.

const BlogList = ({blogs, title }) => {


    // We use those in case if we are calling the whole props object directly in the component.
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
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
    );
}

export default BlogList;