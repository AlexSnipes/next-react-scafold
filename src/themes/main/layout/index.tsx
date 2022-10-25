/**
 * Next
 */
import Head from 'next/head'
/**
 * Styles
 */
import "@fontsource/open-sans";
import styles from './layout.module.css'
/**
 * Components
 */
import BottomNavBar from "@/components/layout/BottomNavBar";
//import TopNavBar from "@/components/layout/TopNavBar";

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


			<main className={styles.main}>
				{children}
			</main>

			<footer>
				<a href="" target="_blank" rel="noopener noreferrer">Developed by{' '}</a>
			</footer>

			<BottomNavBar/>
		</>
	)
}

export default Layout;