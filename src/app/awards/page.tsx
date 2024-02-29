import React from 'react';
import { useSession } from 'next-auth/react';

interface Award {
    title: string;
    description: string;
    date: string;
}

const Awards: React.FC = () => {
    const awards: Award[] = [
        {
            title: 'Best Employee of the Year',
            description: 'Recognizing outstanding performance and dedication',
            date: '2022-01-01',
        },
        {
            title: 'Innovation Award',
            description: 'For introducing groundbreaking ideas and solutions',
            date: '2022-02-15',
        },
        // Add more awards as needed
    ];

   

    return (
        <>

            <div>
                <h1>Awards</h1>
                {awards.map((award, index) => (
                    <div key={index}>
                        <h2>{award.title}</h2>
                        <p>{award.description}</p>
                        <p>Date: {award.date}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Awards;