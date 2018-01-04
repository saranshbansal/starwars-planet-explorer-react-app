export function deepCompare(ar1, ar2) {
  return JSON.stringify(ar1) === JSON.stringify(ar2);
}

export const planetsUri = 'https://swapi.co/api/planets/?search=';
export const timeoutMsg = 'Only Luke Skywalker can make more than 15 searches in a minute. Commoners, please sit idle for a minute.';

export function calculateDiameter(population) {
  let diameter = 200;
  if (!isNaN(population)) {
    if (population > 10000 && population < 50000) {
      diameter = diameter + 10;
    } else if (population > 50000 && population < 100000) {
      diameter = diameter + 20;
    } else if (population > 100000 && population < 500000) {
      diameter = diameter + 30;
    } else if (population > 500000 && population < 1000000) {
      diameter = diameter + 40;
    } else if (population > 1000000 && population < 20000000) {
      diameter = diameter + 50;
    } else if (population > 20000000 && population < 50000000) {
      diameter = diameter + 60;
    } else if (population > 50000000) {
      diameter = diameter + 70;
    }
  }
  return diameter;
}