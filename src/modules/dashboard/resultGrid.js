import React from 'react';
import Planet from './planet.js';

const ResultGrid = (props) => {

    const planets = props.rowdata && props.rowdata.length > 0 && props.rowdata.map((planetInfo, index) => {
        return (
            <Planet index={index} key={index} data={planetInfo} fullInfoFilter={props.fullInfoFilter} showPlanetInfo={props.showPlanetInfo} />
        );
    });

    return (
        <div>
            { planets }
        </div>
    );
}

export default ResultGrid;
