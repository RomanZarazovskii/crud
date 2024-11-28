const BASE_URL = 'http://localhost:3000';

function removeStudent(id) {
  return fetch(`${BASE_URL}/students/${id}`, {
    method: 'DELETE',
  }).then(r => r.json());
}

removeStudent(4);
