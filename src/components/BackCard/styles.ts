import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: 200,
        height: 200,
        background: '#ef476f',
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
        fontSize: 20,
    },
    button: {
        bottom: 0,
        position: 'absolute',
        background: '#06d6a0',
        width: 200,
        borderRadius: 0
    }
});