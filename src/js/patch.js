const BASE_URL = 'http://localhost:3000';

const studentToUpdate = {
  age: 17,
};

function updateStudent(studentToUpdate, id) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(updateStudent),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/students/${id}`, options)
    .then(r => r.json())
    .then(data => console.log(data));
}

updateStudent(studentToUpdate, 2);
