import { useState } from "react";
import Modal from "react-modal";
const Add = ({ addNewMovie }) => {
  const [Open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [PosterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const openModal = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const Submit = () => {
    let newMovie = { title, description, date, PosterUrl, rating};
    addNewMovie(newMovie);
    setOpen(false);
  };
  return (
    <div>
      <button onClick={openModal} className="btn1">Add</button>

      <Modal className="modal" isOpen={Open} RequestClose={close}>
        <h1 >Add a Movie</h1>
        <div className="container">
        <form>
        <div className="row">
        <div className="col-25">
          <label>Movie Name</label>
        </div>
          <div className="col-75">
          <input type="url" name="title" onChange={(el) => setTitle(el.target.value)}/>
          </div>
          </div>
          <div className="row">
          <div className="col-25">
          <label>Release Date</label>
          </div>
          <div className="col-75">
          <input  type="number" name="date" onChange={(el) => setDate(el.target.value)}/>
          </div>
          </div>
          <div className="row">
          <div className="col-25">
          <label>Movie Image</label>
          </div>
          <div className="col-75">
          <input type="url" name="PosterUrl" onChange={(el) => setPosterUrl(el.target.value)}/>
          </div>
          </div>
          <div className="row">
          <div className="col-25">
          <label>Movie Rating</label>
          </div>
          <div className="col-75"></div>
          <input type="Number" name="Rating" onChange={(el) => setRating(el.target.value)}/>
          </div>
          <div className="row">
          <div className="col-25">
          <label>Description</label>
          </div>
          <div className="col-25">
          <textarea type="text"name="description" onChange={(el) => setDescription(el.target.value)}/>
          </div>
          </div>
        </form>
        <div className="row">
        <button className="btn" onClick={Submit}>
          Submit
        </button>
        <button className="btn" onClick={close}>
          close
        </button>
        </div>
        </div>
      </Modal>
    </div>
  );
};
export default Add;
