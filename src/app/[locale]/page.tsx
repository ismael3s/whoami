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
    const url = `${getAbsoluteUrl()}/api/works/${locale}`;
    const response = await fetch(url, {
      next: {
        revalidate: 20,
      },
    });
    const works = await response.json();
    return works;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage(props: Props) {
  const works = await getWorks(props.params.locale);
  return <HomeComponent {...props} works={works} />;
}
