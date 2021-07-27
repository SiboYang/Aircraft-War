import InteractState from "../enums/InteractState"


class InteractBoard {

    private boardState: Array<Array<InteractState>>
    private opponentState:  Array<Array<InteractState>>
    constructor() {
        this.interactState = new Array(9).fill(new Array(9).fill(InteractState.Available));
    }



    getBoardState() {
        return this.boardState
    }
}