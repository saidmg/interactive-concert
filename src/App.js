import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';



function App() {
  return (
    <div className="App">
     <Router >
      <div className='backgrnd'style={{minHeight: '100vh'}}>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Landing} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/payment' component={Payment} />
      </div>
    </Router>
      </div>
    // </div>
  );
}

export default App;
