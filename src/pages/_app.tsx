import '@/styles/globals.css'

/**
 * NextJs
 *
 */

import {appWithTranslation} from 'next-i18next';
import {AppProps} from 'next/app'
/**
 * Layout
 */
import Layout from "@/themes/main/layout"
/**
 * React Redux
 */
import {Provider} from 'react-redux'
import store from '@/redux/store'

function MyApp({Component, pageProps}: AppProps) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <Provider store={store}>
            <Layout>
                {getLayout(<Component {...pageProps} />)}
            </Layout>
        </Provider>
    )

}

export default appWithTranslation(MyApp);
