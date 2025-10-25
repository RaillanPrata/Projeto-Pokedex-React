import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/pokemon/:name' element={<PokemonDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;