import Layout from '../components/layout';

export default function Contact() {
  return (
		<main id="contact">
			<h2>
				<a href="mailto:hello@bitlore.io" id="company-email" className="fancy">hello@bitlore.io</a>
			</h2>
      <style jsx>{`
        h2 {
          width: 18em;
          text-align:center;
          white-space:nowrap;
          margin:0 auto;
          text-decoration: none;
        }
      `}</style>
		</main>
  );
}