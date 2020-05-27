import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {
    image: string,
    letter: string,
    flipCard: any
}

const FrontCard: React.FC<Props> = ({ image, letter, flipCard }) => {
    
    const classes = useStyles();
    
    return (
        <div onClick={flipCard}>
            <Paper className={classes.container}>
                <Typography className={classes.text} variant="h5"> {letter} </Typography>
                <img className={classes.image} src={image} />
                
            </Paper>
        </div>
    );
}

export default FrontCard;