import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
			<main id="contact">
				<h2>
					<a href="mailto:hello@bitlore.io" id="company-email" class="fancy">hello@bitlore.io</a>
				</h2>
			</main>
			<style jsx>{`
				h2 {
					width: 18em;
					text-align:center;
					white-space:nowrap;
					margin:0 auto;
					text-decoration: none;
				}
			`}</style>
    </Layout>
  );
}