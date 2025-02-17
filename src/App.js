import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage'
import Menubar from './Components/Menubar';



const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: [<Menubar  key="menubar" />, <MainContainer  key="mainContainer"/>],
     },
     {
      path: "watch",
      element: <WatchPage/>,
     },
  ],
},
])

function App() {
  return (
    <Provider store={store} >
    <div>
     <Head/>
  <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
