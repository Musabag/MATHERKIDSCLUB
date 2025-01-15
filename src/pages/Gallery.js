import React from 'react';

const Gallery = () => {
    const images = [
        { src: '/assets/gallery1.jpg', alt: 'Kids enjoying arts and crafts' },
        { src: '/assets/gallery2.jpg', alt: 'Outdoor playtime' },
        { src: '/assets/gallery3.jpg', alt: 'Music class' },
        { src: '/assets/gallery4.jpg', alt: 'STEM workshop' },
    ];

    return (
        <main>
            <h1>Gallery</h1>
            <div className="gallery">
                { images.map((image, index) => (
                    <div key={ index } className="gallery-item">
                        <img src={ image.src } alt={ image.alt } />
                    </div>
                )) }
            </div>
        </main>
    );
};

export default Gallery;
