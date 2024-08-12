
import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
// import Card from './Components/cards/Cards';
// import Footer from './Components/footer/Footer';
import Home from './Components/Home'
// import Navbar from './Components/navbar/Navbar';
// import Review from './Components/review/Review';
import Workout from './Components/workout/Workout';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Work from './Components/workout/Work';
import Purchase from './Components/purchase/Purchase';
import Diet from './Components/diet/Diet';
// import Login from './Components/login/Login';
// import Register from './Components/register/Register';
import Cards from './Components/cards/Cards';
import Market from './Components/health/Market';
import CartProvider from './Components/health/CartProvider';
import Checkout from './Components/health/Checkout';
import Payment from './Components/health/Payment';
import CardNavigation from './Components/Register';
import AboutPage from './component/About';
import PositivePointsPage from './Components/Whyus';
import Chatbot from './Components/chatbot/Chatbot';
// import AerobicExercises from './Components/workouts/AerobicExercisePage';
import Login from './Components/Login';
import InnerHome from './Components/home/Home';
function App() {
  return (
    <>
    <Router>
    {/* <Navbar/> */}
          <CartProvider>
        <Routes>
        <Route exact path='/' element={<Home />} />
      <Route exact path='/register' element={<CardNavigation />} />
      <Route exact path='/about/about-us' element={<AboutPage />} />
      <Route exact path='/about/why-us' element={<PositivePointsPage />} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/chatbot' element={<Chatbot/>}/>
            <Route path='/home' element={<InnerHome/>}/>
      {/* <Route path="/workouts/aerobic-exercises" element={<AerobicExercises />} /> */}
            <Route path='/workout' element={<Work/>}/>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/dietplan' element={<Diet/>}/>
            <Route path='/card' element={<Cards/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/market' element={<Market/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/> */}
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
            </CartProvider>
    {/* <Footer/> */}
    </Router>
    {/* <Review/> */}
    </>
    
  );
}

export default App;
