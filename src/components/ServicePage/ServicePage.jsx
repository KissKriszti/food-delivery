import { servicesList } from '../../constants/servicesList';
import './servicePage.css';

export default function ServicePage() {
    return (
        <section id="services">
            <div className='serviceTitle'>
                <h4>OUR SERVICE</h4>
                <h2>How Does It Work?</h2>
            </div>
            <div className='serviceContainer'>
                {servicesList.map(item => (
                    <div className='serviceCard' key={item.id}>
                        <img src={item.image} alt="service image" />
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}