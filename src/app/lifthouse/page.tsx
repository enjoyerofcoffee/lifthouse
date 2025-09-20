import { PageAnimation } from "../aniamtions/pageAnimation";
import { pageConfig } from "./components/constants";
import NavigationCard from "./components/navCards";

export default function Lifthouse() {
  return (
    <PageAnimation>
      <h1>Time to grind 💪</h1>
      <h2>Go to...</h2>
      <div className="grid md:grid-cols-2 lg:flex gap-4">
        {pageConfig.map((config) => (
          <NavigationCard key={config.route} config={config} />
        ))}
      </div>
    </PageAnimation>
  );
}
