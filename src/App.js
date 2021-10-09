import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
    const Home = lazy(() => import('./components/pages/Home'));
    const Product = lazy(() => import('./components/pages/Product.js'));
    return (
        <Router>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
