import React from 'react';
import Planet from '../planet/planet.js';

const PlanetsGrid = (props) => {

    const rows = props.rowdata && props.rowdata.length > 0 && props.rowdata.map((planetInfo, index) => {
        return (<Planet index={index} key={index} data={planetInfo} />);
    });

    return (
        <div className="row">
            { rows }
        </div>
    );
}

export default PlanetsGrid;
