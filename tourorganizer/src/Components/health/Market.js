// import React,{useState} from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Layout from '../layout/Layout';
// import { Box, Dialog, Fab, Stack, styled } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));
// export default function Market(){
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//       setOpen(true);
//     };
//     const handleClose = () => {
//       setOpen(false);
//     };
//     return(
//         <Layout>
//             <div className="head">
//                 <h2>Health & Fitness Market</h2>
//             </div>
//         <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ marginTop: '3rem',marginBottom:'6rem' }}>
//         {[{
//           title: "Yoga Workout Mat",
//           price: "₹1150",
//           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX9oRxwQiarDZTtOiVeiwMZjnca0ZEnmk8A&s",
//           description: "Yoga or Workout Mat",
//           details: `
//             <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
//             <br></br>
//             <strong>Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
//             <br></br>
//             Whichever option you go with, if it gets you regularly warming up before workouts, it will have been the right choice.
//           `,
//         }, {
//           title: "Exercise Ball",
//           price: "₹1050",
//           image: "https://img.freepik.com/free-photo/young-woman-home-working-fitness-ball_23-2148432882.jpg?t=st=1721985294~exp=1721988894~hmac=aca590942baf5b7aa758af6eba2e617294d2ae0faa72dd0d0be7a8b4f7420ce4&w=740",
//           description: "Exercise Ball",
//           details: `
//             <strong>Why it’s essential:</strong> While they are ideal for your core and trunk activation, exercise balls are great for burning calories and stretches that work parts of the body that are ignored by everyday life. It’s also good as an office chair and will help you improve your posture and balance.
//             <br></br>
//             <strong>Finding the right one for you:</strong> Although an exercise ball can be used for many different activities and is often known by a number of different names, such as ‘Yoga Ball’, ‘Stability Ball’, ‘Fitness Ball’, ’Physio Ball’ and the name is even sometimes used for Medicine balls and Slam Balls. However, the type of exercise ball we believe is the best for home exercise equipment is an inflatable ball made of a thick vinyl material, which should be not too big and not too small for both your own personal height and whether or not you want to use it as a desk chair. If you go too much to either extreme, it will make it harder both for your home workout, and working from home.
//           `,
//         }, {
//           title: "Kettlebells",
//           price: "₹2150",
//           image: "https://img.freepik.com/free-photo/training-gym-concept-with-kettlebells-high-angle_23-2149307766.jpg?t=st=1721985392~exp=1721988992~hmac=ba29d18c0114c7698919b8b6ab63bf4ea9fd168a100f3ad01626cf2d90ee2344&w=996",
//           description: "Kettlebells",
//           details: `
//             <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
//             <br></br>
//             <strong>Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
//           `,
//         }].map((item, index) => (
//           <Card key={index} sx={{ maxWidth: 345, height: 'auto', margin: '1rem', flex: '1 1 30%' }}>
//             <CardMedia
//               component="img"
//               alt={item.title}
//               height="140"
//               image={item.image}
//             />
//             <CardContent>
//               <Stack direction="row" justifyContent="space-between" alignItems="center">
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item.title}
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                   {item.price}
//                 </Typography>
//               </Stack>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Add to Cart</Button>
//               <React.Fragment>
//                 <Button onClick={handleClickOpen}>
//                   Learn More
//                 </Button>
//                 <BootstrapDialog
//                   onClose={handleClose}
//                   aria-labelledby="customized-dialog-title"
//                   open={open}
//                 >
//                   <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                     {item.description}
//                   </DialogTitle>
//                   <IconButton
//                     aria-label="close"
//                     onClick={handleClose}
//                     sx={{
//                       position: 'absolute',
//                       right: 8,
//                       top: 8,
//                       color: (theme) => theme.palette.grey[500],
//                     }}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <DialogContent dividers>
//                     <Typography gutterBottom dangerouslySetInnerHTML={{ __html: item.details }} />
//                   </DialogContent>
//                   <DialogActions>
//                     <Button autoFocus onClick={handleClose}>
//                       Close
//                     </Button>
//                   </DialogActions>
//                 </BootstrapDialog>
//               </React.Fragment>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>
//       </Layout>
//     )
// }

// import React, { useContext } from 'react';
// import { Button, Card, CardContent, CardActions, Typography, Grid, CardMedia } from '@mui/material';
// import { CartContext } from './CartProvider';
// import { useNavigate } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Whey Protein', price: 30, image: 'https://www.nutracart.com/cdn/shop/products/WHEYPROTEINCHOC1KGfrontside.jpg?v=1657193630' },
//   { id: 2, name: 'Casein Protein', price: 35, image: 'https://example.com/images/casein-protein.jpg' },
//   { id: 3, name: 'Vegan Protein', price: 25, image: 'https://example.com/images/vegan-protein.jpg' },
// ];

// function Market() {
//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>Protein Shop</Typography>
//       <Grid container spacing={3}>
//         {products.map(product => (
//           <Grid item key={product.id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 alt={product.name}
//                 height="140"
//                 image={product.image}
//                 title={product.name}
//               />
//               <CardContent>
//                 <Typography variant="h5">{product.name}</Typography>
//                 <Typography variant="body2">${product.price}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>Go to Checkout</Button>
//     </div>
//   );
// }

// export default Market;

import React, { useContext } from 'react';
import { Button, Card, CardContent, CardActions, Typography, Grid, CardMedia } from '@mui/material';
import { CartContext } from './CartProvider';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';

const products = [
  { id: 1, name: 'Whey Protein', price: 3500, image: 'https://www.nutracart.com/cdn/shop/products/WHEYPROTEINCHOC1KGfrontside.jpg?v=1657193630' },
  { id: 2, name: 'Casein Protein', price: 2750, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7Sf5sYFJnfq0TYeHCo3XzK_orpFWutf9UA&s' },
  { id: 3, name: 'Vegan Protein', price: 2100, image: 'https://m.media-amazon.com/images/I/61qQXQdxDyL.jpg' },
  { id: 4, name: 'Muscle Gainer', price: 3925, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/8/p/t/weight-gainers-mass-gainers-muscle-mass-gainer-with-whey-protein-original-imaggz2s89ehgzzc.jpeg?q=90&crop=false' },
  { id: 5, name: 'Mass Gainer', price: 2899, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSDG7ODLE4fJLr5HlcnP3_RFTIWQuTW8NqA&s' },
  { id: 6, name: 'Creatine', price: 949, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/protein-supplement/s/r/o/-original-imagychvhmycpnyw.jpeg?q=70&crop=false' },
];

function Market() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='head'>
        <h2>Health & Fitness Market</h2>
      </div>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
                title={product.name}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">₹{product.price}</Typography>
              </CardContent>
              <CardActions sx={{ marginTop: 'auto' }}>
                <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Market;
