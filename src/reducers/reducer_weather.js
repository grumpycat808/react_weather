import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    //Handle the payload from the fetch weather action
    switch(action.type) {
        case FETCH_WEATHER:
            //Don't modify state directly by .push
            return state.concat([action.payload.data]);
    }

    return state
}