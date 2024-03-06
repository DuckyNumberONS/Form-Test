import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTransformData from "../../hook/useTransformed";

interface PropsForm {
  children: (props: any) => React.JSX.Element;
}

const Form: React.FC<PropsForm> = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState();
  const transData = useTransformData(data);

  const onSubmit = (dataSubmit: any) => {
    setData(dataSubmit);
  };
  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      {children({ control: control, error: errors })}
    </form>
  );
};
export default Form;
