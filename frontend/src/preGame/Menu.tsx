import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },

  buttonGroup: {
    display: "flex",
  },
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>Aircraft War</div>
      <div className={classes.buttonGroup}>
        <Redirect to="/create">
          <Button size="large" variant="contained" color="primary">
            Create
          </Button>
        </Redirect>

        <Redirect to="/join">
          <Button size="large" variant="contained" color="primary">
            Join
          </Button>
        </Redirect>
      </div>
    </div>
  );
};

export default Menu;
