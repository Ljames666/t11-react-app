import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uir" element={<About />} />
                <Route path="/*" element={<h1>404 - Not Found </h1>} />
            </Routes>
        </BrowserRouter>
    );
}
