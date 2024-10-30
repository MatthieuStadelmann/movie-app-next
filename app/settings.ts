import chroma from "chroma-js";

const colors = {
  foreground: "#032541",
  background: "#dfe6e9",
  backgroundSecondary: "#ffffff",
  accent: "#82B1FF",
  error: "#FF5252",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FFC107",
};

export default {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
  },
  colors: {
    ...colors,
    shadow: chroma(colors.foreground).alpha(0.2).css(),
  },
  sentry: {
    dns: "https://140a6baf7f3da330331b4fc82081983d@o4508104460402688.ingest.de.sentry.io/4508104462434384",
  },
};
