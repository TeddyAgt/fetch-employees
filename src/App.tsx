import { useState } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
    name: {
        first: "Pipou",
        last: "Fripouillou",
    },
    email: "pipou@catmail.com",
    picture: {
        medium: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=72&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
};

function App() {
    const [employee, setEmployee] = useState(sampleEmployee);

    const getEmployee = () => {
        fetch("https://randomuser.me/api?nat=en")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setEmployee(data.results[0]);
            });
    };

    return (
        <div className="App">
            <EmployeeCard employee={employee} />
            <button
                type="button"
                onClick={getEmployee}>
                Get random employee
            </button>
        </div>
    );
}

export default App;
