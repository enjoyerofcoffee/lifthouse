import { Button, Divider, Space } from "antd";
import BannerImage from "./assets/banner.png";
import BackgroundImage from "./assets/selfmade.png";
import Image from "next/image";
import Link from "next/link";
import { DemoText } from "./components/demo/demo";

async function getQuote() {
  const quoteReponse = await fetch("https://stoic-quotes.com/api/quote");
  const quote = (await quoteReponse.json()) as {
    text: string;
    author: string;
  };
  return quote;
}

export default async function App() {
  const quote = await getQuote();
  return (
    <div className="h-full">
      <Image className="w-full h-auto md:hidden" src={BannerImage} alt="" />
      <div
        className={`flex h-full bg-no-repeat bg-right bg-fixed items-start md:items-center`}
      >
        <div className="hidden md:block absolute right-0 w-full h-full">
          <Image
            alt="Self Made"
            src={BackgroundImage}
            placeholder="blur"
            fill
            sizes="50vw"
            style={{
              objectFit: "contain",
              objectPosition: "right bottom",
            }}
          />
        </div>
        <div className="md:w-1/2 lg:w-3/4">
          <div className="m-12">
            <h1 className="text-5xl font-bold">LiftHouse 🏋</h1>
            <Divider />
            <p className="text-xl text-gray-500 italic">{quote.text}</p>
            <p className="text-gray-500">- {quote.author}</p>
            <Divider />
            <Space>
              <Link href={"/account/login"}>
                <Button type="primary">Log in</Button>
              </Link>
              <Link href={"/account/signup"}>
                <Button>New here? Sign up!</Button>
              </Link>
            </Space>
            <DemoText />
          </div>
        </div>
      </div>
    </div>
  );
}
