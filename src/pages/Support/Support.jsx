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
                <h1 style={{textAlign:'center'}}>Support</h1>
                <div className='heading-div' style={{ height: 150, width: 'auto', backgroundColor: 'black', borderRadius: 20, textAlign: 'center' }}>
                    <h3 className='heading-text' style={{ color: 'white', padding: 60, }}>Frequently Asked Questions</h3>
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