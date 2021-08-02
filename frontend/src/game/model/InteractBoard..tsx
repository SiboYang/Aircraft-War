import InteractState from "../enums/InteractState"


class InteractBoard {

    private interactState: Array<Array<InteractState>>
    private opponentState:  Array<Array<InteractState>>
    constructor(opponentState:  Array<Array<InteractState>>) {
        this.interactState = new Array(9).fill(new Array(9).fill(InteractState.Available));
        this.opponentState = opponentState; // maybe make it a deep copy will be better?
    }



    getBoardState() {
        return this.interactState
    }
}