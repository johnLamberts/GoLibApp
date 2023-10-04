const getTheme = (key: string, fallback?: string) => {
  if (typeof window === "undefined") return undefined;

  let theme;

  try {
    theme = localStorage.getItem(key) || undefined;
  } catch (error) {
    console.log(`FROM GET THEME: ERROR ${error}`);
  }

  return theme || fallback;
};

export default getTheme;
