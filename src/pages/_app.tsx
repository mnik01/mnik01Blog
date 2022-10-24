import type { AppType } from 'next/dist/shared/lib/utils'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'react-notion-x/src/styles.css'
import '../styles/prism-tomorrow.css'
// import 'katex/dist/katex.min.css' uncomment if there will be needed rendering for math equations

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     <ThemeProvider attribute="class">
        <Component {...pageProps} />
     </ThemeProvider>
    </>
  )
}

export default MyApp
