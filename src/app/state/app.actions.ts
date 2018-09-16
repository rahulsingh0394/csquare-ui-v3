import { Action } from "@ngrx/store";

export enum AllJson {
    Load = '[Json] Load',
    LoadSuccess = '[Json] Load Success',
    LoadFail = '[Json] Load Fail',
    LoadFaq = '[Json] Load Faq',
    LoadFaqSuccess = '[Json] Load Faq Success',
    LoadFaqFail = '[Json] Load Faq Fail'
}

export class Load implements Action {
    readonly type = AllJson.Load

    constructor(public payload: any) {}
}

export class LoadFaq implements Action {
    readonly type = AllJson.LoadFaq

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

export class LoadFaqSuccess implements Action {
    readonly type = AllJson.LoadFaqSuccess

    constructor(public payload: any) {}
}

export class LoadFaqFail implements Action {
    readonly type = AllJson.LoadFaqSuccess 

    constructor(public payload: any) {}
}

export type JsonActions = Load | LoadSuccess | LoadFail | LoadFaq | LoadFaqSuccess | LoadFaqFail;