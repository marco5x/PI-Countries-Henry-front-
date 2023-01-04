import './App.css';
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { HomePage } from './components/HomePage/HomePage';
import { FormActivity } from './components/FormActivity/FormActivity';
import { CountryDetail } from './components/CountryDetail/CountryDetail';
import { Layout } from './components/Layout/Layout';
import { ErrorPage } from './components/Error/ErrorPage';


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/countries' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path=':id' render={({ match }) => <CountryDetail id={match.params.id} />} />
            </Route>
            <Route path='/activities' element={<FormActivity />} />
            
            <Route path='*' element={<ErrorPage/>} />
   
        </Routes>
    );
}

export default App;
