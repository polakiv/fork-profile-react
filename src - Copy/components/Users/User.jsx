import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/placeholder.png";
import { NavLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    textField: {
        margin: 'auto',
        width: '100%',
        float: 'left',
        maxWidth: 500,
    },
}));

let User = ({ user, followingInProgress, unfollow, follow }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} id='rootMain' key={user.id}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={classes.img}
                                    alt={user.name} src={user.image_remote1 != '' ? user.image_remote1 : userPhoto} />
                            </NavLink>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <NavLink to={'/profile/' + user.id}> {user.name}</NavLink>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <NavLink to={'/profile/' + user.id}>
                                        {user.mpn}
                                        {user.isbn}
                                    </NavLink>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    {user.followed
                                        ? <Fab
                                            onClick={() => { unfollow(user.id) }} aria-label="like" className={classes.fab}>
                                            <FavoriteIcon />
                                        </Fab>
                                        : <Fab disabled={followingInProgress
                                            .some(id => id === user.id)}
                                            onClick={() => { follow(user.id) }} aria-label="like" className={classes.fab}>
                                            <FavoriteIcon />
                                        </Fab>}
                                    {user.followed
                                        ? <button
                                            onClick={() => { unfollow(user.id) }}>
                                            Убрать из списка</button>
                                        : <button disabled={followingInProgress
                                            .some(id => id === user.id)}
                                            onClick={() => { follow(user.id) }}>
                                            Это близкий мне человек</button>}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                <NavLink to={'/profile/' + user.id}>{/*Цветы user.status*/}<img src="https://wikirip.site/image/flower/5.png" className="flower0"/> </NavLink>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>)
}

export default User;