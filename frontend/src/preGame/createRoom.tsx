import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'

    }
})

const CreateRoom = () => {
    const classes = useStyles()


    return (
        <div className={classes.container}>
            <TextField label="Username"/>
            <Button size="large" variant="contained" color="primary">Create</Button>
        </div>
    )
}

export default CreateRoom