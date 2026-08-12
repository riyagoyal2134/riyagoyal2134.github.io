import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education </Link></li>
            <li><Link to="/research">Research & Publications</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/awards">Honors and Awards</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}