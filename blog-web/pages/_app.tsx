import { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/blog.css'
import '../styles/github-markdown.css'
import '../styles/index.css'
import '../styles/react-paginate.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}