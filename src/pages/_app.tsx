import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import '../styles/prism-tomorrow.css'
// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
