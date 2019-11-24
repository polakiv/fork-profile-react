import React from 'react';
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
import NavigationIcon from '@material-ui/icons/Navigation';
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

let Search = (props) => {
  const classes = useStyles();
  let pages = [];
  for (let i = 1; i <= 10; i++) { //   pagesCount вместо 10
    pages.push(i);
  }

  return <div>
    <div className={classes.root} id='rootMain'>
      <Paper className={classes.paper}>
        <form className={classes.container} noValidate autoComplete="off">
          <div className="jkl">
            <div class="vivod">Всего найдено в базе: 332056</div>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              label="Поиск"
              margin="normal"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Искать
          </Button>
          </div>
        </form>
      </Paper>
    </div>
    {
      props.searchusers.map(u => <div className={classes.root} id='rootMain' key={u.id}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <NavLink to={'/profile/' + u.id}>
                  <img className={classes.img}
                    alt={u.name} src={u.image_remote1 != '' ? u.image_remote1 : userPhoto} />
                </NavLink>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <NavLink to={'/profile/' + u.id}> {u.name}</NavLink>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <NavLink to={'/profile/' + u.id}>
                      {u.mpn}
                      {u.isbn}
                    </NavLink>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    {u.followed
                      ? <Fab onClick={() => {
                        props.searchunfollow(u.id)
                      }} aria-label="like" className={classes.fab}>
                        <FavoriteIcon />
                      </Fab>
                      : <Fab disabled onClick={() => {
                        props.searchfollow(u.id)
                      }} aria-label="like" className={classes.fab}>
                        <FavoriteIcon />
                      </Fab>}
                    {u.followed
                      ? <button onClick={() => {
                        props.searchunfollow(u.id)
                      }}>Убрать из списка</button>
                      : <button onClick={() => {
                        props.searchfollow(u.id)
                      }}>Это близкий мне человек</button>}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  <NavLink to={'/profile/' + u.id}>Цветы {u.status} </NavLink>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>)
    }
  </div>
}
export default Search;