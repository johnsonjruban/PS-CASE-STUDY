import React from "react";

function FilterBlock(props) {
  return (
    <div>
      <div class="filter_wrap">
        <div class="row">
          <div class="col-lg-6 col-sm-8 col-12">
            <div class="input-group mb-3">
              <input
                type="text"
                id="search-box"
                class="form-control"
                placeholder="Search By Name"
                aria-label="Search By Name"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary grey-bg"
                  type="button"
                  onClick={() =>
                    props.searchByName(
                      document.getElementById("search-box").value
                    )
                  }
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-4 col-12">
            <span class="move-right">
              <select class="browser-default custom-select custom-select-xl mb-3 selectbox_styles">
                <option selected>Sort by ID</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
