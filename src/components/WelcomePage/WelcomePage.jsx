import ScrollIntoView from 'react-scroll-into-view';
import './welcomePage.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import welcomePic from '../../assets/images/welcome-pic.jpg';

export default function WelcomePage() {
    return (
        <section id="home">
            <div className='welcomeTextContainer'>
                <h1>Enjoy Our Delicious <span>Food</span></h1>
                <p>At our Food Delivery you will get the greatest food at the speed of light.</p>
                <ScrollIntoView selector='#menu'>
                    <button>Order now</button>
                </ScrollIntoView>
                <div className='socialMediaIcons'>
                    <TwitterIcon sx={{ fontSize: 38 }} className='socialIcon' />
                    <FacebookIcon sx={{ fontSize: 38 }} className='socialIcon' />
                    <GoogleIcon sx={{ fontSize: 38 }} className='socialIcon' />
                </div>
            </div>
            <div className='welcomePicContainer'>
                <img src={welcomePic} alt="man with pizza" />
            </div>
        </section>
    )
};