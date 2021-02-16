import { ADD_TEAMS, ADD_FAVORITE, REMOVE_FAVORITE, ADD_FAVORITES } from "../types"

const initialState = {
    teams: [],
    teamsMap: {},
    favorites: [],
    favoritesMap: {},
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_TEAMS:
        return { 
            ...state, 
            teams: [...payload], 
            teamsMap: mapTeams(payload) 
        }
    case ADD_FAVORITES:
        return { 
            ...state, 
            favorites: [...payload], 
            favoritesMap: mapFavorites(payload) 
        }
    case ADD_FAVORITE:
        return { ...state, 
            favorites: [...state.favorites, payload], 
            favoritesMap: {...state.favoritesMap, [payload.id]: true } 
        }
    case REMOVE_FAVORITE:
        return { ...state, 
            favorites: removeFavorite(payload.id, state.favorites), 
            favoritesMap: {...state.favoritesMap, [payload.id]: false } 
        }

    default:
        return state
    }
}

/**
 * Optimization To make it simple to retrieve team names on each player card without looping 
 * @param {any[]} teams 
 */
function mapTeams(teams) {
    const map = {};

    for (let team of teams) {
        map[team.id] = team.name;
    }

    return map;
}

/**
 * Optimization To make it simple to retrieve favorites on each player card without looping per card
 * @param {any[]} teams 
 */
function mapFavorites(favorites) {
    const map = {};

    for (let favorite of favorites) {
        map[favorite.id] = true;
    }

    return map;
}

function removeFavorite(id, favorites) {
    if (!favorites) return [];
    const newFav = [...favorites]; // for immutability

    const index = favorites.findIndex(fv => fv.id === id);
    newFav.splice(index, index + 1);
    return newFav;
}