import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import FavListPanelsList from "./FavListPanelsList";
import { useDispatch } from "react-redux";
import { isAddingList } from "../store/actions/isAddingListAction";
import { getWatchListsAction } from "../store/actions/listAction";
import FormCreateList from "./FormCreateList";
import { useEffect, useState } from "react";
import axios from "axios";
import { watchListsFromDB } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const FavListPanel = () => {
  const dispatch = useDispatch();
  const { PopUpAddingList } = useSelector((state) => state.utilities);
  const watchLists = useSelector((state) => state.entities.watchLists);

  return (
    <div className="fav-list">
      <div className="fav-header">
        <h4>Watch Lists</h4>
        <FontAwesomeIcon
          onClick={() => dispatch(isAddingList())}
          className="fav-icon"
          icon={faPlusSquare}
        />
      </div>
      <hr />

      {PopUpAddingList ? <FormCreateList /> : ""}
      {watchLists.length > 0 ? (
        <div className="fav-items">
          {watchLists.map((list) => (
            <FavListPanelsList key={list._id} list={list} />
          ))}
        </div>
      ) : (
        <div className="loading-lists-effect">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Loading Lists...</p>
        </div>
      )}
    </div>
  );
};

export default FavListPanel;
