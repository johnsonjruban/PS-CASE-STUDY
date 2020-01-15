import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { connect } from "react-redux";
import { fetchSuccess, fetchFailure } from "../redux/";
import { Row, Col, Image, Button } from "react-bootstrap";
import "../assets/css/cards.css";
import CharDeatils from "./CharDetails";
import FilterBlock from "./FilterBlock";

function ListUser(props) {
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get(`character?name=${search}&order=${order}`)
      .then(response => {
        props.dispatch(fetchSuccess(response));
      })
      .catch(error => {
        props.dispatch(fetchFailure(error));
      });
  }, [search]);

  const searchByName = str => {
    setSearch(str);
  };

  let characterLists = props.data.results;
  return (
    <div>
      <div>
        <h4>Charecters List</h4>
        <FilterBlock searchByName={searchByName} />
        <Row className="row">
          <CharDeatils charlists={characterLists} />
        </Row>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.listuser.loading,
    error: state.listuser.error,
    data: state.listuser.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
