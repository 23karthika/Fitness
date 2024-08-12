
// import React from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Layout from '../layout/Layout';
// import { Box, Fab, Stack } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import ToggleButton from '@mui/material/ToggleButton';
// import {  createSvgIcon } from "@mui/material";
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));
// export default function Purchase(){
//         const [open, setOpen] = React.useState(false);
      
//         const handleClickOpen = () => {
//           setOpen(true);
//         };
//         const handleClose = () => {
//           setOpen(false);
//         };

//     return(
//         <Layout>
//             <div className="head">
//             <h2>Equipments for Home Workout</h2>
//             </div>
//             <Box display="flex" justifyContent="space-between" flexWrap="wrap" sx={{ marginTop: '6rem', marginBottom:'6rem' }}>
//                 <Card sx={{ maxWidth: 345 , marginTop:'6rem', marginLeft:'3rem'}}>
//                     <CardMedia
//                         component="img"
//                         alt="30days challenge"
//                         height="140"
//                         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX9oRxwQiarDZTtOiVeiwMZjnca0ZEnmk8A&s"
//                     />
//                     <CardContent>
//                         <Stack direction="row" justifyContent="space-between" alignItems="center">
//                         <Typography gutterBottom variant="h5" component="div">
//                             Yoga Workout Mat
//                         </Typography>
//                         <Typography gutterBottom variant="h6" component="div">
//                             ₹1150
//                         </Typography>
//                         </Stack>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">Add to Cart</Button>
//                         <React.Fragment>
//                             <Button onClick={handleClickOpen}>
//                                 Learn More
//                             </Button>
//                             <BootstrapDialog
//                                 onClose={handleClose}
//                                 aria-labelledby="customized-dialog-title"
//                                 open={open}
//                             >
//                                 <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                                 Yoga or Workout Mat
//                                 </DialogTitle>
//                                 <IconButton
//                                 aria-label="close"
//                                 onClick={handleClose}
//                                 sx={{
//                                     position: 'absolute',
//                                     right: 8,
//                                     top: 8,
//                                     color: (theme) => theme.palette.grey[500],
//                                 }}
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                                 <DialogContent dividers>
//                                     <Typography gutterBottom>
//                                             <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
//                                         <br></br>
//                                     </Typography>
//                                     <Typography gutterBottom>
//                                     <strong>Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
//                                     <br></br>
//                                     </Typography>
//                                     <Typography gutterBottom>
//                                     Whichever option you go with, if it gets you regularly warming up before workouts, it will have been the right choice.
//                                     </Typography>
//                                 </DialogContent>
//                                 <DialogActions>
//                                     <Button autoFocus onClick={handleClose}>
//                                         Close
//                                     </Button>
//                                 </DialogActions>
//                             </BootstrapDialog>
//                         </React.Fragment>
//                     </CardActions>
//                 </Card>
//                 <Card sx={{ maxWidth: 1000 , marginTop:'6rem'}}>
//                     <CardMedia
//                         component="img"
//                         alt="30days challenge"
//                         height="140"
//                         image="https://img.freepik.com/free-photo/young-woman-home-working-fitness-ball_23-2148432882.jpg?t=st=1721985294~exp=1721988894~hmac=aca590942baf5b7aa758af6eba2e617294d2ae0faa72dd0d0be7a8b4f7420ce4&w=740"
//                     />
//                     <CardContent>
//                         <Stack direction="row" justifyContent="space-between" alignItems="center">
//                             <Typography gutterBottom variant="h5" component="div">
//                                 Exercise Ball
//                             </Typography>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 ₹1050
//                             </Typography>
//                         </Stack>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">Add to Cart</Button>
//                         <React.Fragment>
//                             <Button onClick={handleClickOpen}>
//                                 Learn More
//                             </Button>
//                             <BootstrapDialog
//                                 onClose={handleClose}
//                                 aria-labelledby="customized-dialog-title"
//                                 open={open}
//                             >
//                                 <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                                 Exercise Ball
//                                 </DialogTitle>
//                                 <IconButton
//                                 aria-label="close"
//                                 onClick={handleClose}
//                                 sx={{
//                                     position: 'absolute',
//                                     right: 8,
//                                     top: 8,
//                                     color: (theme) => theme.palette.grey[500],
//                                 }}
//                                 >
//                                     <CloseIcon />
//                                 </IconButton>
//                                 <DialogContent dividers>
//                                     <Typography gutterBottom>
//                                             <strong>Why it’s essential:</strong> While they are ideal for your core and trunk activation, exercise balls are great for burning calories and stretches that work parts of the body that are ignored by everyday life. It’s also good as an office chair and will help you improve your posture and balance.
//                                         <br></br>
//                                     </Typography>
//                                     <Typography gutterBottom>
//                                     Finding the right one for you:  Although an exercise ball can be used for many different activities and is often known by a number of different names, such as ‘Yoga Ball’, ‘Stability Ball’, ‘Fitness Ball’, ’Physio Ball’ and the name is even sometimes used for Medicine balls and Slam Balls. However, the type of exercise ball we believe is the best for home exercise equipment is an inflatable ball made of a thick vinyl material, which should be not too big and not too small for both your own personal height and whether or not you want to use it as a desk chair. If you go too much to either extreme, it will make it harder both for your home workout, and working from home. 
//                                     <br></br>
//                                     </Typography>
                                
