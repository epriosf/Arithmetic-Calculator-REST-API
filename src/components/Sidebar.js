import {NavLink} from "react-router-dom";
import {FaClipboardList, FaHome, FaCalculator, FaGripVertical} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="mt-4">
                <li>
                    <NavLink to="/" className="text-dark rounded p-2 w-100 d-inline-block"
                             activeClassname="active"><FaHome className="me-2"/>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/operations" className="text-dark rounded p-2 w-100 d-inline-block"
                             activeClassname="active"><FaCalculator className="me-2"/>Operations</NavLink>
                </li>
                <li>
                    <NavLink to="/generatorString" className="text-dark rounded p-2 w-100 d-inline-block"
                             activeClassname="active"><FaGripVertical className="me-2"/>String Generator</NavLink>
                </li>
                <li>
                    <NavLink to="/userRecords" className="text-dark rounded p-2 w-100 d-inline-block"
                             activeClassname="active"><FaClipboardList className="me-2"/>User Records</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;