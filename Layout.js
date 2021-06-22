import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Layout = ({children, toggleTheme, currentTheme}) => {
    return (
        <div>
            <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme}/>
            {children}
            <Footer currentTheme={currentTheme}/>
        </div>
    )
}

export default Layout
