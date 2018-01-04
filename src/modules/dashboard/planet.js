import React from 'react';
import * as util from '../../shared/util.js';

const Planet = (props) => {
    const planetName = props.data.name.toUpperCase();
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16); 
    const style = {
        background: randomColor,
        width: util.calculateDiameter(parseInt(props.data.population, 10)) + 'px',
        height: util.calculateDiameter(parseInt(props.data.population, 10)) + 'px'
    }
    return (
        <div className="planetContainer">
            <div className="circle" style={style}>
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