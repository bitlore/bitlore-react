import * as React from 'react'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Layout from '../components/layout'


class MyApp extends App {
	
	render() {
		const { Component, pageProps, router } = this.props;
		return (
			<Layout>
				<PageTransition timeout={500} classNames="page-transition">
					<Component {...pageProps} key={router.route} />
				</PageTransition>
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
			</Layout>
		)
	}
}

export default MyApp