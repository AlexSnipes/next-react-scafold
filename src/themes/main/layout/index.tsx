/**
 * Next
 */
import Head from 'next/head'
/**
 * Styles
 */
import "@fontsource/open-sans";
/**
 * Components
 */

/**
 * Layout
 * @param children
 * @constructor
 */
const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>ECommerce</title>
				<meta name="description" content="ECommerce"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				{children}
			</main>

			<footer>
				<a href="" target="_blank" rel="noopener noreferrer">Developed by{' '}</a>
			</footer>
		</>
	)
}

export default Layout;