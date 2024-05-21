import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page not found! Please go to <Link to="/">home page</Link>!
      </p>
    </div>
  );
}
