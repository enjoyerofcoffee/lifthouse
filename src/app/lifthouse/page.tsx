"use client";

import { PageAnimation } from "../aniamtions/pageAnimation";
import { Card, Typography } from "antd";
import { pageConfig } from "./components/constants";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;
const { Paragraph } = Typography;

export default function Lifthouse() {
  return (
    <PageAnimation>
      <h1>Time to grind 💪</h1>
      <h2>Go to...</h2>
      <div className="grid md:grid-cols-2 lg:flex gap-4">
        {pageConfig.map((config) => (
          <Link href={config.route} key={config.title}>
            <Card
              className="cursor-pointer hover:bg-sky-100"
              cover={
                <Image
                  className="object-cover"
                  src={config.cover}
                  alt={config.title}
                  height={200}
                />
              }
            >
              <Meta
                className="h-24"
                title={config.title}
                description={
                  <Paragraph ellipsis={{ rows: 2 }}>
                    {config.description}
                  </Paragraph>
                }
              />
            </Card>
          </Link>
        ))}
      </div>
    </PageAnimation>
  );
}
