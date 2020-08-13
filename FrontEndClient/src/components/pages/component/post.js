import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { NeuDiv } from "neumorphism-react";
import { Grid, Paper } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import { NeuButton } from "neumorphism-react";
import 'fontsource-antic-slab';
import TextField from '@material-ui/core/TextField';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// title
// avatar
// picture 
// content

const message = `404`;

const useStyles = makeStyles((theme) => ({
    title: {
       
        fontFamily: 'Lato',
        marginLeft:10,
        marginRight:10,
        color:"black",
        fontSize:20
      },
    go: {
        width:'80%'
    },
    comment: {
        width:'20%'
    }
}));

const Post = ({title, description}) => {
    const classes = useStyles();
    console.log(description)
    return (
        <div>
            <div style={{ padding: 15 }}>

                <NeuDiv distance={4} radius={4} color="#ffffff" style={{ padding: 15 }} >

                    <Grid item xs={12}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant='h2' className={classes.title}>{title}</Typography>
                                <Typography style={{color:"black"}, {fontFamliy:'Antic Slab'}}>{description}</Typography>

                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                    <TextField classname={classes.comment} id="outlined-basic" label="Comment" variant="outlined" />

                                    </Grid>
                                    <Grid item xs={6}>

                                    <Button classname={classes.go} variant="outline-success">GO</Button>
                                    </Grid>
                                    
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </NeuDiv>
            </div>
        </div>
    )
}

export default Post