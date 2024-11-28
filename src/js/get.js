const BASE_URL = 'http://localhost:3000';

function fetchStudents() {
  return fetch(`${BASE_URL}/students`).then(r => r.json());
}

fetchStudents();

function fetchStudentsById(id) {
  return fetch(`${BASE_URL}/students/${id}`).then(r => r.json());
}

fetchStudentsById(1);

fetchStudentsById(3);
