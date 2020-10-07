import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

const FocusOnItem = (props) => {
  //const params = props.match.params.item_id // In routes props got extra methods/fields
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.item_id;
  item: state.items.find((i) => i.id === id);
};

export default connect(mapStateToProps, null)(FocusOnItem);
