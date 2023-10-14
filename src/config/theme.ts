import { createTheme } from "@mui/material/styles";

interface IMPaletteTransparentOption {
  main8?: string;
  main12?: string;
  main16?: string;
  main24?: string;
  main32?: string;
  main48?: string;
}
interface IMPaletteMainOption {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
  transparent?: IMPaletteTransparentOption;
}

interface IMPaletteColorOptions extends IMPaletteMainOption {
  background?: string;
  border?: string;
}

interface IMPaletteStateColorOptions extends IMPaletteMainOption {
  textDark?: string;
  lightBg?: string;
  border?: string;
}

interface IMpaletteStatusColourOptions {
  initial1: string;
  initial2: string;
  initial3: string;
  ongoing1: string;
  ongoing2: string;
  ongoing3: string;
  ongoing4: string;
  ongoing5: string;
  final1: string;
  final2: string;
  final3: string;
  final4: string;
  final5: string;
}

interface IMPaletteIMActionsColor {
  active?: string;
  hover?: string;
  selected?: string;
  disabled?: string;
  disabledBackground?: string;
  focus?: string;
}

interface IMPaletteTabChipColor {
  background: string;
  info: string;
  transparent: string;
}

interface IMPaletteOtherColor {
  stroke?: string;
  divider?: string;
  backdrop?: string;
  snackbar?: string;
  activeRating?: string;
  background?: string;
  greyTransparent16: string;
  avatarBadge?: string;
  greyBackground: string;
  headerShadowTransparent12: string;
  greyTransparent12: string;
  warningTransparent16: string;
  disabledTransparent16: string;
  completedTransparent16: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    IMPrimary: IMPaletteColorOptions;
    IMSecondary: IMPaletteColorOptions;
    IMSuccess: IMPaletteStateColorOptions;
    IMInfo: IMPaletteStateColorOptions;
    IMWarning: IMPaletteStateColorOptions;
    IMError: IMPaletteStateColorOptions;
    IMActions: IMPaletteIMActionsColor;
    IMStatus: IMpaletteStatusColourOptions;
    IMOther: IMPaletteOtherColor;
    IMTabChip: IMPaletteTabChipColor;
  }
  interface PaletteOptions {
    IMPrimary?: IMPaletteColorOptions;
    IMSecondary?: IMPaletteColorOptions;
    IMSuccess?: IMPaletteStateColorOptions;
    IMInfo?: IMPaletteStateColorOptions;
    IMWarning?: IMPaletteStateColorOptions;
    IMError?: IMPaletteStateColorOptions;
    IMActions: IMPaletteIMActionsColor;
    IMStatus: IMpaletteStatusColourOptions;
    IMOther: IMPaletteOtherColor;
    IMTabChip: IMPaletteTabChipColor;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    divider: "#E3E3E3",
    text: {
      primary: "#212B36",
      secondary: "#637381",
      disabled: "#8D8D8D",
    },
    IMPrimary: {
      main: "#0D3C61",
      dark: "#B72300",
      light: "#FF8B54",
      background: "#DFE3E8",
      border: "#E99D84",
      contrastText: "#FFFFFF",
    },
    IMSecondary: {
      main: "#26A69A",
      dark: "#00766C",
      light: "#64D8CB",
      background: "#F4F6F8",
      border: "#84C4BE",
      contrastText: "#FFFFFF",
    },
    IMTabChip: {
      info: "#006C9C",
      background: "#00B8D929",
      transparent: "#919EAB29",
    },
    IMSuccess: {
      main: "#4CAF50",
      dark: "#3B873E",
      light: "#7BC67E",
      textDark: "#1E4620",
      lightBg: "#EDF7ED",
      border: "#97C899",
      contrastText: "#FFFFFF",
      transparent: {
        main16: "#4CAF5028",
      },
    },
    IMInfo: {
      main: "#2196F3",
      dark: "#0B79D0",
      light: "#64B6F7",
      textDark: "#0D3C61",
      lightBg: "#E9F4FE",
      border: "#81BCEA",
      contrastText: "#FFFFFF",
      transparent: {
        main16: "#2196F329",
      },
    },
    IMWarning: {
      main: "#FF9800",
      dark: "#C77700",
      light: "#FFB547",
      textDark: "#663D00",
      lightBg: "#FFF5E5",
      border: "#F1BD71",
      contrastText: "#1D1D1D",
    },
    IMError: {
      main: "#F44336",
      dark: "#E31B0C",
      light: "#F88078",
      textDark: "#621B16",
      lightBg: "#FEECEB",
      border: "#EB928C",
      contrastText: "#FFFFFF",
    },
    IMStatus: {
      initial1: "#F9A825",
      initial2: "#F9A826",
      initial3: "#E65100",
      ongoing1: "#2196F3",
      ongoing2: "#2962FF",
      ongoing3: "#303F9F",
      ongoing4: "#512DA8",
      ongoing5: "#7CB342",
      final1: "#43A047",
      final2: "#1B5E20",
      final3: "#757575",
      final4: "#9E9E9E",
      final5: "#B71C1C",
    },
    IMActions: {
      active: "#F15927",
      hover: "#B72300",
      selected: "#B72300",
      disabled: "#BDBDBD",
      disabledBackground: "#E0E0E0",
      focus: "#F15927",
    },
    IMOther: {
      stroke: "#C4C4C4",
      divider: "#919EAB",
      backdrop: "#717171",
      snackbar: "#323232",
      activeRating: "#FFB400",
      background: "#F4F6F8",
      greyTransparent16: "#919EAB28",
      avatarBadge: "#36B37E",
      greyBackground: "#505050",
      headerShadowTransparent12: "#919EAB1F",
      greyTransparent12: "#5050501F",
      warningTransparent16: "#FFAB0029",
      disabledTransparent16: "#0D3C6129",
      completedTransparent16: "#4CAF5029",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
    },
  },
  typography: {
    h1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "64px",
      lineHeight: "80px",
    },
    h2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "48px",
      lineHeight: "64px",
    },
    h3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "48px",
    },
    h4: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
    },
    h5: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "30px",
    },
    h6: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "22px",
    },
    body1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
    },
    overline: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
});

export default theme;
