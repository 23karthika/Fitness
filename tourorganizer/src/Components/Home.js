import React, { useRef } from 'react'
import './css/Home.css';
import NavBar from './Navbar'
import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Link, Typography } from '@mui/material'
import { BsChatHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentSubmenu, setCurrentSubmenu] = React.useState([]);

  const handleRegisterClick = () => {
        alert("You have clicked the register button!");
      };
    
    
      const scrollContainerRef = useRef(null);
    
      const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
      };
    
      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      };

      const handleMenuOpen = (event, submenu) => {
        setAnchorEl(event.currentTarget);
        setCurrentSubmenu(submenu);
      };

      const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentSubmenu([]);
      };

      const handleMenuItemClick = (path) => {
        navigate(path);
        handleMenuClose();
      };
    
    
  return (
    <>
    <div className='hero'>
       <NavBar/>
    <Container maxWidth="lg" sx={{ marginTop: 8 }}>
          <Box sx={{ color: "white", textAlign: "center", padding: "50px 0" }}>
            <Typography variant="h3" component="h1">
              Join the Upcoming Marathon!
            </Typography>
            <Typography variant="h5" component="p" sx={{ marginTop: 2 }}>
              Register now for the marathon happening in Coimbatore. Don't miss
              out on this exciting event!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 4 }}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
            <Box sx={{ marginTop: 4 }}>
              <Link
                href=""
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                }}
              >
                Click here for upcoming events
              </Link>
            </Box>
          </Box>
        </Container>
         <div style={{ position: 'relative', height: '100vh' }}>
      {/* Other nav elements */}
      <IconButton
        sx={{
          position: 'fixed',
          top: '85%', // Adjust as needed
          right: '40px', // Adjust as needed
          transform: 'translateY(-50%)'
        }}
        onClick={() => handleMenuItemClick('/chatbot')}
      >
        <BsChatHeartFill size={50} color="darkviolet" />
      </IconButton>
    </div>
    </div>
    </>
  )
}

export default Home