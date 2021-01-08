import React from 'react';

const Wrapper = ({children}) => {
    console.log(children)
    const style = {
        border: "2px solid #000",
        padding: "16px"
    }

    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Wrapper;