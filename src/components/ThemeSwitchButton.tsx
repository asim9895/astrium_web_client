import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggle_theme } from "@/redux/slices/themeSlice";
import { useEffect } from "react";

const ThemeSwitchButton = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.className = theme.theme;
  }, [theme.theme]);
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 py-2 px-3 bg-background/10 rounded-full text-sm text-foreground hover:bg-background/20 focus:outline-none focus:bg-background/20"
        data-hs-theme-click-value="dark"
        onClick={() => dispatch(toggle_theme())}
      >
        {theme.theme === "light" ? (
          <>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            Light{" "}
          </>
        ) : (
          <>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            Dark{" "}
          </>
        )}
      </button>
    </>
  );
};

export default ThemeSwitchButton;