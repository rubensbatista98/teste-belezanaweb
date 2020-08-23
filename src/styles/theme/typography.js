import { colorGrade } from "./colors";

const typography = {
  title: {
    sizes: {
      1: "14px",
      2: "18px",
    },

    colors: {
      primary: colorGrade.gray[4],
    },
  },
  text: {
    sizes: {
      1: "12px",
      2: "13px",
      3: "14px",
      4: "16px",
      5: "20px",
    },

    colors: {
      primary: colorGrade.black[1],
      secondary: colorGrade.orange[0],
      tertiary: colorGrade.gray[3],
      quartenary: colorGrade.gray[2],
    },
  },
  weight: {
    regular: 400,
    medium: 500,
  },
};

export default typography;
