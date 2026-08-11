export default function Contact() {
  return (
    <main id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
            <p>
                Feel free to reach out on <a href="mailto:riyagoyal1126@gmail.com">riyagoyal1126@gmail.com</a> for collaborations, inquiries, or just to connect!
            </p>
        </div>
        <div className="contact-container">
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
        </div>
    </main>
  )
}