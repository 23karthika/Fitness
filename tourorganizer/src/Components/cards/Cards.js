import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Layout from '../layout/Layout';
import './Card.css';
import { Box, Grid, Stack } from '@mui/material';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CartContext } from '../health/CartProvider';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export default function Cards() {
  const [open, setOpen] = React.useState(false);
  const { addToCart } = useContext(CartContext);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <div className='head'>
        <h2>Equipments For Home Workout</h2>
      </div>
      <div >
      <Grid container spacing={3}>
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
        },{
          title: "Dumbbells",
          price: "3750",
          image:"https://img.freepik.com/free-psd/weights-training-mock-up_23-2148243445.jpg?t=st=1721985494~exp=1721989094~hmac=030c7468dd73a1682e4f1e5a7140f9f99d1cd438f3474ccf7adf04b41a467f3e&w=740",
          description:"Dumbbells",
          details:"",
        },{
          title:"Mini Trampoline",
          price:"3350",
          image:"https://www.shutterstock.com/shutterstock/photos/2171778747/display_1500/stock-photo-rebounding-concept-feet-and-legs-of-a-muscular-man-jumping-on-a-mini-trampoline-in-a-backyard-2171778747.jpg",
          description:"Mini Trampoline",
          details:"",
        },{
          title:"Resistence Band",
          price:"1050",
          image:"https://contents.mediadecathlon.com/p2295207/k$b0bd841b2a5d0531edd9f724c79fe067/1800x0/3360pt2331/6720xcr4276/default.jpg?format=auto",
          description:"Resistence Band",
          details:"",

        },
        {
          title:"Skipping or Speed Rope",
          price:"550",
          image:"https://boldfit.in/cdn/shop/products/BlueHead.jpg?v=1638432441&width=1816",
          description:"Skipping or Speed Rope",
          details:"",
        },
        {
          title:"Pull up Bar",
          price:"10,150",
          image:"https://excelfitindia.com/web/wp-content/uploads/2021/09/excel-sturdy-wall-mount-pull-up-bar.jpg",
          description:"Pull up Bar",
          details:"",
        },{
          title:"Turbo Trainer or Roller",
          price:"12,450",
          image:"https://contents.mediadecathlon.com/p1727426/k$ff70d046875f50a3bbe76ac021f2e8ff/1800x0/2003pt1366/3972xcr2731/default.jpg?format=auto",
          description:"Turbo Trainer or Roller",
          details:"",
        }
      ].map((item, index) => (
        <Grid item key={index} xs={10} sm={3} md={3} marginRight={0.5} marginLeft={12} marginBottom={8} marginTop={2}>
          <Card key={index} sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              image={item.image}
              sx={{objectFit:"contain"}}
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
        </Grid>
        ))}
        </Grid>
    </div>
    </Layout>
  );
}