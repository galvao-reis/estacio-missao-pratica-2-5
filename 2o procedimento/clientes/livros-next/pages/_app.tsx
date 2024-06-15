import 'bootstrap/dist/css/bootstrap.css'
import '../src/app/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps}: AppProps){
    return (
        <>
        <Head>
            <meta name='viewport'
                    content='width=device-width, initial_scale=1 '/>
        </Head>
        <Component {...pageProps}/>
        </>
    )
}

export default MyApp