import './App.css';
import { AddShoes } from './pages/AddShoes';
import { Shoe } from './pages/Shoe';
import { Home } from './pages/Home';
import { Routes, Route, NavLink } from 'react-router';
import { LogIn } from './pages/Login';
import { SignUp } from './pages/SignUp';


export const App = () => {
    return (
        <>
            {/* create NORMAL navbar */}
            <div className="navbar">
                <NavLink to="/"> HOME </NavLink>
                <NavLink to="/add_shoes"> ADD SHOES </NavLink>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add_shoes" element={<AddShoes />} />
                <Route path="/shoe/:id" element={<Shoe />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
};
