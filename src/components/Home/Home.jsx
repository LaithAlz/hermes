import React, {useEffect} from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Firebase/context";

function Home() {
    const navigate = useNavigate()

    const { currentUser } = useAuth()
    useEffect(() => {
        if (!currentUser) {
            navigate('/signin')
        }
    }, [currentUser])

    const today = new Date().toLocaleDateString(); // Date for the header
    const conversations = [
        { name: "Jacque Deaux", language: "French", date: "Sept 8th, 2024", tags: ["Memory issues"] },
        { name: "Maria Orr", language: "French", date: "Sept 8th, 2024", tags: ["Stomach pain", "Ultrasound", "Pained"] },
        { name: "Jose Alvarado", language: "Spanish", date: "Sept 8th, 2024", tags: ["Shoulder tear", "Ultrasound"] },
        { name: "Ben Gaines", language: "German", date: "Sept 8th, 2024", tags: ["Headache", "Stomach pain", "Pained"] },
        { name: "Tony Parker", language: "French", date: "Sept 8th, 2024", tags: ["Fracture", "X-Ray"] }
    ];
    

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', height:'80px' }}>
                    <h6 style={{fontSize: '20px'}}>
                        {today}
                    </h6>
                    <h4 style={{fontSize: '40px'}}>
                        Welcome, HTN
                    </h4>
                    <button onClick={() => navigate('/newchat')}>
                        New Chat
                    </button>
                </Toolbar>
            </AppBar>


          <Grid marginX={3} marginY={6}>
            <Typography variant="h5" sx={{ my: 6 }}>
                Recent conversations
            </Typography>

            <Grid container spacing={3}>
                {conversations.map((conversation, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card elevation={0} sx={{ border: '1px solid #666' }}>
                            <CardContent>
                                <Typography variant="subtitle1">{conversation.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{conversation.date}</Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Chip label={conversation.language} size="small" sx={{ mr: 0.5, mb: 0.5, backgroundColor: 'red', color: 'white'}} />
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    {conversation.tags.map((tag, i) => (
                                        <Chip label={tag} key={i} size="small" sx={{ mr: 0.5, mb: 0.5, backgroundColor: '#2d3641', color: 'white'}} />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Button variant="text" sx={{ mt: 2, color: '#2d3641'}}>
                View more...
            </Button>
            </Grid>
        </>
    );
}

export default Home;
