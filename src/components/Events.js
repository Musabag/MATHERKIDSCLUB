import React from 'react';

const Events = () => {
    const events = [
        {
            title: "Summer Fun Day",
            date: "July 15, 2025",
            description: "A day full of fun outdoor activities for kids and families.",
        },
        {
            title: "Art and Craft Workshop",
            date: "August 10, 2025",
            description: "Let your creativity flow in our interactive art workshop.",
        },
        {
            title: "Back-to-School Party",
            date: "September 1, 2025",
            description: "Celebrate the start of a new school year with music, games, and more!",
        },
    ];

    return (
        <main>
            <h1>Upcoming Events</h1>
            <ul>
                { events.map((event, index) => (
                    <li key={ index }>
                        <h2>{ event.title }</h2>
                        <p><strong>Date:</strong> { event.date }</p>
                        <p>{ event.description }</p>
                    </li>
                )) }
            </ul>
        </main>
    );
};

export default Events;
