import React from "react";
import { useForm } from "react-hook-form";

interface PropsForm {
  children: (props: any) => React.JSX.Element;
}

const Form: React.FC<PropsForm> = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Data success", data);
  };
  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      {children({ control: control, error: errors })}
    </form>
  );
};
export default Form;
