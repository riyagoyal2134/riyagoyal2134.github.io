export default function Header() {
  return (
    <header>
        <div className="header-container">
            
            {/* Left Side: Profile Picture */}
            <div className="header-left">
                <img src="/profile.jpg" alt="Riya Goyal" className="profile-pic" />
            </div>
            
            {/* Right Side: Text and Buttons */}
            <div className="header-right">
                <h1>Riya Goyal</h1>
                <p>Doctoral Student in Mathematical Sciences at New Jersey Institute of Technology</p>
                
                <div className="button-group">
                    <a href="https://www.linkedin.com/in/riya-goyal-23b6b326a" className="cta-button" target="_blank" rel="noreferrer">Let's Connect</a>
                    <a href="https://scholar.google.com/citations?hl=en&user=qncyVHAAAAAJ" className="cta-button" target="_blank" rel="noreferrer">Google Scholar</a>
                </div>
            </div>

        </div>
    </header>
  )
}