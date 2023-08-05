import { VariantProps, tv } from "tailwind-variants";

type Props = {
  children: React.ReactNode;
} & VariantProps<typeof button>;

const button = tv({
  base: "py-2 px-8 rounded-xl text-tprimary ",
  variants: {
    variant: {
      primary: "bg-tsecondary",
    },
    my: {
      md: "my-4",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
export const Button = ({ children, my, variant }: Props) => {
  return <button className={button({ my, variant })}>{children}</button>;
};
