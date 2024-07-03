import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';
import './index.css';

let terms = [];

const form = document.getElementById('add-description');
const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);

function syncTermList() {
  reactRoot.render(<TermList terms={terms} onDelete={deleteTerm} />);
}

function deleteTerm(id) {
  terms = terms.filter((item) => item.id !== id);
  syncTermList();
}

function addTerm(title, description) {
  terms.push({
    id: Date.now(),
    title,
    description,
  });
  terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1));

  syncTermList();
}

syncTermList();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  form.reset();

  addTerm(title, description);
});
