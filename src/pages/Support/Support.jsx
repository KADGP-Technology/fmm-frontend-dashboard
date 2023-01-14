import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Support.css'
import {
    UilFocusAdd

    // UilSignOutAlt,
} from "@iconscout/react-unicons";


export default function Support() {
    return (
        <div style={{overflowY:'scroll'}}>
            <div className="Leads" style={{ overflowY: 'scroll' }}>
            <div className='heading-div' style={{ height: 100, width: 'auto', backgroundColor: 'black', textAlign: 'center' }}>
                        <h3 className='heading-text' style={{ color: 'white', padding: 35,float:'left',fontSize:'25px' }}>Membership</h3>
                    </div>
                <div className='heading-div2' style={{ height: 150, width: 'auto', backgroundColor: 'rgba(128,128,128,0.3)', textAlign: 'center' }}>
                    <h3 className='heading-text2' style={{ color: 'black', padding: 60, }}>Frequently Asked Questions</h3>
                </div>
            </div>
            <div style={{ marginTop: 50 }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<  UilFocusAdd />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, corporis.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<UilFocusAdd />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Q: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, harum.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<UilFocusAdd />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<UilFocusAdd />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<UilFocusAdd />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<UilFocusAdd />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );

}