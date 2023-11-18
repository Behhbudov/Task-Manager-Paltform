import React, { useState } from "react";
import MemberModal from "../modal/MemberModal";
import USER1 from "../../assets/images/user1.png";
import USER2 from "../../assets/images/user2.png";
import USER3 from "../../assets/images/user3.png";
import USER4 from "../../assets/images/user4.png";
import "./MainHeader.css";

const USER_IMAGES = [
  {
    id: 1,
    name: "Murad",
    image: USER1,
  },
  {
    id: 2,
    name: "Rza",
    image: USER2,
  },
  {
    id: 3,
    name: "Ali",
    image: USER3,
  },
  {
    id: 4,
    name: "Elvin",
    image: USER4,
  },
];

const MainHeader = () => {
  const [users, setUsers] = useState(USER_IMAGES);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const showModalHandler = () => {
    setShowMemberModal(true);
  };

  const closeModalHandler = () => {
    setShowMemberModal(false);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const submitFormHandler = () => {
    const newUser = {
      id: Math.random(),
      name: name,
      image: image,
    };

    setUsers([...users, newUser]);
    setName("");
    setImage("");
    setShowMemberModal(false);
  };

  return (
    <div className="main__header_container">
      <div>
        <div className="main__header_title">
          <h3>USERS</h3>
        </div>
        <div className="main__header__member">
          <div className="images">
            {users.map((user) => (
              <img key={user.id} src={user.image} alt={user.name} />
            ))}
          </div>
          <div className="new__member" onClick={showModalHandler}>
            + New User
          </div>
        </div>
        {showMemberModal && (
          <MemberModal
            onClose={closeModalHandler}
            nameHandler={nameHandler}
            imageHandler={imageHandler}
            submitFormHandler={submitFormHandler}
          />
        )}
      </div>
    </div>
  );
};

export default MainHeader;
