import React from 'react';

import { AiOutlineLoading } from 'react-icons/ai'; // Import AiOutlineLoading icon



const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="flex flex-col items-center">
                <AiOutlineLoading className="w-24 h-24 mb-4 text-white" /> {/* Use the imported icon */}
                <p className="text-white">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
