# router-demo-project

Small project for practice with learned concepts with react-router as well as expansions of knowledge base.

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
