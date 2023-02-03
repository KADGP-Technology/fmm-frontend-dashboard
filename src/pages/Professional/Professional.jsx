import React from 'react';
import "./Professional.css";


const Professional = () => {
    return (
        <div className="Professional" style={{ overflowY: 'scroll' }}>
            <div className='heading-div2' style={{ height: 100, width: 'auto', backgroundColor: 'black' }}>
                <h3 className='heading-text2' style={{ color: 'white', padding: 35, fontSize: '25px',textAlign:'left' }}>Professional</h3>
            </div>
            <div className='heading-div' style={{ height: 250, width: 'auto', backgroundColor: 'rgba(128,128,128,0.3)', textAlign: 'center' }}>
                <div className='image-head' id='image-head'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoJfj_I545bjYfGDKt9MUQXZaRAdolVYbBg&usqp=CAU" alt=""  />
                </div>
            </div>

        </div>
    );
}

export default Professional;