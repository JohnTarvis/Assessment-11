- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  --it matches digits and is used to get the sequence of planets or characters
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  --it is stored in browser history
  
- What does `combineReducers` do? Why are we using it? 
- --for more reusable data

- How does the "Reset to Fresh Exploration" feature work?
- --deletes the reducers and allows a user to visit the app fresh

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  --it reduces complexity in the code

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  --it takes longer to render components
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  --simple is better
  
- Which Star Wars character would make the best React developer, and why?
- --R2D2 because unlike some droids, he can work under pressure
