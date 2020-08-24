import { colorGrade } from "./colors";
import typography from "./typography";
import sizes from "./sizes";

const buttonPallete = {
  primary: {
    color: colorGrade.orange[0],
    contrastText: colorGrade.white[0],
    hover: {
      color: colorGrade.orange[1],
      contrastText: colorGrade.white[0],
    },
  },
};

const theme = {
  main: {
    colors: {
      primary: colorGrade.orange[0],
      bgColor: colorGrade.gray[0],
      error: colorGrade.red[1],
      focus: colorGrade.purple[0],
      white: colorGrade.white[0],
      borders: [colorGrade.gray[0], colorGrade.gray[1], colorGrade.gray[3]],
      shadows: ["rgba(0,0,29,0.22)", "rgba(0,0,0,0.25)"],
    },
    typography,
    sizes,
    buttonPallete,
  },
};

export default theme;
