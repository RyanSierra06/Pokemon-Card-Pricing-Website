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
                <Route path="/" element={<SetsPage />} />
                <Route path="/sets/:setId" element={<SetCardsPage />} />
                <Route path="/cards/:cardId" element={<CardsInfoPage />} />
                <Route path="/search/:cardName" element={<SearchCardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;