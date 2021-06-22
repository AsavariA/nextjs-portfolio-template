import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
