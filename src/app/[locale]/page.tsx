import { useHeaderStore } from "@/zustand/store";
import HomeComponent from "./components/Home";
import { getAbsoluteUrl } from "../lib/vercelUtils";

type Props = {
  params: {
    locale: string;
  };
};

export default async function HomePage(props: Props) {
  const response = await fetch(
    `${getAbsoluteUrl()}/api/works/${props.params.locale}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const works = await response.json();
  return <HomeComponent {...props} works={works} />;
}
