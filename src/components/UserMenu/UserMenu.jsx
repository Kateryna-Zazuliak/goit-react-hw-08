import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userMenu}>
      <p className={css.text}>Welcome, {user.name}!</p>
      <button className={css.btn} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
