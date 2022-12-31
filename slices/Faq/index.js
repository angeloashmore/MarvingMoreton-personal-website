import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PrismicRichText, PrismicText, PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import classes from './Faq.module.css';
/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param { FaqProps }
 */
export default function Faq({ slice }) {
    return (
        <section className={classes['section-faq']}>
            <PrismicRichText
                field={slice.primary.title}
                components={{
                    heading2: ({ children }) => (
                        <h2 className="heading-secondary">{children}</h2>
                    )
                }}
            />
            <div className={classes['questions-grid']}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.question}>
                            {slice.primary.question_1}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.answer}>
                            {slice.primary.answer_1}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.question}>
                            {slice.primary.question_2}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.answer}>
                            {slice.primary.answer_2}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.question}>
                            {slice.primary.question_3}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.answer}>
                            {slice.primary.answer_3}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {slice.primary.question_4 && (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography className={classes.question}>
                                {slice.primary.question_4}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                {slice.primary.answer_4}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}

                {slice.primary.question_5.length > 0 && (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                        >
                            <Typography className={classes.question}>
                                {slice.primary.question_5}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                <PrismicRichText
                                    field={slice.primary.answer_5}
                                />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
        </section>
    );
}
