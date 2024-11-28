const BASE_URL = 'http://localhost:3000';

const newStudentJoe = {
  id: 4,
  name: 'Joe Golberg',
  age: 27,
  email: 'joe.golberg@example.com',
  phone: '777-5678',
};

const newStudentPasha = {
  id: 5,
  name: 'Pasha Mercedes',
  age: 57,
  email: 'pasha.mercedesg@example.com',
  phone: '149-5678',
};

function addStudent(newStudent) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newStudent),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/students`, options).then(r => r.json());
}

addStudent(newStudentJoe);
addStudent(newStudentPasha);
