import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetsPage from './pages/SetsPage.jsx';
import SetCardsPage from './pages/SetCardsPage';
import CardsInfoPage from './pages/CardsInfoPage';
import SearchCardsPage from "./pages/SearchCardsPage.jsx";
import './css/App.css';
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="PokemonPricingWebsite/" element={<SetsPage />} />
                <Route path="PokemonPricingWebsite/sets/:setId" element={<SetCardsPage />} />
                <Route path="PokemonPricingWebsite/cards/:cardId" element={<CardsInfoPage />} />
                <Route path="PokemonPricingWebsite/search/:cardName" element={<SearchCardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;