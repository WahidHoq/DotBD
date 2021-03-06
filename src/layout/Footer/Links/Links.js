import React from 'react';
import {Link} from 'gatsby';
import { Grid, Typography, Box } from '@material-ui/core';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { makeStyles } from '@material-ui/styles';

import links from '../../../data/Menu';

const useStyles = makeStyles(theme => ({
    headline: {
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        color: '#fff'
    },
    list:{
        display:'flex',
        flexDirection: 'column'
    },
    items:{
        padding: '1px 0'
    },
    link:{
        display: 'flex',
        flexDirection: 'row',
        color: '#fff', 
        textTransform: 'capitalize'       
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.main,
    }
}))


const Links = ({s500}) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignContent={s500 ? "strech" : "center"} justify="center">
            <Typography variant="h5" gutterBottom className={classes.headline}>
                Important Links
            </Typography>
            <ul className={classes.list}>
                {
                    links.map(link => (
                        <li key={link.title} className={classes.items}>                           
                            <Link to={link.path} className={classes.link}>
                                <Box component="span" mr={1} className={classes.icon}>
                                    <MdKeyboardArrowRight/>
                                </Box>
                                <Typography variant="subtitle1">
                                    {link.title}
                                </Typography>   
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Grid>
    )
}

export default Links
