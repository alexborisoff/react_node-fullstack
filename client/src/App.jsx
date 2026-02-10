import './App.css';
import { AddShoes } from './pages/AddShoes';
import { Shoe } from './pages/Shoe';
import { Home } from './pages/Home';
import { Routes, Route, NavLink } from 'react-router';

export const App = () => {
    return (
        <>
            {/* create NORMAL navbar */}
            <div className="navbar">
                <NavLink to="/"> HOME </NavLink>
                <NavLink to="/add_shoes"> ADD SHOES </NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add_shoes" element={<AddShoes />} />
                <Route path="/shoe/:id" element={<Shoe />} />
            </Routes>
        </>
    );
};
