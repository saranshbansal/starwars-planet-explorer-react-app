import * as request from 'superagent';

export function getPlanetSuggestions(input, sucessCB, errorCB) {
    request.get('https://swapi.co/api/planets/?search=' + input).end((error, response) => {
        if (error && errorCB) {
            //  Call error call back
            errorCB(error);
        } else if (sucessCB) {
            //  Call sucess call back
            sucessCB(response);
        }
    });
}

export function getAllPlanets(sucessCB, errorCB) {
    request.get('https://swapi.co/api/planets/').end((error, response) => {
        if (error && errorCB) {
            //  Call error call back
            errorCB(error);
        } else if (sucessCB) {
            //  Call sucess call back
            sucessCB(response);
        }
    });
}