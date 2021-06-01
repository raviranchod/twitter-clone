import resolveConfig from "tailwindcss/resolveConfig";
import tailwindcssConfig from "../../tailwind.config";

const tailwindTheme = () => {
  const { theme } = resolveConfig(tailwindcssConfig);

  return { theme };
};

export { tailwindTheme };
