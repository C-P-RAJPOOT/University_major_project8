// http://localhost:8082/student/allstudents
export function fetchFaculties() {
    return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:8082/faculty/allfaculties");
      const data = await response.json();
      resolve({ data });
    });
  }
  export function fetchFacultyById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch(
        "http://localhost:8082/faculty/seefaculty/" + id
      );
      const data = await response.json();
  
      resolve({ data });
    });
  }
  export function updateFacultyById(update, id) {
    return new Promise(async (resolve) => {
  
      const response = await fetch("http://localhost:8082/faculty/update/" + id, {
        method: "PUT",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
  
      resolve({ data });
    });
  }
  export function fetchFacultyByEmail(emailId) {
    return new Promise(async (resolve, reject) => {
      //TODO: we will not hard-code server URL here
      try {
        const response = await fetch(
          "http://localhost:8082/faculty/viewfaculty/" + emailId
        );
        if (response.ok) {
          const data = await response.json();
         console.log(data);
         
          resolve({ data });
        } else {
          const err = await response.text();
          reject(err);
        }
      } catch (error) {
        reject(error);
      }
  
    });
  }
  