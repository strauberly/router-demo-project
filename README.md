# router-demo-project

Small project for practice with learned concepts with react-router as well as expansions of knowledge base.

---

--4 Nov 2022--

- almost there, calling comments field and pushing values to new array, however adding a new comment resets the array and overwrites instead of persisting the data. Going to go back to add quote and see if i might find what I seek there. Or possibly a custom hook.

--3 Nov 2022--

- comments section updates mostly as desired however need to figure it all out as an array that can be pushed to and returned.

Basic logic to follow:

- call comments column and store as an array

- if value at [0] === 'null' -> append with new comment and update column

- if value at [0] !== 'null' -> push new comment to array and update column.

--2 Nov 2022--

- issue for single quote results was remembering that a query ending in .eq() returns an array while .single() returns an object.

-api.js-

```
export async function getSingleQuote(quoteId) {
const { data } = await supabase
.from("quotes")
.select("id, author, text")
.eq("id", quoteId)
.single();

```

- Quotes section now produces desired results.

- Began research into implementation of comments section.

---

--1 Nov 2022--

- application is returning all quotes stored as desired but is not yet returning a single quote as desired just yet.

- are getting a response corresponding with id of selected quote.

- investigate formatting of response.

---

--31 Oct 2022--

- Established supabase backend.
- Need to get data from form established and think hook up to new quote utilizing use http and api added to lecture.
- Added Max's files api.js and use http
- Still researching but looks like we establish all our requests in api.js and then pass them into the custom hook for monitoring the backend details of the http request.
- Application currently writes quotes to supabase backend as desired.

---

--28 Oct 2022--

implemented

- eliminated hard coding in nested paths through useRouteMatch(), location.pathname, and creation of location object.

---

--27 Oct 2022--

implemented:

- created a prompt component utilized if user starts creating a quote and clicks nav away

- created not found page

- utilized useHistory so if data is sent from the new quote we are navigated back to all quotes.

- sorting quote list based url and dynamically changing url

- conditionally render an element based url for load comments

---

--26 Oct 2022--

implemented:

- basics of setting up different routes ie dynamic, switch, nested and conditional

- created main nav bar and wrapped in layout using props.children

- created dummy data to be loaded dynamically in all quotes

- replaced button as a Link in Quote item and wired quote item to a quote detail card

---

---
