export default function Header() {
  return (
    <header>
        <div className="container">
            <h1>Riya Goyal</h1>
            <p>PhD Student in Applied Mathematics at New Jersey Institute of Technology</p>
            <div className="button-group">
            <a href="https://www.linkedin.com/in/riya-goyal-23b6b326a" className="cta-button" target="_blank" rel="noreferrer">Let's Connect</a>
            <a href="https://scholar.google.com/citations?hl=en&user=qncyVHAAAAAJ" className="cta-button" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="/CV.pdf" target="_blank" className="cta-button" rel="noreferrer">CV</a>
            </div>
        </div>
    </header>
  )
}