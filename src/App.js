

import './components/Header/Header';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';
import RecommendedMovies from './components/RecommendedMovies';
import Registration from './components/Registration';



function App() {
  return (
    <Router>
      <div>
        <Header/>
        
          <Switch>
            <Route exact path="/" >
              <SliderImages/>
              <RecommendedMovies/>
              <CardsSlider/>
              <Premieres/>
            </Route>
              
            <Route exact path="/movies">
              <AllMovies/>
              <RecommendedMovies/>
            </Route>

            <Route exact path="/movies/:movid">
              <SingleMovie/>
              
            </Route>

            <Route exact path="/register">
              <Registration/>
            </Route>

            
            
          </Switch>
        
        <Footer/>
      </div>
    </Router>
    
  )
};
    
export default App;
