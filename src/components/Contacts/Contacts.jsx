import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './contacts.css';

export default function Contacts() {
    return (
        <section id="contact">
            <div className='contactContainer'>
                <div className='leftContainer'>
                    <h4>This website has been created using React.</h4>
                    <h5>Made by Krisztina Kiss</h5>
                    <a href='https://www.linkedin.com/in/krisztina-kiss-bb28a3ba/'><LinkedInIcon sx={{ fontSize: 30, backgroundColor: "#eeb528" }} /></a>
                    <a href='https://github.com/KissKriszti/foodDelivery'><GitHubIcon sx={{ fontSize: 30, backgroundColor: "#eeb528" }} /></a>
                </div>
                <div className='rightContainer'>
                    <h4>Stay Connected</h4>
                    <p>Question or Feedback? We'd love to hear from you</p>
                    <input type="e-mail" placeholder='E-mail Address' />
                    <button><ArrowForwardIosIcon sx={{ fontSize: 34, backgroundColor: 'black', color: 'white', borderRadius: '0 10px 10px 0' }} /></button>
                </div>
            </div>
        </section>
    )
};