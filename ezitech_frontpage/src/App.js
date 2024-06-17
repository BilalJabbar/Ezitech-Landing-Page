
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import RecommendedCourses from './components/RecommendedCources';
import Internship from './components/Internships';
import Info1 from './components/Info1';
import Footer from './components/Footer';

function App() {

    return(
        <>
            <TopBar/>

            <div className='pic-container'>
            <Navbar/>
            <Hero/>
            </div>
            <Services />
            <RecommendedCourses/>
            <Internship/>
            <Info1/>
            <Footer/>
            
            
        </>

    );

}

export default App;
