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
