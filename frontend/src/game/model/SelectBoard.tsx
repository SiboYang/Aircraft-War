import SelcectState from "../enums/SelectState"


class SelectBoard {

    private boardState: Array<Array<DisplayState>>
    constructor() {
        this.boardState = new Array(9).fill(new Array(9).fill(DisplayState.Free));
    }

    placePlane(position: Array<Array<[number, number]>>) {
        const flatedPosition = position.flat()
        for (let i=0; i<flatedPosition.length; i++) {
            this.boardState[flatedPosition[i][1]][flatedPosition[i][0]] = DisplayState.Occupied;
        }
    }

    getBoardState() {
        return this.boardState
    }
}