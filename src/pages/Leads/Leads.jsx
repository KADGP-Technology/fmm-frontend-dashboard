import React from 'react';
import "./Leads.css";
import Table from '../../components/Table/Table';

const Leads = () => {
    return (
        <div className="Leads" style={{ overflowY: 'scroll' }}>
            <h1 style={{ textAlign: 'center' }}>Business Leads</h1>
            <div className='heading-div' style={{ height: 150, width: 'auto', backgroundColor: 'black', borderRadius: 20, textAlign: 'center' }}>
                <h3 className='heading-text' style={{ color: 'white', padding: 60, }}>People Looking for MUA</h3>
            </div>



            <div className='table-container'>
                <Table />
            </div>
        </div>
    );
}

export default Leads;