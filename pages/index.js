import Head from "next/head";
import { css } from "@stitches/core";

const body = css({
  padding: 40,
});

const button = css({
  appearance: "none",
  border: "none",
  height: 25,
  fontSize: 13,
  borderRadius: "9999px",
  backgroundColor: "transparent",
  marginRight: 10,

  variants: {
    // MODO 1 -  VARIANT
    variant: {
      gray: {
        backgroundColor: "Gainsboro",
        "&:hover": {
          backgroundColor: "LightGray",
        },
      },
      purple: {
        backgroundColor: "BlueViolet",
        "&:hover": {
          backgroundColor: "DarkViolet",
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
        borderColor: "lightGray",
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: "darkViolet",
        color: "darkViolet",
        "&:hover": {
          color: "white",
        },
      },
    },
  ],

  // MODO 3 -  DEFAULT_VARIANTS
  defaultVariants: {
    variant: "gray",
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
    </div>
  );
}
