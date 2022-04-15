declare interface IAction {
    type: string;
    payload?: any;
}

declare interface IDispatch {
    (action: IAction): any;
}

declare interface IStore {
    getState: () => Partial<AppState>;
    dispatch: IDispatch;
}

declare type IReducer<S> = <A extends Action>(state: Partial<State>, action: A) => Partial<State>;
