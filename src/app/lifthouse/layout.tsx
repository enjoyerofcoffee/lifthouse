import { Layout, Menu } from "antd";
import SiderNav from "./components/sideNav";
import Header from "./components/header";
import { LayoutAnimation } from "../aniamtions/layoutAnimation";
import PageInfo from "./components/pageInfo";

export default function LiftHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutAnimation>
      <Layout className="h-full">
        <SiderNav />
        <Layout className="h-full">
          <Header />
          <PageInfo />
          <Layout>
            <div className="m-6 h-full overflow-auto rounded-lg">
              {children}
            </div>
          </Layout>
        </Layout>
      </Layout>
    </LayoutAnimation>
  );
}
