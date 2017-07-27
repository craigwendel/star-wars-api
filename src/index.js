import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/App.css'
import registerServiceWorker from './registerServiceWorker'

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Explorer from './components/Explorer'
import BaseLayout from './components/Layout'
import Films from './components/Films'
import People from './components/People'
import Starships from './components/Starships'

ReactDOM.render(

<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={Explorer} />
      <Route path='/characters' component={People} />
      <Route path='/starships' component={Starships} />
      <Route path='/films' component={Films} />
    </Switch>
  </BaseLayout>
</BrowserRouter>

, document.getElementById('root'))
registerServiceWorker()
