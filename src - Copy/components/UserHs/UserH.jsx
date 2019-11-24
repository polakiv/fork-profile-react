import React from 'react';
import styles from "./userHs.module.css";
import userHPhoto from "../../assets/images/placeholder.png";
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

let UserH = ({ userH, followingInProgress, unfollow, follow }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} id='rootMain' key={userH.id}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <NavLink to={'/profile/' + userH.id}>
                                <img className={classes.img}
                                    alt={userH.name} src={userH.image_remote1 != '' ? userH.image_remote1 : userHPhoto} />
                            </NavLink>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <NavLink to={'/profile/' + userH.id}> {userH.name}</NavLink>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <NavLink to={'/profile/' + userH.id}>
                                        {userH.mpn}
                                        {userH.isbn}
                                    </NavLink>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    {userH.followed
                                        ? <Fab
                                            onClick={() => { unfollow(userH.id) }} aria-label="like" className={classes.fab}>
                                            <FavoriteIcon />
                                        </Fab>
                                        : <Fab disabled={followingInProgress
                                            .some(id => id === userH.id)}
                                            onClick={() => { follow(userH.id) }} aria-label="like" className={classes.fab}>
                                            <FavoriteIcon />
                                        </Fab>}
                                    {userH.followed
                                        ? <button
                                            onClick={() => { unfollow(userH.id) }}>
                                            Убрать из списка</button>
                                        : <button disabled={followingInProgress
                                            .some(id => id === userH.id)}
                                            onClick={() => { follow(userH.id) }}>
                                            Это близкий мне человек</button>}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                <NavLink to={'/profile/' + userH.id}>{/*Цветы userH.status*/}<img src="https://wikirip.site/image/flower/5.png" className="flower0"/> </NavLink>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>)
}

export default UserH;