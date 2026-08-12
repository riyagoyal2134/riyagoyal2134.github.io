export default function Contact() {
  return (
    <main id="contact">
        <h2>Contact Me</h2>
        
        <div className="contact-container">

            <div className="contact-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email Icon" className="contact-icon" />
                <p><a href="mailto:riyagoyal1126@gmail.com">Email</a></p>
            </div>
            
            {/* LinkedIn */}
            <div className="contact-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn Icon" className="contact-icon" />
                <p><a href="https://www.linkedin.com/in/riya-goyal-23b6b326a" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>

            {/* Google Scholar */}
            <div className="contact-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar Icon" className="contact-icon" />
                <p><a href="https://scholar.google.com/citations?hl=en&user=qncyVHAAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a></p>
            </div>

            {/* GitHub */}
            <div className="contact-card">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Icon" className="contact-icon" />
                <p><a href="https://github.com/riyagoyal2134" target="_blank" rel="noreferrer">GitHub</a></p>
            </div>

            {/* Orcid */}
            <div className="contact-card">
                <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="Orcid Icon" className="contact-icon" />
                <p><a href="https://orcid.org/0009-0009-0245-6777" target="_blank" rel="noreferrer">Orcid</a></p>
            </div>
            
            {/*ArXiv*/
            <div className="contact-card">
                <img src="/arxiv.svg" alt="ArXiv Icon" className="contact-icon" />
                <p><a href="https://arxiv.org/search/math?query=Goyal%2C+Riya&searchtype=author&abstracts=show&order=-announced_date_first&size=50" target="_blank" rel="noreferrer">ArXiv</a></p>
            </div>}
        </div>
    </main>
  )
}