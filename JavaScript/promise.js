const users = [
  {
    id: 1,
    name: "Usama",
  },
  {
    id: 2,
    name: "Huzaifa",
  },
  {
    id: 3,
    name: "Ali",
  },
  {
    id: 4,
    name: "Bacha khan",
  },
];

const getUsers = () => {
  let usersList = "";
  users.forEach((user) => {
    usersList += `<li>${user.name}</li>`;
  });

  setTimeout(() => {
    document.body.innerHTML = usersList;
  }, 1000);
};

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.name.length > 2) {
        users.push(user);
        resolve("User added successfully");
      } else {
        reject("ERROR: User name is too short");
      }
    }, 2000);
  });
};

const user = {
  id: 5,
  name: "Wali",
};

// getUsers();
createUser(user)
  .then((res) => {
    alert(res);
    getUsers();
  })
  .catch((err) => console.log(err));

// Promises
// const p1 = Promise.resolve("REsolved....");
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let x = false;
//     if (x) {
//       resolve("Promsie Resolved");
//     } else {
//       reject("Promsie Rejected");
//     }
//   }, 2000);
// });

// p2.then((res) => console.log(res)).catch((err) => console.log(err));

// Async / await

const getUsersList = async () => {
  try {
    const res = await fetch(
      "https://www.clientexec.com/api/resource/users/getusers"
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
