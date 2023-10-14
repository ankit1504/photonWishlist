import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(() => ({
    paperContainer: {
        border: 0,
        boxShadow: "none",
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(45),
    },
    avatar: {
        display: "flex",
        alignSelf: "flex-end",
        borderRadius: 298,
        borderColor: "black",
        backgroundColor: "transparent",
        width: 168,
        height: 173,
    },
    wellDone: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    successfully: {
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center',
        padding: theme.spacing(3, 16),
        color: theme.palette.text.primary,
    },
    wishlistId: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center',
        padding: theme.spacing(3),
        color: theme.palette.text.primary,
    },
    proceedFurther: {
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    barcodeBtn: {
        height: 48,
        fontSize: 16,
        fontWeight: 600,
        textTransform: 'capitalize',
        flex: 1,
        color: 'black',
        backgroundColor: 'white',
        border: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    actionBtn: {
        height: 48,
        fontSize: 16,
        fontWeight: 600,
        textTransform: 'capitalize',
        flex: 1,
        color: theme.palette.IMPrimary.contrastText,
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black',
        },
    },
    btn: {
        display: 'flex',
        gap: theme.spacing(4),
        alignItems: 'center',
        position: 'relative',
        textTransform: 'capitalize',
        top: 200,
        padding: theme.spacing(4, 2),
        boxShadow: '0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12)',
    }
}));

export default useStyles;