//                                 </DialogContent>
//                                 <DialogActions>
//                                     <Button autoFocus onClick={handleClose}>
//                                         Close
//                                     </Button>
//                                 </DialogActions>
//                             </BootstrapDialog>
//                         </React.Fragment>
//                     </CardActions>
//                 </Card>
//                     <Card sx={{ maxWidth: 345 , marginTop:'6rem'}}>
//                     <CardMedia
//                         component="img"
//                         alt="30days challenge"
//                         height="140"
//                         image="https://img.freepik.com/free-photo/training-gym-concept-with-kettlebells-high-angle_23-2149307766.jpg?t=st=1721985392~exp=1721988992~hmac=ba29d18c0114c7698919b8b6ab63bf4ea9fd168a100f3ad01626cf2d90ee2344&w=996"
//                     />
//                     <CardContent>
//                     <Stack direction="row" justifyContent="space-between" alignItems="center">
//                         <Typography gutterBottom variant="h5" component="div">
//                             Kettlebells
//                         </Typography>
//                         <Typography gutterBottom variant="h6" component="div">
//                             ₹2150
//                         </Typography>
//                         </Stack>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">Add to Cart</Button>
//                         <React.Fragment>
//                     <Button onClick={handleClickOpen}>
//                         Learn More
//                     </Button>
//                     <BootstrapDialog
//                         onClose={handleClose}
//                         aria-labelledby="customized-dialog-title"
//                         open={open}
//                     >
//                         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                         <strong>Kettlebells</strong>
//                         </DialogTitle>
//                         <IconButton
//                         aria-label="close"
//                         onClick={handleClose}
//                         sx={{
//                             position: 'absolute',
//                             right: 8,
//                             top: 8,
//                             color: (theme) => theme.palette.grey[500],
//                         }}
//                         >
//                         <CloseIcon />
//                         </IconButton>
//                         <DialogContent dividers>
//                         <Typography gutterBottom>
//                                 <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
//                             <br></br>
//                         </Typography>
//                         <Typography gutterBottom>
//                         <strong> Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
//                         <br></br>
//                         </Typography>
                        
//                         </DialogContent>
//                         <DialogActions>
//                         <Button autoFocus onClick={handleClose}>
//                             Close
//                         </Button>
//                         </DialogActions>
//                     </BootstrapDialog>
//                     </React.Fragment>
//                     </CardActions>
//                     </Card>
                        
                       
//                     <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5rem',marginRight:'6rem' }}>
//                     <a href="/card"> 
//                         <Fab color="primary" aria-label="add" >
//                             <AddIcon  />
//                         </Fab>
//                     </a>
//                     </Box>
//                 </Box>
//         </Layout>
//     )
// }

