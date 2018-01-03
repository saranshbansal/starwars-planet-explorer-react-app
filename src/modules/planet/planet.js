import React from 'react';

const Planet = props => {
    const normalizedPopulation = 1 + (((props.data.population - 1) * (9)) / (99));
    return (
        <div className="col-md-3 col-lg-2 col-xs-4">
            <div className="circle">
                <div className="planetName">
                    {props.data.name}
                    <br />
                    {'(' + props.data.population + ')'}
                    <br />
                    {'Normalized: ' + normalizedPopulation}
                </div>
            </div>
        </div>
    );
};

export default Planet;