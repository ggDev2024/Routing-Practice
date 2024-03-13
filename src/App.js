import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'

import HomeRoute from './components/Home'

import AboutRoute from './components/About'

import ContactRoute from './components/Contact'

import NotFoundRoute from './components/NotFound'

import './App.css'

const App = () => (
  <div className="page_container">
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/about" component={AboutRoute} />
        <Route exact path="/contact" component={ContactRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </div>
  </div>
)

export default App
