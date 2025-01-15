import React from 'react';

const testimonials = [
    {
        name: 'Sarah J.',
        text: 'MatherKidsClub has been amazing for my child! They love the activities and the staff is so caring.',
    },
    {
        name: 'Michael R.',
        text: 'A wonderful place with great programs for kids. My son especially enjoys the STEM workshops.',
    },
    {
        name: 'Emily P.',
        text: 'I highly recommend MatherKidsClub. They provide a safe and engaging environment for kids.',
    },
];

const Home = () => {
    return (
        <main>
            <h1>Welcome to MatherKidsClub</h1>
            <p>Your child’s safety, growth, and happiness are our priorities.</p>

            <section className="testimonials">
                <h2>What Parents Are Saying</h2>
                { testimonials.map((testimonial, index) => (
                    <blockquote key={ index }>
                        <p>“{ testimonial.text }”</p>
                        <cite>— { testimonial.name }</cite>
                    </blockquote>
                )) }
            </section>
        </main>
    );
};

export default Home;
