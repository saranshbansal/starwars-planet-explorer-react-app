import React from 'react';

const Planet = (props) => {
    const planetName = props.data.name;
    
    return (
        <div className="top-buffer col-md-3 col-lg-2 col-xs-4">
            <div className="circle">
                <div className="planetName clickable" onClick={() => { props.showPlanetInfo(planetName)}}>
                    {planetName}
                    {props.fullInfoFilter[planetName] && (
                        <p className="infoContainer">
                            {'Population: ' + props.data.population}<br />
                            {'Gravity: ' + props.data.gravity}<br />
                            {'Orbital Period: ' + props.data.orbital_period}<br />
                            {'Terrain: ' + props.data.terrain}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Planet;