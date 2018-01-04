import React from 'react';

const Planet = props => {
    return (
        <div className="col-md-3 col-lg-2 col-xs-4">
            <div className="circle">
                <div className="planetName">
                    {props.data.name}
                    <br />
                    {'(' + props.data.population + ')'}
                </div>
            </div>
        </div>
    );
};

export default Planet;