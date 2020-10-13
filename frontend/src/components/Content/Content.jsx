import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Grid } from "@material-ui/core";
import { download_items_to_store } from "../../redux/actions/itemsActions";
import { connect } from "react-redux";

const Content = (props) => {
  const { download_items, list } = props;

  useEffect(() => {
    download_items();
  }, [download_items]);

  const ItemsCards = (item) => {

    return (
      <Grid key={item.id} item xs={12} sm={4}>
        <ItemCard {...item} />
      </Grid>
    );
  };

  return (
    <>
      {list.length > 0 && (
        <Grid container spacing={1}>
          {list[0].map((item) => ItemsCards(item))}
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
    download_items: () => dispatch(download_items_to_store()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
