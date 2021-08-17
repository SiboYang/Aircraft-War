import { Button, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const CreateGame = () => {
  return (
    <>
    <TextField id="standard-basic" label="Please enter your room name" />
    <Redirect to={`/room`}>
      <Button size="large" variant="contained" color="primary">
        Create
      </Button>
    </Redirect>
    </>
  );
};

export default CreateGame;
