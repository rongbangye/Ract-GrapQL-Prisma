// Next Js take care import react, we don't really need to import react
// import react from 'react';
// Use HTML pushState to route from one page to another without having to refresh the page (important when we have data in out cache). Use <Link>

// class Home extends React.Component {
//   render() {
//     return <p>Hey!</p>;
//   }
// }
import Items from "../components/Items";

const Home = (props) => {
  return (
    <div>
      <Items />
    </div>
  );
};

export default Home;
