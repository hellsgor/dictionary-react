import PropTypes from 'prop-types';
import { TermCard } from './TermCard';
import './TermList.css';

export const TermList = ({ terms }) => {
  return (
    <ul className="term-list">
      {terms.map((item) => (
        <li className="term-list__item" key={item.id}>
          <TermCard title={item.title} description={item.description} />
        </li>
      ))}
    </ul>
  );
};

TermList.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
};
