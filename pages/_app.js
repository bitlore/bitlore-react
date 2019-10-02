import React from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Layout from '../components/layout'


class MyApp extends App {
	
	// static async getInitialProps({ Component, router, ctx }) {
	// 	let pageProps = {};
	// 	if (Component.getInitialProps) {
	// 		pageProps = await Component.getInitialProps(ctx);
	// 	}
	// 	return { pageProps, router };
	// }
	
	render() {
		const { Component, pageProps, router } = this.props;
		return (
			<Container>
				<Layout>
					<PageTransition timeout={500} classNames="page-transition">
						<Component {...pageProps} key={router.route} />
					</PageTransition>
				</Layout>
				<style jsx global>{`
					.page-transition-enter {
						opacity: 0;
					}
					.page-transition-enter-active {
						opacity: 1;
						transition: opacity 500ms;
					}
					.page-transition-exit {
						opacity: 1;
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: opacity 500ms;
					}
				`}</style>
			</Container>
		)
	}
}

export default MyApp