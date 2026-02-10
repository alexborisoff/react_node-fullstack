import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoesList } from '../components/ShoesList';
import '../App.css';

export const Home = () => {
    const [listOfShoes, setListOfShoes] = useState([]);

    useEffect(() => {
        document.title = 'Home Page';
        axios.get('http://localhost:3001/shoes').then((response) => {
            setListOfShoes(response.data);
        });
    }, []);
    return (
        <main className="App">
            <ShoesList shoes={listOfShoes} />
        </main>
    );
};
