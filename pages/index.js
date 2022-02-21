import Head from "next/head";
import { createStitches } from "@stitches/core";

const { css } = createStitches({
  theme: {
    colors: {
      lightPurple: "#b5a8ff",
      basePurple: "#7c4dff",
      darkPurple: "#5c2dff",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
    },
    size: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    radii: {
      round: "9999px",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
    },
  },
});

const body = css({
  padding: "$5",
});

const button = css({
  appearance: "none",
  border: "none",
  borderRadius: "$round",
  backgroundColor: "transparent",
  marginRight: 10,

  variants: {
    // MODO 1 -  VARIANT
    variant: {
      size: {
        1: {
          height: "$5",
          fontSize: "$1",
        },
        2: {
          height: "$7",
          fontSize: "$2",
        },
      },

      gray: {
        backgroundColor: "$gray500",
        "&:hover": {
          backgroundColor: "$gray400",
        },
      },
      purple: {
        backgroundColor: "$basePurple",
        "&:hover": {
          backgroundColor: "$darkPurple",
        },
      },
    },
    // MODO 2 -  CUSTOM_VARIANTS
    outlined: {
      true: {
        border: "1px solid",
        background: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      variant: "gray",
      outlined: true,
      css: {
        borderColor: "$gray600",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "$basePurple",
        color: "$darkPurple",
        "&:hover": {
          color: "white",
        },
      },
    },
  ],

  // MODO 3 -  DEFAULT_VARIANTS
  defaultVariants: {
    variant: "$gray400",
    size: "$2",
  },
});

export default function Home() {
  return (
    <div className={body()}>
      <Head>
        <title>Stitches and radix Demo by Mystrader</title>
      </Head>
      <h2>Normal Aplication</h2>
      <button className={button()}>Button default Variants</button>
      <button className={button({ variant: "purple" })}>
        Button variant purple
      </button>
      <button className={button({ outlined: true })}>
        Button outline true
      </button>

      <h2>compoundVariants</h2>
      <button className={button({ variant: "gray", outlined: true })}>
        Button Coumppond Variants - gray
      </button>
      <button className={button({ variant: "purple", outlined: true })}>
        Button Coumppond Variants - purple
      </button>

      <h2>responsive</h2>
      <button
        className={button({
          size: {
            "@initial": 1,
            "@media (min-width: 768px)": 2,
          },
        })}
      >
        Reponsive Button
      </button>
    </div>
  );
}
