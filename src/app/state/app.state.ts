import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AllJson, JsonActions } from './app.actions';

export interface state {
    seoPages: SeoState;
}

export interface SeoState{
    json: any
}

export const init: SeoState = {
    json: []
}

const getJsonFeatureState = createFeatureSelector<SeoState>('reducer');

export const getJson = createSelector(
    getJsonFeatureState,
    store => store.json
)

export function reducer(state = init, action: JsonActions): SeoState {
    switch (action.type) {
        case AllJson.LoadSuccess: 
        return {
            ...state,
            json: action.payload
        }
        default: 
        return state;
    }
}