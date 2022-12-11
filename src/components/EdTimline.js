import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Typography from "@mui/material/Typography";

export const EdTimeline = () => {
    
      return (
        <section className="edtimeline" id="edtimeline">
            <Container>
                <Row>
                    <Col>
                        <div className="edtimeline-bx">
                            <h2>
                                Education Timeline
                            </h2>
                            <p2>I am pursuing B.tech CSE-AIML IIIsem. </p2>

                            <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="text.dark"
                                >
                                current
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector  />
                                <TimelineDot color="primary">
                                    <CodeIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    B.tech CSE-AIML
                                </Typography>
                                <Typography>Lakshmi Narain College of Technology</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                variant="body2"
                                color="text.dark"
                                >
                                86%
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    12th (10+2)
                                </Typography>
                                <Typography>Sarvodaya English Higher Secondary School Lakhnadon (MPBSE)</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="text.dark"
                                >
                                87.4%
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    10th
                                </Typography>
                                <Typography>Sarvodaya English Higher Secondary School Lakhnadon (MPBSE)</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {/* <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                variant="body2"
                                color="text.dark"
                                >
                                10:00 am
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                                </TimelineContent>
                            </TimelineItem> */}
                            </Timeline>

                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
      )
}