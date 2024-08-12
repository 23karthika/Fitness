// import React, { useState } from 'react';
// import {
//   TextField,
//   Grid,
//   Button,
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Link as MuiLink
// } from '@mui/material';
// import { Link , useNavigate} from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleLogin = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:8081/login',{email,password})
//     .then(
//       res => {
//         console.log(res.data)
//         setError(''); 
//         navigate('/');})
//       .catch(err => {console.log(err)
//                 setError('Invalid credentials');
//               });

//     // Handle login logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         padding: 2,
//       }}
//     >
//       <Card sx={{ width: '100%', padding: 2 }}>
//         <CardContent>
//           <Typography variant="h5" component="div" gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={handleLogin}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Password"
//                   variant="outlined"
//                   type="password"
//                   fullWidth
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                 >
//                   Login
//                 </Button>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography variant="body2">
//                   Don't have an account?{' '}
//                   <Link to="/register" component={MuiLink}>
//                     Register
//                   </Link>
//                 </Typography>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Typography,
  Link as MuiLink
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/login', { email, password })
      .then(res => {
        console.log(res.data);
        setError(''); // Clear any previous error
        navigate('/'); // Navigate to home page on successful login
      })
      .catch(err => {
        console.error(err);
        setError('Invalid email or password'); // Set error message
      });

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Card sx={{ width: '100%', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link to="/register" component={MuiLink}>
                    Register
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
          {error && <Typography color="error">{error}</Typography>} {/* Show error message */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
