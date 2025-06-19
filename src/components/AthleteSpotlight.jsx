import React, { useState } from 'react';

const sportsOptions = ['All Sports', 'Basketball', 'Soccer', 'Tennis', 'Athletics'];
const genderOptions = ['Male', 'Female', 'Other'];

function AthleteSpotlight() {
    const [showSportsDropdown, setShowSportsDropdown] = useState(false);
    const [showMaleDropdown, setShowMaleDropdown] = useState(false);
    const [showFemaleDropdown, setShowFemaleDropdown] = useState(false);

    const [selectedSport, setSelectedSport] = useState('All Sports');
    const [selectedGender, setSelectedGender] = useState('');

    const handleSportsClick = () => {
        setShowSportsDropdown(!showSportsDropdown);
        setShowMaleDropdown(false);
        setShowFemaleDropdown(false);
    };

    const handleMaleClick = () => {
        setShowMaleDropdown(!showMaleDropdown);
        setShowSportsDropdown(false);
        setShowFemaleDropdown(false);
    };

    const handleFemaleClick = () => {
        setShowFemaleDropdown(!showFemaleDropdown);
        setShowSportsDropdown(false);
        setShowMaleDropdown(false);
    };

    const handleSportSelect = (sport) => {
        setSelectedSport(sport);
        setShowSportsDropdown(false);
    };

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setShowMaleDropdown(false);
        setShowFemaleDropdown(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <button onClick={handleSportsClick}>
                        {selectedSport} ▼
                    </button>
                    {showSportsDropdown && (
                        <div style={{
                            position: 'absolute',
                            background: '#222',
                            color: '#fff',
                            borderRadius: '6px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 10,
                        }}>
                            {sportsOptions.map(option => (
                                <div
                                    key={option}
                                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                                    onClick={() => handleSportSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div style={{ position: 'relative' }}>
                    <button onClick={handleMaleClick}>
                        Male ▼
                    </button>
                    {showMaleDropdown && (
                        <div style={{
                            position: 'absolute',
                            background: '#222',
                            color: '#fff',
                            borderRadius: '6px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 10,
                        }}>
                            {genderOptions.map(option => (
                                <div
                                    key={option}
                                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                                    onClick={() => handleGenderSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div style={{ position: 'relative' }}>
                    <button onClick={handleFemaleClick}>
                        Female ▼
                    </button>
                    {showFemaleDropdown && (
                        <div style={{
                            position: 'absolute',
                            background: '#222',
                            color: '#fff',
                            borderRadius: '6px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 10,
                        }}>
                            {genderOptions.map(option => (
                                <div
                                    key={option}
                                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                                    onClick={() => handleGenderSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AthleteSpotlight;