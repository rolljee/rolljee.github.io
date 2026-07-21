import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="text-center py-5 fade-in">
      <div className="eyebrow mb-2">Error 404</div>
      <h1 className="section-title mb-3">This page got lost</h1>
      <p className="text-secondary mb-4">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </div>
  );
}
