import { useState, useEffect } from 'react';

// We are making a separate file for the useFetch function to make the code more modular and reusable. We can use the useFetch function in any component that needs to fetch data from an API.

const useFetch = (url) => { 

    // The isPending state value is a boolean value that is used to check if the data is still being fetched from the API. The isPending state value is set to true when the data is still being fetched from the API. The isPending state value is set to false when the data has been fetched from the API.
    const [isPending, setIsPending] = useState(true);

    // We first fetch the data from the API that is connected to the database. We then use the useState hook to store the data that we get from the API. Then we update the state value of blogs.

    // The useState hook is a function that returns an array with two values. The first value is the current state value AKA initial state and the second value is a function that allows us to update the state value. 
    // The useState function takes in the initial state value as an argument. The initial state value can be a string, number, boolean, object, or array. The useState function is a named export from the react package
    const [externalData, setData] = useState(
        // [{ title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 1},
        // { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 2},
        // { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 3 },
        // { title: 'My new website', body: 'Welcome to my new website!', author: 'Yaz', id: 4},
        // { title: 'Welcome party!', body: 'You are all invited to my welcome party!', author: 'Joey', id: 5},
        // { title: 'My new job', body: 'I have a new job at Innovate Kit!', author: 'Naomi', id: 6 }]
        null
    );

    const [error, setError] = useState(null);

    // We can use the useEffect hook to run code when the component renders. The useEffect hook takes in a callback function as an argument.
    // The callback function is the code that we want to run when the component renders. We can use it for example for fetching data from an API, updating the DOM, or even authenticating a user.
    // The useEffect hook takes in a second argument which is an array of dependencies. The array of dependencies is an array of values that the useEffect hook depends on.
    // The empty array of dependencies means that the useEffect hook does not depend on any values. The useEffect hook will only run once when the component renders.
    useEffect(() => {
        
        const controller = new AbortController();
        const signal = controller.signal;

        // The isCancelled variable is a boolean value that is used to check if the fetch request has been cancelled. The isCancelled variable is set to false when the fetch request is not cancelled. The isCancelled variable is set to true when the fetch request is cancelled.
        let isCancelled = false;

        // The setTimeout function is to simulate a real-world scenario where the data is being fetched from a server using an API. 
        setTimeout(() => { 
            // The signal property is used to pass in the abortController.signal to the fetch function. The abortController.signal is used to abort the fetch request if the component unmounts. 
            // When a page is switched, the fetch request is aborted.
            fetch(url, { signal: signal })
                // The res parameter is the response from the API. We can use the res parameter to get the data from the API.
                .then(res => {
                    if (!res.ok) {
                        // The passed in data is a JSON object. We can use the json method to convert the data to a JSON object.
                        throw Error('Could not fetch the data for that resource');
                    }

                    return res.json();
                })
                // The data parameter is the data from the API. We can use the data parameter to update the state value of the blogs array.
            // If the data is fetched successfully, we can use the data to update the state value of the blogs array. And update the error state value to null. 
            // Otherwise, we update the error state value to show the error message.
                .then(data => {

                    // We are checking if the fetch request has been cancelled. If the fetch request has been cancelled, we do not update the state value of the blogs array. 
                    // Otherwise we update the state value of the blogs array.
                    // if (!isCancelled) { 
                        setData(data);
                        // alert("The posts are being fetched from the API");
                        setIsPending(false);
                        setError(null);
                    // }
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    }
                    setIsPending(false);
                    // setError(err.message);
                });
        }, 1000);

        // The return statement is used to clean up the useEffect hook. The return statement is a function that is called when the component unmounts.
        // For example when the component is removed from the DOM. Like switching to another page.
        return () => { 
            controller.abort();
            // isCancelled = true;
        } 


    // This dependency array is used to tell React to run the useEffect hook when the url changes. The useEffect hook will run when the url changes.
    }, [url]);

    // Here we are encapsulating the externalData, isPending, and error state values in an object. We are then returning the object from the useFetch function.
    // This is important because we can then destructure the object in any component in the future to get the externalData, isPending, and error state values.
    // If we had more state values, we could add them to the object and return the object from the useFetch function.
    return { externalData, isPending, error };
}

export default useFetch;