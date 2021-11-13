import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from './components/layouts/Spinner';
const App = () => {

    const Home              = lazy(() => import('./components/pages/Home'));
    
    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
