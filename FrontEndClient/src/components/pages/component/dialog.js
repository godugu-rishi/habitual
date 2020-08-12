import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring'
import { Slide } from 'react-reveal';
import { NeuButton } from "neumorphism-react";
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  neubutton: {
    padding: 15
  },
  imageDiv: {
    width: 300,
    height: 150
  },
  button: {
    padding:15,
    margin:15
}
}));

const Dialog = () => {
  let history = useHistory();
  const classes = useStyles();
  let description = "This is a test description"
  const {images, publicRoutines, userRoutines} = useSelector(state => state.dashboardReducers)
  const temp = useSelector(state => state.dashboardReducers)
  console.log(publicRoutines)
  console.log(images)
  const {uid} = useSelector(state => state.firebase.auth)

  const movetoNextPage = (routine_ID) => {
    history.push('/routine', { routine_ID: routine_ID })
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{justifyContent:'center'}}>
        {images.map((item, i) => (
          <List key={i} style={{justifyContent: 'center' }}>
              <Slide bottom collapse>
                <div className={classes.button}>
                  <NeuButton
                    className={classes.neubutton}
                    onClick={() => { movetoNextPage(publicRoutines[i]._id) }}
                    color="#FFFFFF"
                  >
                    <Typography variant="h4" color="textSecondary" component="p">
                      {publicRoutines[i].title}
                    </Typography>
                    <div >
                      <Image className={classes.imageDiv} src={item} thumbnail />
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {publicRoutines[i].description}
                    </Typography>


                  </NeuButton>
                </div>
              </Slide>
          </List>
        ))}
      </Grid>
      </div>
  )
}

export default Dialog