import React,{useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Layout from '../layout/Layout';
import { Box, Fab, Grid, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CartContext } from "../health/CartProvider";
import { useNavigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Purchase() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
 const products=[{
              id:1,
              name: "Whey Protein",
              price: "3500",
              image: "https://www.nutracart.com/cdn/shop/products/WHEYPROTEINCHOC1KGfrontside.jpg?v=1657193630",

            }, 
            {
              id:2,
              name: "Casein Protein",
              price: "2750",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7Sf5sYFJnfq0TYeHCo3XzK_orpFWutf9UA&s",
 
            },
             {
              id:3,
              name: "Vegan Protein",
              price: "2100",
              image: "https://m.media-amazon.com/images/I/61qQXQdxDyL.jpg",
  
            }];
  return (
    <Layout>
      <div className="head">
        <h2> Workout Essentials</h2>
      </div>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ marginTop: '3rem' }}>
        {[{
          title: "Yoga Workout Mat",
          price: "1150",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX9oRxwQiarDZTtOiVeiwMZjnca0ZEnmk8A&s",
          description: "Yoga or Workout Mat",
          details: `
            <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
            <br></br>
            <strong>Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
            <br></br>
            Whichever option you go with, if it gets you regularly warming up before workouts, it will have been the right choice.
          `,
        }, {
          title: "Exercise Ball",
          price: "1050",
          image: "https://img.freepik.com/free-photo/young-woman-home-working-fitness-ball_23-2148432882.jpg?t=st=1721985294~exp=1721988894~hmac=aca590942baf5b7aa758af6eba2e617294d2ae0faa72dd0d0be7a8b4f7420ce4&w=740",
          description: "Exercise Ball",
          details: `
            <strong>Why it’s essential:</strong> While they are ideal for your core and trunk activation, exercise balls are great for burning calories and stretches that work parts of the body that are ignored by everyday life. It’s also good as an office chair and will help you improve your posture and balance.
            <br></br>
            <strong>Finding the right one for you:</strong> Although an exercise ball can be used for many different activities and is often known by a number of different names, such as ‘Yoga Ball’, ‘Stability Ball’, ‘Fitness Ball’, ’Physio Ball’ and the name is even sometimes used for Medicine balls and Slam Balls. However, the type of exercise ball we believe is the best for home exercise equipment is an inflatable ball made of a thick vinyl material, which should be not too big and not too small for both your own personal height and whether or not you want to use it as a desk chair. If you go too much to either extreme, it will make it harder both for your home workout, and working from home.
          `,
        }, {
          title: "Kettlebells",
          price: "2150",
          image: "https://img.freepik.com/free-photo/training-gym-concept-with-kettlebells-high-angle_23-2149307766.jpg?t=st=1721985392~exp=1721988992~hmac=ba29d18c0114c7698919b8b6ab63bf4ea9fd168a100f3ad01626cf2d90ee2344&w=996",
          description: "Kettlebells",
          details: `
            <strong>Why it’s essential:</strong> No matter what body area you’re focusing on or how long you plan to work out for, it’s vital that you warm up before you start exercising. Not only does warming up prevent muscle injuries by loosening up the joints, but it also helps prepare the muscles for the upcoming exercise. So whether that be yoga or a workout, a mat is a piece of essential home gym equipment.
            <br></br>
            <strong>Finding the right one for you:</strong> Although they can both be used both for warm ups and working out, it’s important to note the difference between a workout mat and a yoga mat. Workout mats are known to vary in thickness, ranging from 1 to 3 inches, and if you’re looking to do bodyweight exercises alongside your warm up, this would be a far better option. Yoga mats, on the other hand, are much thinner, easier to roll away, and, much better for exercises based on flexibility such as (you guessed it) yoga poses.
          `,
        }].map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345, height: 'auto', margin: '1rem', flex: '1 1 30%' }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.image}
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ₹{item.price}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>addToCart(item)}>Add to Cart</Button>
              <React.Fragment>
                <Button onClick={handleClickOpen}>
                  Learn More
                </Button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {item.description}
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <Typography gutterBottom dangerouslySetInnerHTML={{ __html: item.details }} />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Close
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </React.Fragment>
            </CardActions>
          </Card>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem',marginRight:'2rem' }}>
          <a href="/card">
            <Fab color="black" aria-label="add">
              <AddIcon />
            </Fab>
          </a>
        </Box>
      </Box>
      <div className="head">
        <h2>Health & Fitness Market</h2>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ marginTop: '3rem',marginBottom:'3rem' }}>
       {products.map(product => (
          <Card key={product.id} sx={{ maxWidth: 345, height: 'auto', margin: '1rem', flex: '1 1 30%' }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image={product.image}
              sx={{objectFit: 'contain'}}
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ₹{product.price}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>addToCart(product)}>Add to Cart</Button>
            </CardActions>
          </Card>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem',marginRight:'2rem' }}>
          <a href="/market">
            <Fab color="black" aria-label="add">
              <AddIcon />
            </Fab>
          </a>
        </Box>
        </Box>
      </div>
    </Layout>
  );
}
