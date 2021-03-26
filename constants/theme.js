import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#F96D41",
    highlight: "#41baf9",
    secondary: "#25282f",

    // colors
    black: "#1E1B26",
    blackLight: "#18141E",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    semiLargeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body5: 26,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto", fontSize: SIZES.largeTitle, lineHeight: 55, fontWeight: "bold" },
    semiLargeTitle: { fontFamily: "Roboto", fontSize: SIZES.semiLargeTitle, lineHeight: 45, fontWeight: "bold" },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto", fontSize: SIZES.h2, lineHeight: 30, fontWeight: "bold" },
    h3: { fontFamily: "Roboto", fontSize: SIZES.h3, lineHeight: 22, fontWeight: "bold" },
    h4: { fontFamily: "Roboto", fontSize: SIZES.h4, lineHeight: 22, fontWeight: "bold" },
    body1: { fontFamily: "Roboto", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto", fontSize: SIZES.body5, lineHeight: 32 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;