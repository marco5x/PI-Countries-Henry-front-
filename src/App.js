import './App.css';
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from './pages/HomePage/HomePage';
import { FormActivity } from './pages/FormActivity/FormActivity';
import { CountryDetail } from './components/CountryDetail/CountryDetail';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './pages/Error/ErrorPage';

function App() {    
    return (
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/countries' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path=':id' element = {<CountryDetail />} />
            </Route>
            <Route path='/activities' element={<FormActivity />} />
            
            <Route path='*' element={<ErrorPage/>} />   
        </Routes>
    );
}

export default App;
