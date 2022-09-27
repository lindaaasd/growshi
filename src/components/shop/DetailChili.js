import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChiliById } from "../../redux/selectors/chiliSelector";
import Button from "../../style/Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./crud/DeleteModal";
//import { loadChiliesById } from "../../redux/actions/chiliSecondActions";

const editIcon = (
  <FontAwesomeIcon icon={faPenToSquare} size="4x" color="black" />
);

const DetailChili = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chili = useSelector(selectChiliById)(parseInt(id));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadChiliesById(id));
  // }, []);

  return (
    <section>
      <h1 key={id}>Detail {chili?.name} </h1>
      <div>
        <Button variant="text" onClick={() => navigate(`/form/${id}`)}>
          {editIcon}
        </Button>
        <DeleteModal />
      </div>
    </section>
  );
};

export default DetailChili;
