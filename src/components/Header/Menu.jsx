import ScrollIntoView from 'react-scroll-into-view';

export default function NavMenu() {
    return (
        <ul>
            <ScrollIntoView selector="#home"><li>Home</li></ScrollIntoView>
            <ScrollIntoView selector="#services"><li>Services</li></ScrollIntoView>
            <ScrollIntoView selector="#menu"><li>Menu</li></ScrollIntoView>
            {/* <ScrollIntoView selector="#about"><li>About us</li></ScrollIntoView> */}
            <ScrollIntoView selector="#contact"><li>Contacts</li></ScrollIntoView>
        </ul>
    )
}