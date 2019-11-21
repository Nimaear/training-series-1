import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
  useHistory,
  useLocation
} from "react-router-dom";

const Home = () => (
  <div>
    Home
    <br />
    <Link to="/news/item1">item1</Link>
    <br />
    <Link to="/news/item2">item2</Link>
    <br />
    <Link to="/news/item3">item3</Link>
    <br />
  </div>
);
const About = () => <div>About</div>;

interface NewsParams {
  itemId: string;
}

const Item1 = () => <div>Item1</div>;
const Item2 = () => <div>Item2</div>;
const Detail = () => <div>Detail</div>;

const News = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Overview
      <Switch>
        <Route path={`${location.pathname}/:itemId`} component={Detail} />
      </Switch>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

const Header = () => {
  const history = useHistory();
  return (
    <>
      <a href="/home">Home</a> -<Link to="/home">Home</Link> -
      <Link to="/news">News</Link> -<Link to="/about">About</Link>
      <button onClick={() => history.push("/home")}>News</button>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/about" component={About} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
