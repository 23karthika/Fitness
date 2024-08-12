import React, { useState,useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup
} from '@mui/material';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const [customerid, setId] = useState('');
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [customer, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await loadCustomers())();
  }, []);

  async function loadCustomers() {
    const result = await axios.get("http://localhost:8080/api/v1/customer/getAllCustomer");
    setCustomers(result.data);
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInteger = (value) => {
    return /^\d+$/.test(value);
  };
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  async function save(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (!validateInteger(age)) {
      alert("Age must be valid integers");
      return;
    }

    if(!validateInteger(mobile)){
      alert("Mobile number must be a valid integer");
      return;
    }

    if (!validateMobile(mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/v1/customer/save", {
        fname:fname,
        lname:lname,
        address: address,
        age:age,
        mobile: mobile,
        email:email,
        password:password
      });
      alert("Customer Registration Successfully");
      setId("");
      setFName("");
      setLName("");
      setaddress("");
      setage("");
      setMobile("");
      setEmail("");
      setpassword("");
      loadCustomers();
      navigate('/');
    } catch (err) {
      alert("User Registration Failed");
    }
  }

  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={fname}
              onChange={(event) => setFName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lname}
              onChange={(event) => setLName(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(event) => setaddress(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="age"
              variant="outlined"
              fullWidth
              value={age}
              onChange={(event) => setage(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              variant="outlined"
              type='password'
              fullWidth
              value={password}
              onChange={(event) => setpassword(event.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={save}>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to='/login'>Already have an account</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};


const cardData = [
  { id: 1, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      What is your gender?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="Male" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="Female" />
          <FormControlLabel value="endurance" control={<Radio />} label="Other" />
          <FormControlLabel value="general-health" control={<Radio />} label="Prefer not to say" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 2, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      What are your primary fitness goals? (Select all that apply)
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Lose weight" />
        <FormControlLabel control={<Checkbox />} label="Gain muscle" />
        <FormControlLabel control={<Checkbox />} label="Improve endurance" />
        <FormControlLabel control={<Checkbox />} label="Increase flexibility" />
        <FormControlLabel control={<Checkbox />} label="General fitness" />
        <FormControlLabel control={<Checkbox />} label="Other" />
      </FormGroup>
    </div>
  )},
  
  { id: 3, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      Do you have a specific timeframe for achieving your fitness goals?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="Yes, within 3 months" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="Yes, within 6 months" />
          <FormControlLabel value="endurance" control={<Radio />} label="Yes, within 1 year" />
          <FormControlLabel value="general-health" control={<Radio />} label="No specific timeframe" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 4, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      How would you describe your current activity level?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="Sedentary (little to no exercise)" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="Lightly active (light exercise/sports 1-3 days/week)" />
          <FormControlLabel value="endurance" control={<Radio />} label="Moderately active (moderate exercise/sports 3-5 days/week)" />
          <FormControlLabel value="general-health" control={<Radio />} label="Very active (hard exercise/sports 6-7 days a week)
" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 5, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      How many days per week do you usually work out?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="0-1 days" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="2-3 days" />
          <FormControlLabel value="endurance" control={<Radio />} label="4-5 days" />
          <FormControlLabel value="general-health" control={<Radio />} label="6-7 days
" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 6, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      How long do your workouts usually last?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="Less than 30 minutes" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="30-60 minutes" />
          <FormControlLabel value="endurance" control={<Radio />} label="More than 60 minutes" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 7, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      How many days per week do you usually work out?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="0-1 days" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="2-3 days" />
          <FormControlLabel value="endurance" control={<Radio />} label="4-5 days" />
          <FormControlLabel value="general-health" control={<Radio />} label="6-7 days
" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 8, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      What types of workouts do you prefer? (Select all that apply)
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Cardio" />
        <FormControlLabel control={<Checkbox />} label="Strength training" />
        <FormControlLabel control={<Checkbox />} label="Yoga" />
        <FormControlLabel control={<Checkbox />} label="HIIT" />
        <FormControlLabel control={<Checkbox />} label="Pilates" />
        <FormControlLabel control={<Checkbox />} label="Other" />
      </FormGroup>
    </div>
  )},
  { id: 9, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      What exercise equipment do you have access to? (Select all that apply)
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Dumbbells" />
        <FormControlLabel control={<Checkbox />} label="Resistance bands" />
        <FormControlLabel control={<Checkbox />} label="Treadmill" />
        <FormControlLabel control={<Checkbox />} label="No equipment" />
        <FormControlLabel control={<Checkbox />} label="Other" />
      </FormGroup>
    </div>
  )},
  { id: 10, content: (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
      Where do you prefer to work out?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="fitness-goal" name="fitness-goal">
          <FormControlLabel value="weight-loss" control={<Radio />} label="Gym" />
          <FormControlLabel value="muscle-gain" control={<Radio />} label="Home" />
          <FormControlLabel value="endurance" control={<Radio />} label="Outdoor" />
          <FormControlLabel value="general-health" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  )},
  { id: 11, content: (
    <div>
      <div>
      <Typography variant="h5" component="div" gutterBottom>
        Register
      </Typography>
      <CustomerForm />
      </div>
    </div>
  )},

];


const CardNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const renderContent = () => {
    return cardData[currentIndex].content;
  };

  

  return (
    <div style={{backgroundColor:'black'}}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          padding: 2,
          marginTop: '0',
          backgroundSize: 'cover',
          
        }}
      >
        <Card sx={{ width: '100%', maxWidth: 700,maxHeight:600, padding: 2 ,
          backgroundColor: '#f0f0f0',
          border: '5px solid #ccc',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <CardContent>{renderContent()}</CardContent>
        </Card>
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            sx={{ marginRight: 2 }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentIndex === cardData.length - 1}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CardNavigation;


