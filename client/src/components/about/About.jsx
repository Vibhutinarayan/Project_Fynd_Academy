
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Adarsh Gupta here</Typography>
                <Text variant="h5">I'm a B.Tech Graduate in Information Technology Branch 
                A beginner in MERN stack development field & interested to explore more in this Technology.
                     here is my github profile <br />
                     
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Vibhutinarayan" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    here is my social media account
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/adarsh-gupta-ba7a571b7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BqLi17pL%2FSWmoAFNi7rdsHA%3D%3D" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or on Email 
                        <Link href="mailto:adarshgupta468@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;