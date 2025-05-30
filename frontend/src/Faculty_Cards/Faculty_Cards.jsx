import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import requestAnimation from '../assets/lotties/submit-request.json';
import requestAdmin from "../assets/lotties/request-admin.json";
import viewrequest from "../assets/lotties/view-request.json";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Faculty_Cards(props) {
    const handleRequest4Admin = () => {
        props.handleadminRequest();
    };

    const handleRequest4Faculty = () => {
        props.handlefacultyRequest();
    };

    const handleviewRequest = () => {
        props.handleviewRequest();
    };

    return (
        <div style={{ width: "100%", display: 'flex', flexDirection: "row", alignItems: "center", marginTop: "50px", paddingBottom: "100px" }}>
            <Card sx={{ minWidth: 300, minHeight: 500, margin: "0 auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                <CardMedia style={{ width: '400px', height: '300px', display: "flex", alignItems: "center" }}>
                    <Player
                        autoplay
                        loop
                        src={requestAdmin}
                        style={{ height: '300px', width: '300px' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Request Admin<br />for a Exam Reschedule
                    </Typography>
                    <Typography sx={{ fontSize: "17px" }} component="div">
                        In case you are not comfortable with any<br /> of the Exam Fixtures You can Request<br />the admin to reschedule the exam to different<br /> hall, faculty or timings.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: "row-reverse", alignContent: "flex-end" }}>
                    <Button onClick={handleRequest4Admin} sx={{ color: "#A82121", fontSize: "15px", fontWeight: "bold", ":hover": { backgroundColor: "#A82121", color: "white" } }}>Request Admin&nbsp; <ArrowForwardIcon color='#A82121' /></Button>
                </CardActions>
            </Card>

            <Card sx={{ minWidth: 300, minHeight: 500, margin: "0 auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                <CardMedia style={{ width: '300px', height: '300px', display: "flex", alignItems: "center" }}>
                    <Player
                        autoplay
                        loop
                        src={requestAnimation}
                        style={{ height: '300px', width: '300px' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Request Faculty<br />for a Invigilation Swap
                    </Typography>
                    <Typography sx={{ fontSize: "17px" }} component="div">
                        In case you are not comfortable with any<br /> Invigilation Fixture, You can Request<br /> other faculties who are free<br /> at that time for an invigilation swap.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: "row-reverse", alignContent: "flex-end" }}>
                    <Button onClick={handleRequest4Faculty} sx={{ color: "#A82121", fontSize: "15px", fontWeight: "bold", ":hover": { backgroundColor: "#A82121", color: "white" } }}>Request <ArrowForwardIcon color='#A82121' /></Button>
                </CardActions>
            </Card>

            <Card sx={{ minWidth: 300, minHeight: 500, margin: "0 auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                <CardMedia style={{ width: '400px', height: '300px', display: "flex", alignItems: "center" }}>
                    <Player
                        autoplay
                        loop
                        src={viewrequest}
                        style={{ height: '300px', width: '300px' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        View Requests<br />for a Invigilation Swap
                    </Typography>
                    <Typography sx={{ fontSize: "17px" }} component="div">
                        View any Requests from Invigilators<br /> for an Invigilation swap. Approve or Reject<br /> the request based on convenience.
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", flexDirection: "row-reverse", alignContent: "flex-end" }}>
                    <Button onClick={handleviewRequest} sx={{ color: "#A82121", fontSize: "15px", fontWeight: "bold", ":hover": { backgroundColor: "#A82121", color: "white" } }}>View Requests&nbsp; <ArrowForwardIcon color='#A82121' /></Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Faculty_Cards;