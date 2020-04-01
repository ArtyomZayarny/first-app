import React from 'react';
import useData from '../../hooks/useData';

const AlbumsPage = () => {
    const [albums] = useData
    return (
        <div>
            Albums page
        </div>
    );
};

export default AlbumsPage;