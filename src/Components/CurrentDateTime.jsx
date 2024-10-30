// CurrentDateTime.js
import React, { useEffect, useState } from 'react';

const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true 
            };
            setDateTime(now.toLocaleString('en-US', options));
        };

        updateDateTime(); // Initial call
        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="current-date-time">
            <p>{dateTime}</p>
        </div>
    );
};

export default CurrentDateTime;
