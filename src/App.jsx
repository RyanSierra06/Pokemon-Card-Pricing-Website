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
                <Route path="Pokemon-Card-Pricing-Website/" element={<SetsPage />} />
                <Route path="Pokemon-Card-Pricing-Website/sets/:setId" element={<SetCardsPage />} />
                <Route path="Pokemon-Card-Pricing-Website/cards/:cardId" element={<CardsInfoPage />} />
                <Route path="Pokemon-Card-Pricing-Website/search/:cardName" element={<SearchCardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;