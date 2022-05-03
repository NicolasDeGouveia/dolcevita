import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

export default function Button({ path, content }) {
  return (
    <Link className="button" to={path}>
      {content}
    </Link>
  );
}

Button.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
