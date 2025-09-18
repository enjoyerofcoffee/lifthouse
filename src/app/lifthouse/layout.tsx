import { Layout } from "antd";
import Header from "./components/header";
import PageInfo from "./components/pageInfo";
import SideNav from "./components/sideNav";

export default function LiftHouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Layout className="h-full">
        <SideNav />
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
    </div>
  );
}
