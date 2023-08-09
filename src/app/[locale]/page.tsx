import { useHeaderStore } from "@/zustand/store";
import HomeComponent from "./components/Home";
import { getAbsoluteUrl } from "../lib/vercelUtils";

type Props = {
  params: {
    locale: string;
  };
};

async function getWorks(locale: string) {
  try {
    const response = await fetch(
      `${getAbsoluteUrl()}/api/works/${locale}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const works = await response.json();
    return works;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function HomePage(props: Props) {
  const works = await getWorks(props.params.locale);

  return <HomeComponent {...props} works={works} />;
}
