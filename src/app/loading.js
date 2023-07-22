import React from 'react';
import Image from "next/image";

const loading = () => {
    return (
        <div className='flex justify-center'>
            <Image width={100} height={100} src="spinner.svg" alt="loafing..."/>
        </div>
    );
};

export default loading;
