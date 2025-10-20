import { Link } from "react-router-dom";
import { Section } from "../components/ui";
import { NotFoundStyles } from "../css";

export default function NotFound() {
  return (
    <Section>
      <div className={NotFoundStyles.content}>
        <div className={NotFoundStyles.headingContainer}>
          <h1 className={NotFoundStyles.heading}>404</h1>
          <p className={NotFoundStyles.subheading}>Oops! Page not found.</p>
        </div>
        <p>
          Return to{" "}
          <Link to="/" className={NotFoundStyles.link}>
            Home
          </Link>
        </p>
      </div>
    </Section>
  );
}
