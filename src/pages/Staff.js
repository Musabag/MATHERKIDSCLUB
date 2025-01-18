import React from 'react';

const staffMembers = [
    {
        name: 'Maria Voicova',
        title: 'Director',
        img: '/assets/staff-maria.jpg',
    },
    {
        name: 'Yusuf Bagci',
        title: 'Teacher',
        img: '/assets/staff-ayse.jpg',
    },
    {
        name: 'Gokhan Bagci',
        title: 'Nutritionist',
        img: '/assets/staff-gokhan.jpg',
    },
    {
        name: 'Cumali Akbas',
        title: 'Activity Coordinator',
        img: '/assets/staff-cumali.jpg',
    },
    {
        name: 'Isa Kurucan',
        title: 'Coach',
        img: '/assets/staff-isa.jpg',
    },
    {
        name: 'Suleyman Akbas',
        title: 'Hairstylist',
        img: '/assets/staff-suleyman.jpg',
    },
    {
        name: 'Rojhat Bagci',
        title: 'Security',
        img: '/assets/staff-rojhat.jpg',
    },
    {
        name: 'Furkan Bagci',
        title: 'Chef',
        img: '/assets/staff-furkan.jpg',
    },
];
const Staff = () => {
    return (
        <main>
            <h1>Meet Our Staff</h1>
            <p>
                Our staff members are experienced and passionate about childcare. Each member of our team is dedicated to the well-being and development of your child.
            </p>
            <div className="staff-list">
                { staffMembers.map((staff, index) => (
                    <div key={ index } className="staff-card">
                        <img
                            src={ staff.img }
                            alt={ staff.name }
                            className="staff-img"
                            onError={ (e) => (e.target.src = '/assets/default-avatar.jpg') }
                        />
                        <h2>{ staff.name }</h2>
                        <p>{ staff.title }</p>
                    </div>
                )) }
            </div>
        </main>
    );
};


export default Staff;
