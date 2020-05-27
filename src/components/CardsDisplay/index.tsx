import * as React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import { data, animals, letters } from '../../constants/data';
import AnimalCard from '../AnimalCard';

const CardsDisplay: React.FC<{}> = () => {
    return (
        <GridList cellHeight={200} cols={5}>
            {data.map((data, index) =>

                <GridListTile>
                    <AnimalCard answer={data.answer} question={data.question} image={animals[index]} letter={letters[index]} />
                </GridListTile>

            )}
        </GridList>
    );
}

export default CardsDisplay;