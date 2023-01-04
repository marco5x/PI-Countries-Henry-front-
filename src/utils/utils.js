// https://developer.mozilla.org/es/search?q=sort
export const sortAlphabetically = (x, y) => {
    if(x.name < y.name) return -1
    if(y.name < x.name) return 1
    return 0
}

export const sortPopulation = (x, y) => {
    return x.population - y.population
}
