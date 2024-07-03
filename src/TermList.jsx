import PropTypes from 'prop-types';
import { TermCard } from './TermCard';
import './TermList.css';

export const TermList = ({ terms, onDelete }) => {
  return (
    <ul className="term-list">
      {terms.map((item) => (
        <li className="term-list__item" key={item.id}>
          <TermCard title={item.title} description={item.description} onDelete={onDelete} id={item.id} />
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
  onDelete: PropTypes.func.isRequired,
};
