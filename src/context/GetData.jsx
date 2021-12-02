import { createContext, useEffect, useState } from 'react';

const GetData = createContext();

const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(async () => {
        const images = await fetch(
            'https://jsonplaceholder.typicode.com/photos'
        );
        const cleanImages = await images.json();

        setImages(cleanImages);
        setLoading(false);
    }, []);

    return (
        <GetData.Provider value={[images, loading]}>
            {children}
        </GetData.Provider>
    );
};

export { GetData, Provider };
