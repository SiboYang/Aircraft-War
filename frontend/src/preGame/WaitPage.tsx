import { useEffect } from 'react'
//import Chatbox from "../components/chatbox";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {User} from '../../../interfaces/User'
import {socket} from '../connection/socket'


const WaitPage = (props: User) => {


    useEffect(() => {
        socket.on("userJoined", (userInfo: User) => {
            //update the state of view
            console.log(userInfo);
        })
    }, []);

    return (
        <>
        <p>Waiting for another player to join...</p>
        <List>

        </List>
        <div>
        </div>
        </>
    )
}

export default WaitPage