import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Page from './page'
function MyApp({ Component, pageProps }: AppProps) {
  return <Page {...pageProps} />
}

export default MyApp
