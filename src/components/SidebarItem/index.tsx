import * as C from "./styles";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.svg";
import Mail from "../../assets/mail.svg";
import Book from "../../assets/book.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
};

export const SidebarItem = ({ title, description, icon, path }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea>
          {icon === "profile" && (
            <img src={Profile} alt="profile" width={24} height={24} />
          )}
          {icon === "book" && (
            <img src={Book} alt="profile" width={24} height={24} />
          )}
          {icon === "mail" && (
            <img src={Mail} alt="profile" width={24} height={24} />
          )}
        </C.IconArea>
        <C.Point></C.Point>
      </Link>
    </C.Container>
  );
};
