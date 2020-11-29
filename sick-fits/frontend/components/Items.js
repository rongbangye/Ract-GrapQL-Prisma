import React, { Component } from "react";
import { Query } from "react-apollo";
// if we want to query stuff in react we need graphql-tag
import gql from "graphql-tag";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      title
      description
      image
      largeImage
      price
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <div>
        <p>Hey Items</p>
        {/*  render props to pass query to the component */}
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return <p>Hey I found {data} items</p>;
          }}
        </Query>
      </div>
    );
  }
}

export default Items;
