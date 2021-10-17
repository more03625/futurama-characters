import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
    const Home              = lazy(() => import('./components/pages/Home'));
    const Product           = lazy(() => import('./components/pages/Product'));
    const Productdetails    = lazy(() => import('./components/pages/Productdetails'));
    const PageNotFound      = lazy(() => import('./components/pages/PageNotFound'));
    // Admin
    const Dashboard         =   lazy(() => import('./components/admin/pages/Dashboard'))
    const Addproduct        = lazy(() => import('./components/admin/pages/Addproducts'));
    const Products        = lazy(() => import('./components/admin/pages/Products'));
    return (
        <Router>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/product/:slug/:productID" component={Productdetails} />

                    <Route exact path="/admin/dashboard" component={Dashboard} />
                    <Route exact path="/admin/products" component={Products} />
                    <Route exact path="/admin/add-product" component={Addproduct} />
                    <Route exact path="/admin/edit-product/:productID" component={Addproduct} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
