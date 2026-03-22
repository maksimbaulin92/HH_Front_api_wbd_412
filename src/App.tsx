import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateUserForm } from "./creat-user-form";
import { UserList } from "./user-list";
import { useState } from "react";
import type { UserModel } from "./types";

const App = () => {
  
  //мы тут сделали огромное домашнее задание котора затрагивает весь проект.
  //что то где то изменено в больших количествах

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [editedUser, setEditedUser] = useState<UserModel | null>(null);

  return (
    <div className="d-flex flex-column gap-3 align-items-center p-3">
      <CreateUserForm editedUser={editedUser} onClick={ () => setEditedUser(null) } />
      <UserList editedUser={editedUser} onEditClick={setEditedUser}/>
    </div>
  );
};

export default App;
