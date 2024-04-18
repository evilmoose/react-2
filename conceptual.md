### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  
  The purpose of React Router is to enable navigation between different components in a React application, simulating multiple pages within a single-page application.

- What is a single page application?
  A single-page application (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app, without reloading the page.

- What are some differences between client side and server side routing?

  Some differences between client-side and server-side routing include: client-side routing handles navigation internally within the browser without requesting new pages from the server, leading to faster interactions and less server load, whereas server-side routing reloads the entire page from the server, which can be slower but is beneficial for SEO.

- What are two ways of handling redirects with React Router? When would you use each?
  
  Two ways of handling redirects with React Router are using the <Redirect> component for static redirects, and programmatically using history.push or history.replace for dynamic or conditional redirects.

- What are two different ways to handle page-not-found user experiences using React Router? 
  
  Two different ways to handle page-not-found experiences using React Router are displaying a default "404 Not Found" component using the <Route> component with no path matching, or using a catch-all route with * path to capture all unmatched routes.

- How do you grab URL parameters from within a component using React Router?

  To grab URL parameters within a component using React Router, you can use the useParams hook, which returns an object of key/value pairs of URL parameters.

- What is context in React? When would you use it?

  Context in React is a way to share values like preferences, theme, or user data across all levels of the component tree without having to pass props down manually through each level, useful when many components need access to the same data.

- Describe some differences between class-based components and function
  components in React.

  Some differences between class-based components and function components in React include: class components can hold state and lifecycle methods, whereas function components are simpler and use hooks to manage state and lifecycle events.

- What are some of the problems that hooks were designed to solve?

  Hooks in React were designed to solve issues like sharing stateful logic between components, complex class components, and difficulties in testing and reusing classes by allowing state and other React features to be used in functional components.