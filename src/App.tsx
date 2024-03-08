import React from 'react';
import './App.css';
import { Header, TeamCard } from "./components";
import teamData from './data/CollegeBasketballTeams.json'; // Assuming teamData is an array of objects

interface TeamInfo {
    school: string;
    name: string;
    city: string;
    state: string;
    // Add other properties if present in your data
}

function App() {
    return (
        <div className="App">
            <Header />
            <div className="CardContainer">
                {teamData.teams.map((teamInfo: TeamInfo, index: number) => (
                    <TeamCard key={index} {...teamInfo} />
                ))}
            </div>
        </div>
    );
}

export default App;
