import { useNavigate } from "react-router-dom";

// Funcția helper care returnează navigate
export const navigateTo = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return goTo;
};
