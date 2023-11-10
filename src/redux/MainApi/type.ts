export interface InitialState {
    isLoading:boolean
    LoadData:Array<any>
    setViewData: Array<any>
    AddCart:Array<any>
}

export interface LoadDataPayload {
    Limit:any
}