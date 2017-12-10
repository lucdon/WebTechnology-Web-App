export function fetchUser() {
    return {
      type: "FETCH_USER_FULFILLED",
      payload: {
        name: "Will",
        age: 35,
      }
    }
  }