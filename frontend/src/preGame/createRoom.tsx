import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'

    },

    createButton: {
        marginBottom: '100px',
        marginTop: '10px'
    }
})

const CreateRoom = () => {
    const classes = useStyles()


    return (
        <div className={classes.container}>
            <div>Aircraft War</div>
            <TextField className={classes.createButton} label="Username"/>
            <Button size="large" variant="contained" color="primary">Create</Button>
        </div>
    )
}

export default CreateRoom