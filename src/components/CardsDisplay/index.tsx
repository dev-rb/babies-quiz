import * as React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import { data } from '../../constants/data';

const CardsDisplay: React.FC<{}> = () => {
    return (
        <GridList cols={5}>
            {data.map((data) =>

                <GridListTile>

                </GridListTile>

            )}
        </GridList>
    );
}

export default CardsDisplay;