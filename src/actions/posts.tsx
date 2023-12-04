import axios from "axios";

// export const fetchPosts = (): any => {
//   return async function fetchPostsThunk(dispatch: any, getStaet: any) {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     dispatch({ type: "FETCH_POSTS", payload: response.data });
//   };
// };

export const fetchPosts = (): any => async(dispatch: any, getStaet: any) => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
}
