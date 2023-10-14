import React, { useEffect, useState } from "react";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FunctionComponent } from 'react';  
import LeafSvg from '../../assets/Leaf';
import theme from "../../config/theme";
import useStyles from './styles';



const IconInfolist:FunctionComponent = () => {
    const classes = useStyles();

    const mockData =[ {
        "label" : 'Material Type',
        "value" : 'Stainless Steal'
    },
    {
        "label" : 'Application',
        "value" : 'Deck Mount'
    },
    {
        "label" : 'Finish',
        "value" : 'chrome'
    },
    {
        "label" : 'Warranty',
        "value" : '5 Years'
    }]

    return(
        <Box className={classes.container}>
           {mockData.map((item) => {
            return (
                <Box className={classes.container}>

                <LeafSvg  height={50} width={50}/>
            <Box className={classes.childContainer}>
             <Typography className={classes.header}>{item.label}</Typography>
             <Typography className={classes.footer}>{item.value}</Typography>
            </Box>
                </Box>
            )
           })}
       </Box>
    )
}

export default IconInfolist;