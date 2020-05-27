import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: 200,
        height: 200,
        background: '#ffd166',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
    },
    text: {
        fontSize: 50,
        zIndex: 2,
    }
});