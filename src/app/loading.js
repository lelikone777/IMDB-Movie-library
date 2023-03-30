import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center'>
            <img style={{maxWidth: '40px'}} className='h-96' src="spinner.svg" alt="loafing..."/>
        </div>
    );
};

export default loading;
