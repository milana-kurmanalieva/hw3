export function click() {
  return {
    type: "CLICK",
  };
}

export function addUser(user) {
  return async function (dispatch) {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      options
    );
  };
}
