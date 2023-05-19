import {Routes, Route} from "react-router-dom";
import Home from './../pages/Home';
import Operations from "../pages/Operations";
import GeneratorString from "../pages/GeneratorString";
import UserRecords from "../pages/UserRecords";

const GeneralRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/operations" element={<Operations/>}/>
            <Route path="/generatorString" element={<GeneratorString/>}/>
            <Route path="/userRecords" element={<UserRecords/>}/>
        </Routes>
    );
}
export default GeneralRoutes;