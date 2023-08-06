
import { useHeaderStore } from "@/zustand/store";
import HomeComponent from "./components/Home";

type Props = {
  params: {
    locale: string;
  };
};

export default async function HomePage(props: Props) {
  const response = await fetch(`http://localhost:3000/api/works/${props.params.locale}`);
  const works = await response.json();
  return <HomeComponent {...props} works={works} />;
}
