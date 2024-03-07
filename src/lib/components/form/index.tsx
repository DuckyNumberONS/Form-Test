import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { option } from "../../redux/selector/optionSelect";
import axios from "axios";

interface PropsForm {
  children: (props: any) => React.JSX.Element;
  nameComponent?: string;
}

const Form: React.FC<PropsForm> = ({ children, nameComponent }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const options = useSelector(option);

  const onSubmit = async (dataSubmit: any) => {
    const outputData = {
      ...dataSubmit,
      options: options,
    };
    switch (nameComponent) {
      case "general":
        try {
          const response = await axios.post(
            "https://65e9575c4bb72f0a9c513027.mockapi.io/demo",
            outputData
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
        break;
      default:
        break;
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      {children({ control: control, error: errors })}
    </form>
  );
};
export default Form;
