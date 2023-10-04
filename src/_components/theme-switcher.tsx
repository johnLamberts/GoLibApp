import useConfig from "@/hooks/useConfig";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThemeSwitcher() {
  const [config] = useConfig();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });

    return document.body.classList.add(`theme-${config.theme}`);
  }, [location, config]);

  return null;
}
