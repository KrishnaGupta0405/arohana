// Teams.js
import React, { useState } from 'react';
import teamData from './teamData.json';
import TeamCard from './TeamCard';
import './Team.css';
import InchargeCard from './InchargeCard';
import { useLocation } from 'react-router-dom';

const Teams = () => {
    const { state } = useLocation();

    // Set default value for tab based on state
    const { tab } = state || { tab: 'core_team' };

    const [activeTab, setActiveTab] = useState(tab);
    const teams = {
        core_team: teamData.core_team,
        web_developer: teamData.web_developer,
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full flex flex-col items-center team-wrapper bg-gray-300">
            <div className="py-5">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 mb-8 font-serif">TEAM</h1>
            </div>

            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-center text-yellow-500">PRINCIPAL</h2>
                <InchargeCard data={teamData.principal[0]} />
            </div>


            {/* Faculty Mentors */}
            <div className="w-full flex flex-col items-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-center text-yellow-500">Faculty Mentors</h2>
                <div className="flex flex-wrap justify-around gap-8">
                    {teamData.incharge.map((member, index) => (
                        <InchargeCard key={index} data={member} />
                    ))}
                </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mx-4 flex-col sm:flex-row">
                <button className={`mr-4 px-6 py-3 mb-4 sm:mb-0 w-full font-bold rounded-lg shadow-lg whitespace-normal ${activeTab === 'core_team' ? 'bg-yellow-500 text-white hover:scale-105' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`} onClick={() => handleTabClick('core_team')}>Core Team</button>
                <button className={`px-6 py-3 w-full font-bold rounded-lg shadow-lg whitespace-normal ${activeTab === 'web_developer' ? 'bg-yellow-500 text-white hover:scale-105' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`} onClick={() => handleTabClick('web_developer')}>Web Development Team</button>
            </div>

            {/* Team Cards */}
            <div className="rounded-lg p-6 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                    {teams[activeTab].map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>

    );
};


export default Teams;
