import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
        console.log('useEffect Called')
    }, []);

    return (
        <div>
            <h1>Basic Effect</h1>
        </div>
    )
}

export default BasicEffect