import React from 'react';

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SelectState from "../enums/SelectState";

interface SelelctSquareProps {
  mode: SelectState;
}

const squareSize = '100%';

const useStyles = makeStyles((theme) => ({
    free: {
      width: squareSize,
      height: squareSize,
    },

    occupied: {
      width: squareSize,
      height: squareSize
    },

    overlapped: {
      width: squareSize,
      height: squareSize,
      backgroundColor: 'black'
    },

    undecided: {
      width: squareSize,
      height: squareSize
    }


}))

const SelectSquare = ({ mode }: SelelctSquareProps) => {
  const classes = useStyles()
  switch (mode) {
    case SelectState.Free:
      return <Button variant='contained' className={classes.free} color='primary'></Button>

    case SelectState.Occupied:
      return <Button variant='contained' className={classes.occupied} ></Button>

    case SelectState.Overlapped:
      return <Button  variant='contained'className={classes.overlapped}></Button>

    case SelectState.Undecided:
      return <Button variant='contained' className={classes.undecided} color='secondary'></Button>
  }
};

export default SelectSquare;
