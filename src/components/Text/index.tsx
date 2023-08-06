import { createElement } from "react";
import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: "text-tprimary",
  variants: {
    my: {
        md: "my-4",
    },
    fontSize: {
      "heading-1": "text-base md:text-4xl leading-8 md:leading-10",
      "body": "",
      sm: "text-sm md:text-base",
      base: "text-base",
      lg: "text-lg",
      xs: "text-xs",
    },
    fontColor: {
      primary: "text-tprimary",
      secondary: "text-tsecondary",
      dark: "text-btn-primary",
      white: "text-white",

    },
    weight: {
      bold: "font-bold",
      normal: "font-normal",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    fontSize: "base",
    weight: "normal",
    fontColor: "white",
  },
});

type Props = {
  children: React.ReactNode;
  as?: "p" | "span" | "h2";
} & VariantProps<typeof text>;

export const Text = ({
  children,
  as = "p",
  weight,
  fontSize,
  fontColor,
  my,
  ...props
}: Props) => {
  return createElement(
    as,
    {
      ...props,
      className: text({
        fontSize,
        my,
        weight,
        fontColor,
      }),
    },
    children
  );
  return <p className={text({})}>{children}</p>;
};
