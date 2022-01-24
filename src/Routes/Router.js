import React, { lazy, Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { About } from '../Components/About/About'
//import Contact from '../Components/Contact us/Contact'
import PizzasubCategory from '../Components/Menu/Pizaasub/PizzasubCategory'
import Menu from '../Components/Menu/Pizza/Menu'
import Cart from '../Components/Cart/Cart'
import HomePage from '../Pages/HomePage'
import PagNotFound from '../Pages/PagNotFound'
import Reg from '../Pages/Tabs'
import Footer from './Footer'
import { Navibar } from './Navibar'
import ProtectedRoutes from './ProtectedRoutes'
import Profile from '../Auth/Profile'

const Contact = lazy(() => import('../Components/Contact us/Contact'))
const Routing = () => {
    return (
        <Router>
            <Navibar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="pizza_category/:pname" element={<PizzasubCategory />}></Route>
                    <Route path="/login_signup" element={<Reg />}></Route>
                    <Route path="*" element={<PagNotFound />}></Route>
                </Routes>

            </Suspense>
            <Footer />
        </Router>
    )
}

export default Routing
