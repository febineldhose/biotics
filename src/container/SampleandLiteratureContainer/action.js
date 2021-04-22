export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const increment = data => ({type: INCREMENT, data});
export const decrement = data => ({type: DECREMENT, count: data});
