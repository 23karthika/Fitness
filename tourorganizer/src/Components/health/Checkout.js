// import React, { useContext } from 'react';
// import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
// import { CartContext } from './CartProvider'
// import {  useNavigate } from 'react-router-dom';

// function Checkout() {
//   const { cart, total } = useContext(CartContext);
//   const navigate=useNavigate();

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>Checkout</Typography>
//       <List>
//         {cart.map(item => (
//           <ListItem key={item.id}>
//             <ListItemText primary={item.name} secondary={`$${item.price}`} />
//           </ListItem>
//         ))}
//       </List>
//       <Typography variant="h6">Total: ${total}</Typography>
//       <Button variant="contained" color="primary" onClick={() => alert('Proceed to payment')}>Proceed to Payment</Button>
//       <Button variant="outlined" onClick={() => navigate('/market')}>Back to Shop</Button>
//     </div>
//   );
// }

// export default Checkout;

import React, { useContext } from 'react';
import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton } from '@mui/material';
import { CartContext } from './CartProvider';
import { useNavigate } from 'react-router-dom';
import "./Market.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from '../layout/Layout';

function Checkout() {
  const { cart, total, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='head'>
        <h2>Checkout</h2>
      </div>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar
                src={item.image}
                alt={item.name}
                variant="square"
                sx={{ width: 80, height: 80 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={`₹${item.price}`}
              sx={{ marginLeft: 2 }}
            />
            <IconButton aria-label="delete" onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ₹{total}</Typography>
      <div className='button'>
      <Button variant="contained" color="primary" onClick={() => navigate('/payment')} className='b'>Proceed to Payment</Button>
      <Button variant="contained" color="primary" onClick={() => navigate('/market')}>Back to Shop</Button>
      </div>
    </Layout>
  );
}

export default Checkout;
