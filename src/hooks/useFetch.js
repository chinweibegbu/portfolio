import { useState, useEffect } from "react";

const useFetch = (fileName) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("data/" + fileName)
            // Convert fetched Response to JSON
            .then((res) => res.json())
            // Use the useState hook function to set the data
            .then((data) => {
                setData(data);
            });
    }, [fileName]);

    return [data];
};

export default useFetch;