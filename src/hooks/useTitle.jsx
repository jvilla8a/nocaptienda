import { useState } from "react";

const useTitle = () => {
  const [title, setTitle] = useState("");

  const updateTitle = (filter) => {
    switch (filter) {
      case "BASEBALL":
        setTitle("Baseball");
        break;
      case "FOOTBALL":
        setTitle("Fútbol Americano");
        break;
      case "BASKETBALL":
        setTitle("Basketball");
        break;
      case "SOCCER":
        setTitle("Fútbol");
        break;
      case "RACING":
        setTitle("Carreras");
        break;
      case "COLLEGE":
        setTitle("Universitario");
        break;
      case "59FIFTY":
        setTitle("59FIFTY");
        break;
      case "LOW PROFILE 59FIFTY":
        setTitle("Low Pro 59FIFTY");
        break;
      case "9FIFTY":
        setTitle("9FIFTY");
        break;
      case "LOW PROFILE 9FIFTY":
        setTitle("Low Pro 9FIFTY");
        break;
      case "39THIRTY":
        setTitle("39THIRTY");
        break;
      case "9FORTY":
        setTitle("9FORTY");
        break;
      case "9TWENTY":
        setTitle("9TWENTY");
        break;
      case "CASUAL CLASSIC":
        setTitle("CASUAL CLASSIC");
        break;
      case "MLB PROPERTIES":
        setTitle("MLB");
        break;
      case "NFL PROPERTIES":
        setTitle("NFL");
        break;
      case "NBA PROPERTIES":
        setTitle("NBA");
        break;
      default:
        setTitle("");
        break;
    }
  };

  return [title, updateTitle];
};

export default useTitle;
