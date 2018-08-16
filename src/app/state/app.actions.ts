import { Action } from "@ngrx/store";

export enum AllJson {
    Load = '[Json] Load',
    LoadSuccess = '[Json] Load Success',
    LoadFail = '[Json] Load Fail'
}

export class Load implements Action {
    readonly type = AllJson.Load

    constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
    readonly type = AllJson.LoadSuccess

    constructor(public payload: any) {}
}

export class LoadFail implements Action {
    readonly type = AllJson.LoadSuccess 

    constructor(public payload: any) {}
}

export type JsonActions = Load | LoadSuccess | LoadFail;