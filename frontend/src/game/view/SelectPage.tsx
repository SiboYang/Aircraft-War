import React, { useState, useEffect, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import SelectSquare from "./SelectSquare";
import Aircraft from "../model/Aircraft";
import SelectBoard from "../model/SelectBoard";
import { Button } from "@material-ui/core";
import Direction from "../enums/Direction";
import SelectState from "../enums/SelectState";
const _ = require("lodash");

const aircraft = new Aircraft();
const board = new SelectBoard();

const useStyles = makeStyles({
  flexContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: Math.min(window.innerHeight, window.innerWidth),
    height: Math.min(window.innerHeight, window.innerWidth),
  },

  flexItems: {
    width: "11%",
    height: "11%",
    position: "relative",
  },
});

const SelectPage = () => {
  const [boardState, setBoardState] = useState(board.getBoardState());
  const [placeable, setPlaceable] = useState(true);
  const [craftCount, setCraftCount] = useState(0); // this record how many aircraft has been placed
  const classes = useStyles();

  useEffect(() => {
    updateBoard(aircraft.getPosition());
  }, []);

  useEffect(() => {
    if (craftCount > 2) {
      console.log("send request to server");
    }
  }, [craftCount]);

  const updateBoard = (aircraftPos: Array<Array<[number, number]>>) => {
    const tempState = _.cloneDeep(board.getBoardState());
    const flatedPosition = aircraftPos.flat();
    setPlaceable(true)
    for (let i = 0; i < flatedPosition.length; i++) {
      if (
        tempState[flatedPosition[i][1]][flatedPosition[i][0]] ===
        SelectState.Occupied
      ) {
        tempState[flatedPosition[i][1]][flatedPosition[i][0]] =
          SelectState.Overlapped;
          setPlaceable(() => false)
      } else {
        tempState[flatedPosition[i][1]][flatedPosition[i][0]] =
          SelectState.Undecided;
      }
    }
    setBoardState(tempState);
  };

  const onKeyDown = (event: any) => {
    // ignore key clicks when all three aircrafts has been placed
    if (craftCount > 2) {
      return;
    }

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
      case 16: //shift to rotate
        aircraft.move(Direction.CounterClkwise);
        updateBoard(aircraft.getPosition());
        break;
      default:
        console.log("not a valid move");
    }
  };

  const placeAircraft = () => {
    if (craftCount < 2) {
      board.placeAircraft(aircraft.getPosition());
      aircraft.reset();
      updateBoard(aircraft.getPosition());
      setPlaceable(false)
    } else {
      board.placeAircraft(aircraft.getPosition());
      aircraft.destory();
      updateBoard(aircraft.getPosition());
      setPlaceable(false)
    }
    setCraftCount((value) => value + 1);
  };

  // need testing
  const renderGrid = () => {
    // flexbox render items from top to bottom, from left to right,
    // I haven't found a way to modify css to make it render items from 
    const resultList = [];
    for (let rowIndex = boardState.length-1; rowIndex >= 0; rowIndex--) {
      resultList.push(
        boardState[rowIndex].map((state: SelectState, colIndex) => (
          <div className={classes.flexItems}>
            <SelectSquare
            key={rowIndex.toString().concat(colIndex.toString())}
            mode={state}
          />
          </div>
          
        ))
      );
    }
    return resultList;
  };

  return (
    <div tabIndex={0} onKeyDown={(event) => onKeyDown(event)}>
      <div className={classes.flexContainer}>
        {renderGrid()}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={!placeable}
        onClick={() => placeAircraft()}
        style={{ position: "relative", left: "500px" }}
      >
        放置
      </Button>
    </div>
  );
};

export default SelectPage;
