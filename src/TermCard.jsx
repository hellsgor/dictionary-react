import PropTypes from 'prop-types';
import './TermCard.css';

export const TermCard = ({ title, description }) => {
  return (
    <div className="term-card">
      <h2 className="term-card__title">{title}</h2>
      {description && <p className="term-card__description">{description}</p>}
    </div>
  );
};

TermCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
