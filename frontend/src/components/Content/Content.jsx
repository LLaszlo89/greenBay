import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Grid } from "@material-ui/core";
import { downloadItemsToStore } from "../../redux/actions/itemsActions";
import { connect } from "react-redux";

const Content = ({ download_items, list }) => {

  useEffect(() => {
    download_items();
  }, [download_items]);
  return (
    <>
      {list.length > 0 && (
        <Grid container >
          {list.map((item) => (
            <Grid key={item.id} item xs={12} sm={4}>
              <ItemCard {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    download_items: () => dispatch(downloadItemsToStore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
