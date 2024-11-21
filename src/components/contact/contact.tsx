import "./contact.css";

const ContactSection = () => {
	return (
		<div className='contact-container'>
			<div className='contact-info'>
				<h2>Nous contacter</h2>
				<p>3045 Sunrize Avenue, 123-456-7890</p>
				<p>Lun - Ven: 9h00 - 20h00,</p>
				<p>Sam - Dim: 9h00 - 22h00</p>
				<p>contacts@esbnyc.com</p>
				<div className='social-icons'>
					<a href='#facebook'>
						<i className='fa fa-facebook'></i>
					</a>
					<a href='#twitter'>
						<i className='fa fa-twitter'></i>
					</a>
					<a href='#instagram'>
						<i className='fa fa-instagram'></i>
					</a>
					<a href='#google'>
						<i className='fa fa-google-plus'></i>
					</a>
				</div>
			</div>
			<form className='contact-form'>
				<input type='text' placeholder='Enter your Name' required />
				<input
					type='email'
					placeholder='Enter a valid email address'
					required
				/>
				<textarea placeholder='Enter your message' required></textarea>
				<button type='submit'>SOUMETTRE</button>
			</form>
		</div>
	);
};

export default ContactSection;
