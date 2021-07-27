import Direction from "../enums/Direction";


class Aircraft {
    private position: Array<Array<[number, number]>>;
    private valid: Boolean;
    private static defaultPosition: Array<Array<[number, number]>> = [[[4, 2]], [[2, 3], [3, 3], [4, 3], [5, 3], [6, 3]], [[4, 4]], [[3, 5], [4, 5], [5, 5]]]
    constructor () {
        this.position = Aircraft.defaultPosition
        this.valid = true;
    }

    getPosition() {
        return this.position;
    }
    
    // we move the validation of the move to the ui part, if the move is not valid
    // the move method won't be called from the ui
    move(direction: Direction) {
        if (this.valid) {
            switch (direction) {
                case Direction.Left: {
                    // the x coord of Aircraft is decreasd by 1 when moving left
                    for (let i = 0; i < this.position.length; i++) {
                        for (let j = 0; j < this.position[i].length; j++) {
                            this.position[i][j][0] -= 1;
                        }
                    }
                    break;
                }
    
                case Direction.Right : {
                    // the x coord of Aircraft is increased by 1 when moving right
                    for (let i = 0; i < this.position.length; i++) {
                        for (let j = 0; j < this.position[i].length; j++) {
                            this.position[i][j][0] += 1;
                        }
                    }
                    break;
                }
    
                case Direction.Up: {
                    // the y coord of Aircraft is increased by 1 when moving up
                    for (let i = 0; i < this.position.length; i++) {
                        for (let j = 0; j < this.position[i].length; j++) {
                            this.position[i][j][1] += 1;
                        }
                    }
                    break;
                }
    
                case Direction.Down : {
                    // the y coord of Aircraft is decreased by 1 when moving down
                    for (let i = 0; i < this.position.length; i++) {
                        for (let j = 0; j < this.position[i].length; j++) {
                            this.position[i][j][1] -= 1;
                        }
                    }
                    break;
                }
                
                // to be implemented
                case Direction.Clkwise: {
    
                    break;
                }
    
                case Direction.CounterClkwise : {
    
                    break;
                }
    
            }
        } else {
            console.error('Aircraft is not valid')
        }
        
    }

    reset() {
        this.position = Aircraft.defaultPosition;
    }

    destory() {
        this.valid = false;
    }


}

export default Aircraft
