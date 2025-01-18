import React from 'react';

const activities = [
    {
        title: 'STEM Workshop',
        description: 'Explore science, technology, engineering, and math through fun activities.',
        video: '/assets/videos/stem-workshop.mp4',
    },
    {
        title: 'Art and Craft',
        description: 'Unleash your creativity with our guided art and craft sessions.',
        video: '/assets/videos/art-and-craft.mp4',
    },
    {
        title: 'Outdoor Adventures',
        description: 'Enjoy the outdoors with safe and exciting adventures.',
        video: '/assets/videos/outdoor-adventures.mp4',
    },
];

const Activities = () => {
    return (
        <main>
            <h1>Our Activities</h1>
            <p>
                We offer a variety of engaging activities designed to promote learning and fun for all ages. Watch
                the videos below to get a glimpse of what we do.
            </p>
            <div className="activities-list">
                { activities.map((activity, index) => (
                    <div key={ index } className="activity-card">
                        <h2>{ activity.title }</h2>
                        <p>{ activity.description }</p>
                        <video controls className="activity-video">
                            <source src={ activity.video } type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                )) }
            </div>
        </main>
    );
};

export default Activities;

