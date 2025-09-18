"use client";

import { Card, Typography } from "antd";
import { PageConfig } from "./constants";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;
const { Paragraph } = Typography;

type NavigationCardProps = {
  config: PageConfig;
};
export default function NavigationCard({ config }: NavigationCardProps) {
  return (
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
            <Paragraph ellipsis={{ rows: 2 }}>{config.description}</Paragraph>
          }
        />
      </Card>
    </Link>
  );
}
