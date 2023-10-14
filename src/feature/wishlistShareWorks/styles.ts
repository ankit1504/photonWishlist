import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(() => ({
    imageContainer: {
        backgroundColor: "white",
        height: 298,
        display: "flex",
        width: 298,
        position: "relative",
        right: 65,
        borderRadius: 298,
    },
    paperContainer: {
        height: 260,
        padding: theme.spacing(20, 10),
        backgroundColor: "#E4EFF0",
        border: 0,
        boxShadow: "none",
    },
    avatarContainer: {
        bottom: 296,
        left: 0,
        position: "relative",
        borderRadius: 298,
        border: "1px solid #D3D3D3",
    },
    avatar: {
        display: "flex",
        alignSelf: "flex-end",
        borderRadius: 298,
        borderColor: "black",
        backgroundColor: "transparent",
        width: 298,
        height: 298,
    },
    wishlistShareHeader: {
        fontSize: 13,
        fontWeight: 600,
        color: theme.palette.text.primary,
    },
    root: {
        height: 600,
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(4),
        justifyContent: 'space-between',
        boxShadow: 'inset 0px -1px 0px rgba(80, 80, 80, 0.15)',
    },
    icon: {
        alignItems: 'center',
    },
    billingDesk: {
        width: 80,
        height: 80,
        backgroundColor: 'lightBlue',
        borderRadius: theme.spacing(25),
    },
    one: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    drawerContent: {
        padding: theme.spacing(5),
    },
    title: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },
    actionBtn: {
        height: 48,
        fontSize: 16,
        fontWeight: 600,
        flex: 1,
        color: theme.palette.IMPrimary.contrastText,
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black',
        },
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4, 2),
        boxShadow: '0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12)',
    }
}));

export default useStyles;
