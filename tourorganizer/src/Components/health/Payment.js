import React, { useContext, useState } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import { CartContext } from './CartProvider';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const { total } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Payment successful!');
    navigate('/market');
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>Payment</Typography>
      <Typography variant="h6" gutterBottom>Total: ${total}</Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Expiry Date (MM/YY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" onClick={handlePayment}>Pay Now</Button>
        <Button variant="outlined" onClick={() => navigate('/checkout')}>Back to Checkout</Button>
      </Box>
    </Paper>
  );
}

export default Payment;
