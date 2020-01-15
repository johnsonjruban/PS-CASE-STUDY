import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import TimeAgo from "react-timeago";

function CharDeatils(props) {
  let chardetails = props.charlists;
  if (typeof chardetails !== "undefined" && chardetails !== "") {
    return chardetails.map((item, key) => {
      return (
        <div className="col-lg-4 col-sm-6 col-xl-3 col-6">
          <div className="card">
            <Image src={item.image} className="card-img-top image" />
            <div className="overlay">
              <span className="text-left overlay-box name-title">
                {item.name}
              </span>
              <span className="text-left overlay-box name-desc">
                id:{item.id} Created <TimeAgo date={item.created} />
              </span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Status</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">SPECIES</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {item.species}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">GENDER</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {item.gender}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">ORIGIN</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {item.origin.name}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">LAST LOCATION</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {item.location.name}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  } else {
    return "No Data";
  }
}

export default CharDeatils;
