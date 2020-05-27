import * as React from 'react';
import { useStyles } from './styles';
import { Paper, Typography, Button } from '@material-ui/core';

interface Props {
    question: string,
    answer: string
}

const BackCard: React.FC<Props> = ({ question, answer }) => {
    const classes = useStyles();
    const [answerShown, setAnswer] = React.useState(false);
    return (
        <div>
            <Paper className={classes.container}>

                <Typography className={classes.text}> {answerShown ? answer : question} </Typography>

                {answer ? 
                
                    <Button className={classes.button} onClick={() => setAnswer(!answerShown)}>Show {answerShown ? 'Question' : 'Answer'} </Button>
                    
                    :

                    <div/>

                }
                
            </Paper>
        </div>
    );
}

export default BackCard;