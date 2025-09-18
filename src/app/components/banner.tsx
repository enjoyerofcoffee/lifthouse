import { useEffect, useState } from "react";
import Image from "next/image";
import BannerImage from "./assets/banner.png";
import { LayoutAnimation } from "../aniamtions/layoutAnimation";

const COMPACT_SCREEN = 850;

export default function Banner() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < COMPACT_SCREEN);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LayoutAnimation>
      {isSmallScreen && (
        <Image src={BannerImage} alt="" className="w-full h-auto" />
      )}
    </LayoutAnimation>
  );
}
