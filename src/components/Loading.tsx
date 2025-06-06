import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
    );
};

export default Loading; 