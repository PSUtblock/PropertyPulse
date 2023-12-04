# PropertyPulse

A Frontend project for CS464P/564 at PSU, PropertyPulse is a Reporting application that shares the current health of properties on a university campus.

To get the frontend working:

1. Navigate to frontend:
2. npm install
3. npm run dev

and env file is required. if you would like to run please reach out to Travis and he can give it to you.

---

---

CURRENT LIBRARIES:

Frontend:

- Programming Language: TypeScript - A syntactical superset of JavaScript.
- Web Framework: React - A JavaScript library for building user interfaces.
- Data Visualization: D3 - A JavaScript library for manipulating documents based on data, often used for creating complex visualizations. We’ll be using it to create a heatmap over the PSU Campus map, and may add additional interactivity.
- Chart.js - Another javascript library to build and design visual charts.
- Build/Development Tool: Vite - A build tool and development server that aims for a faster and leaner development experience.

Backend:

- ~~Runtime: Deno - A secure runtime for JavaScript and TypeScript that is built on V8 and written in Rust.~~
- Final Project Ended with the use of Node and Vite

Database:

- ~~Remote Database: Accessible via a VPN, will connect to a database that Travis provides.~~
- Supabase was implemented for easy creation of an API for custom data related to PSU's Campus Buildings

Network:

- ~~APIs / Data Communication: Facilitated through Deno on the backend.~~
- Supabase library was used to make calls to with the API and retrieve data. Env variables were needed to do so
- 

Operating System:

- Server Operating System: Tested on Chrome and Firefox on MacOS.

---

---

FRONTEND NOTES:

BuildingComponent.tsx:

- Generates a block of building information. Very minimal right now, but when tied to a location using D3, it can be expanded upon.

FavoritesBox.tsx:

- Ideally, will be the box located under the filter options on the main page. I've added an option to favorite buildings in the sidemenu, but once we get the UI set-up, we'll be able to tie it all together, didn't want to get ahead of myself, as we'll have several ways to favorite information.

FilterBox.tsx:

- Perfect as-is, once we're able to filter out returned data and display it we'll be golden. User options save to local storage.

Mainmap.tsx & HeatmapComponent.tsx:

- Has a lot of functionality tied "below", other than just displaying the map. Has the buildings saved, will call building component to display information once tied to a interactive interface.
- The map was far too large for the website, so I tried shrinking it, and then adding a scroll bar (which is currently implemented). I feel like a click/zoom/drag will be the way to go, but that will require the d3 library, which is already installed. I know Ronak mentioned experience with is, so I will leave that up to you guys! I'd rather have the one person who knows it really well to tackle that project, since React and D3 both vie for the DOM.

NavBar.tsx:

- Looks good, calls SideMenu when the hamburger menu is clicked. I used emojis and Unicode symbols, feel free to replace!

SideMenu.tsx:

- Looks good, I tested it with expanding fields when clicked. Added a favorites "star".

---

---

Links to Resources

https://supabase.com/docs
Supabase documentation gives a lot of detailed information as well as examples on how to make calls and use their interface to quickly build out the API you need

https://www.youtube.com/watch?v=7CqlTU9aOR4
Supabase typescript generation of types to be used by Supabase library. This saved so much time, but sadly took a lot of time to find it.

https://developer.mozilla.org/en-US/
MDN web documentation is essential to have when working on web applications. It is handy to reference particular features. IIFE was something that I stumbled upon that helped me with building my data from within an API call.

https://tailwindcss.com/docs/installation
Tailwind documentation for the styling guides. It was very much akin to bootstrap except that I would say the examples are better explained.

https://blog.logrocket.com/using-chart-js-react/#creating-makeshift-data
A blog on how to use chart.js with React. Maybe it was because I was sick and sleep deprived, but I could not wrap my head around how to get these charts implemented. Thankfully this blog was a great guide on how to get some simple charts up and running. Which was exactly what I needed
