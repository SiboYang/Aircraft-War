import Direction from "../enums/Direction";
const _ = require("lodash");

class Aircraft {
  private position: Array<Array<[number, number]>>;
  private valid: Boolean;
  private static defaultPosition: Array<Array<[number, number]>> = [
    [[4, 6]],
    [
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
      [6, 5],
    ],
    [[4, 4]],
    [
      [3, 3],
      [4, 3],
      [5, 3],
    ],
  ];
  constructor() {
    this.position = Aircraft.defaultPosition;
    this.valid = true;
  }

  getPosition() {
    if (this.valid) {
      return this.position;
    } else {
      return [];
    }
  }

  move(direction: Direction) {
    const positionCopy = _.cloneDeep(this.getPosition());
    if (this.valid) {
      switch (direction) {
        case Direction.Left: {
          // the x coord of Aircraft is decreasd by 1 when moving left
          for (let i = 0; i < positionCopy.length; i++) {
            for (let j = 0; j < positionCopy[i].length; j++) {
              positionCopy[i][j][0] -= 1;
            }
          }
          break;
        }

        case Direction.Right: {
          // the x coord of Aircraft is increased by 1 when moving right
          for (let i = 0; i < positionCopy.length; i++) {
            for (let j = 0; j < positionCopy[i].length; j++) {
              positionCopy[i][j][0] += 1;
            }
          }
          break;
        }

        case Direction.Up: {
          // the y coord of Aircraft is increased by 1 when moving up
          for (let i = 0; i < positionCopy.length; i++) {
            for (let j = 0; j < positionCopy[i].length; j++) {
              positionCopy[i][j][1] += 1;
            }
          }
          break;
        }

        case Direction.Down: {
          // the y coord of Aircraft is decreased by 1 when moving down
          for (let i = 0; i < positionCopy.length; i++) {
            for (let j = 0; j < positionCopy[i].length; j++) {
              positionCopy[i][j][1] -= 1;
            }
          }
          break;
        }

        // to be implemented
        case Direction.CounterClkwise: {
          const [centerX, centerY] = positionCopy[1][2]; // this is the rotation center
          for (let i = 0; i < positionCopy.length; i++) {
            for (let j = 0; j < positionCopy[i].length; j++) {
              const [originalX, originalY] = positionCopy[i][j];
              positionCopy[i][j][0] = centerX - (originalY - centerY);
              positionCopy[i][j][1] = centerY + (originalX - centerX);
            }
          }

          break;
        }

        default: {
          console.error("This is not a valid move command");
        }
      }
    } else {
      console.error("Aircraft is not valid");
    }

    //check the validity of the move
    const coords = positionCopy.flat(2);
    if (coords.every((element: number) => element > -1 && element < 9)) {
      this.position = positionCopy;
    }
  }

  reset() {
    this.position = Aircraft.defaultPosition;
  }

  destory() {
    this.valid = false;
  }

  validity() {
    return this.valid;
  }
}

export default Aircraft;
