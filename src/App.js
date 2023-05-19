import GeneralRoutes from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="flex">
                <Sidebar/>
                <div className="content w-100">
                    <GeneralRoutes/>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
