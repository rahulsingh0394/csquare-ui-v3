import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AllJson, JsonActions } from './app.actions';

export interface state {
    seoPages: SeoState;
}

export interface SeoState{
    json: any
}

const getJsonFeatureState = createFeatureSelector<SeoState>('reducer');

export const getJson = createSelector(
    getJsonFeatureState,
    store => store
)


export function reducer(state, action: JsonActions): SeoState {
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