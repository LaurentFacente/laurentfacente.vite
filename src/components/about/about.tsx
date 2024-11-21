import "./About.css";

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-text-container'>
				<h2 className='about-title'>
					Hello, I'm <div className='violet'>Laurent</div>
				</h2>
				<h3 className='about-title2'>
					<div className='violet'>react</div>front-end developper
				</h3>
				<p className='about-text'>
					Having been passionate about new technologies and the web from a young
					age, I've always been drawn to the digital field. <br></br>
					<br></br>In 2018, alongside my professional activity, I decided to
					venture into creating websites using the CMS platforms WordPress and
					Shopify for people in my circle, and it was a revelatory moment. I
					then chose to leave my job and pursue training with OpenClassrooms to
					structure and deepen the knowledge I had developed on my own and to
					learn real programming languages through practical projects. <br></br>
					<br></br>
					Eight months, seven projects, and two PCs later, I graduated!
					<br></br>
					<br></br>Currently, I am based in the South of France, working as a
					React front-end developer on a large-scale project for a multinational
					company. I am also expanding my expertise in Secure Development.
				</p>
				<a href='/mon-cv.pdf' download>
					<button>Curriculum Vitae</button>
				</a>
			</div>
			<img src='/about_photo.png' alt='Photo' className='about-photo' />
		</div>
	);
};

export default About;
