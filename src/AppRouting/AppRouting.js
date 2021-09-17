import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Contact from '../Components/Contact/contact';
import NavBar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const AppRouting = () => {
    useEffect(() => {
        Aos.init()
      }, []);

    return (
    <Router>
        <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        <Footer></Footer>
    </Router>
    )
}

export default AppRouting