import { useThemeCustome } from "./ThemeContext";


export const useThemeStyles = (stylesFunction) => {
  const { themeColors } = useThemeCustome();
  return stylesFunction(themeColors);
};
