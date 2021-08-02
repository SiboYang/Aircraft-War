import SelectState from "../enums/SelectState"

class SelectBoard {

    private boardState: Array<Array<SelectState>>
    constructor() {
        
        this.boardState = new Array(9)
        for (let i=0; i<9; i++) this.boardState[i] = new Array(9).fill(SelectState.Free)
    }

    /**
     * 
     * @param position the position of aircraft that the player decides to place
     * @returns 
     */
    placeAircraft(position: Array<Array<[number, number]>>) {
        const flatedPosition = position.flat();
        for (let i=0; i<flatedPosition.length; i++) {
            this.boardState[flatedPosition[i][1]][flatedPosition[i][0]] = SelectState.Occupied;
        }
    }

    getBoardState() {
        return this.boardState
    }
}

export default SelectBoard