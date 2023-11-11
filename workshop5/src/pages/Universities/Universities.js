import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import University from '../../components/University';


const Universities = () => {

    const [universities, setUniversities] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?country=Georgia")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("error")
            })

            .then((data) => {
                setUniversities(data);
                console.log(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (error) {
        return (
            <div>
                <h1>Oops... There is a problem</h1>
            </div>
        )
    }
    return (
        <div className='unisContainer'>

            {isLoading && <FadeLoader />}

            {universities.map(item =>
                <University data={item} key={item.name} />
            )}

        </div>
    );
};

export default Universities;