import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as test from '../../actions/retHabitInfo'
import { useSelector, useDispatch } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import 'fontsource-raleway';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { NeuButton } from "neumorphism-react";
import * as routineActions from '../../actions/routineFunctions'
import Beta from './component/beta'
//
const useStyles = makeStyles((theme) => ({
    title: {
        margin:5,
        marginBottom:20,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    dialog: {
        padding:30,
    },
    submitbutton: {
        color: 'linear-gradient(15deg, #3F7D20 30%, #72B01D 90%)',
        height: 48,
        padding: '0 30px',
        marginTop: 20.
    },
    uploadbutton: {
        ///marginTop: 10, 
        //fontSize: 20,
        color: 'white',
        borderWidth: 1,
        borderColor: '#454955',
        marginTop:20,
        paddingLeft:60,
        paddingRight:60,
        //marginRight: '5%',
    },
    multilineinput: {
        margin:20,
    },
    descriptionbox: {
        margin: 200,
    },
    checkbox: {
        marginTop:20,
        //marginRight: '5%',
    },
    greetingImage: {
        display:'Flex',
        alignSelf: 'center',
        //...StyleSheet.absoluteFillObject
        
        backgroundColor: 'transparent',
        maxWidth: '300px',
        //maxHeight: 50,
        //margin: 15,
    },
    header: {
        alignSelf: 'center',
        fontSize:35,
        fontFamily:'raleway',
        //margin: 15,
        //marginLeft:45
    },
    close: {
        right:0,
        position: 'absolute'
    }
}));




const PostDialog = ({ dialog, openDialog, type, routineID }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [pub, setPub] = useState(false)
    const [file, setFile] = useState(null)
    const {uid, displayName} = useSelector(state => state.firebase.auth)
    console.log(displayName)
    const changeText = (e, type) => {
        if (type === 'title') {
            setTitle(e.target.value)
        }
        else if (type === 'desc') {
            setDesc(e.target.value)
        }
        else if (type === 'public') {
            setPub(!pub)
        }
    }

    async function upload(event) {
        console.log(event.target.files[0])
        const fd = new FormData();
        const file = event.target.files[0]
        fd.append('file', file, file.name)
        console.log(event.target.files[0].size)
        setFile(fd)
        // dispatch(documents.sendFile(temp.userID, fd))
    }

    const createRoutine = () => {
        console.log(file)
    dispatch(test.createRoutine(uid, title, desc, pub, file))
    openDialog(!dialog)
    }
    const createPost = () => {
        dispatch(routineActions.createPostWithoutPicture(displayName, title, desc, routineID))
        openDialog(!dialog)
        window.location.reload();
    }

    return (
        <Grid container>
            <Dialog aria-labelledby="customized-dialog-title" open={dialog} maxWidth = {'sm'} fullWidth={true} maxHeight = {'md'} fullHeight={true}>
                <Grid className={classes.close}>
                    <Button onClick={openDialog}><CloseRoundedIcon/></Button>
                </Grid>
                
                <Grid container jusitfyContent="center" direction="column" className={classes.dialog}>
                    <Typography variant="h2" className={classes.header}>Create a Post</Typography>
                    
                    <TextField id="standard-multiline-flexible" label="Title" placeholder="title" onChange={(e) => { changeText(e, 'title') }} className={classes.title} />
                    <TextField
                        id="outlined-textarea"
                        label="Enter a description of the routine"
                        placeholder="Placeholder"
                        multiline
                        variant="outlined"
                        rows={4}
                        onChange={(e) => { changeText(e, 'desc') }}
                        />
                    <Grid container direction="row" jusitfyContent="space-between">
                        <Grid item xs={12} sm={6}>
                            <div style={{ marginBottom: 15 }, {marginRight: 15}, {marginTop: 15}, {alignItems:'center'}}>
                                <Button distance={4} color="#ffffff" radius={4} style={{ padding: 15 }} component="label" >
                                    <input type="file" onChange={upload} style={{ display: "none" }}/>
                                    <Typography style={{color:"#454955"}}>upload a photo</Typography> <Beta style={{padding:15}}/>
                                </Button>
                            </div>
                        </Grid>
                        {type === 'Post' ? null : <Grid item container justifyContent="center" xs={12} sm={6}>
                            
                        </Grid>}
                    </Grid>
                    <div style={{ marginBottom: 15 }, {marginRight: 15}, {marginTop: 15}}>
                        <NeuButton distance={4} color="#ffffff" radius={4} style={{ padding: 15 }} component="label" onClick={createPost}>
                            <Typography style={{color:"#72B01D"}}>SUBMIT</Typography>
                        </NeuButton>
                    </div>
                    {/* public */}
                    {/* photo*/}
                </Grid>
            </Dialog>

        </Grid>
    )
}



export default PostDialog
