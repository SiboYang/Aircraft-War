import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import SelectSquare from "./SelectSquare";
import Aircraft from "../model/Aircraft";
import SelectBoard from "../model/SelectBoard";
import { Button } from "@material-ui/core";
import Direction from "../enums/Direction";
import SelectState from "../enums/SelectState";
const _ = require("lodash");


const useStyles = makeStyles({
    flexContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 'auto 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: Math.min(window.innerHeight, window.innerWidth),
        height: Math.min(window.innerHeight, window.innerWidth)
    },

    flexItems: {
        width: '11%',
        height: '11%',
        position: 'relative'
    }
})

const SelectPage = () => {
  const aircraft = new Aircraft();
  const board = new SelectBoard();
  const [boardState, setBoardState] = useState(board.getBoardState());
  const classes = useStyles();

  useEffect(() => {
      updateBoard(aircraft.getPosition())
  }, [])

  const updateBoard = (aircraftPos: Array<Array<[number, number]>>) => {
    const tempState = _.cloneDeep(board.getBoardState());
    const flatedPosition = aircraftPos.flat()
    for (let i=0; i<flatedPosition.length; i++) {
        if(tempState[flatedPosition[i][1]][flatedPosition[i][0]] === SelectState.Occupied) {
            tempState[flatedPosition[i][1]][flatedPosition[i][0]] = SelectState.Overlapped;
        } else {
            tempState[flatedPosition[i][1]][flatedPosition[i][0]] = SelectState.Undecided;
        }
    }
    setBoardState(tempState)
  }

  const onKeyDown = (event: any) => {
    switch (event.keyCode) {
      case 37: //left
        aircraft.move(Direction.Left);
        updateBoard(aircraft.getPosition());
        break;
      case 38: //up
        aircraft.move(Direction.Up);
        updateBoard(aircraft.getPosition());
        break;
      case 39: //right
        aircraft.move(Direction.Right);
        updateBoard(aircraft.getPosition());
        break;    
      case 40: //down
        aircraft.move(Direction.Down);
        updateBoard(aircraft.getPosition());
        break;  
    }
  };

  return (
    <div tabIndex={0} onKeyDown={(event) => onKeyDown(event)}>
        <div className={classes.flexContainer}>
        {
          boardState.map((row, rowIndex) => {
              return row.map((state: SelectState, colIndex) => 
              <div className={classes.flexItems}><SelectSquare key={rowIndex.toString().concat(colIndex.toString())} mode={state}/></div>)
          })
        }
        </div>
      
      <Button>放置</Button>
    </div>
  );
};

export default SelectPage;
