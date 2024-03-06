import React, { useEffect } from "react";
import { TextField } from "@shopify/polaris";
import { Controller } from "react-hook-form";

type InputType = "text" | "password" | "number" | "email";

interface InputProps {
  label: string;
  name: string;
  errors?: any;
  placeholder?: string;
  errorsOption?: any;
  type: InputType;
  defaultValue?: string | number;
  style?: React.CSSProperties;
  control?: any;
  unit?: any;
  onChange?: (fieldName: string, value: string | number) => void;
  number?: number;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errors,
  placeholder,
  errorsOption,
  style,
  control,
  unit,
  defaultValue,
  type,
  number,
}) => {
  const newName = number + name;
  const keys = errorsOption ? Object.keys(errorsOption) : [];
  const handleChange = (value: any) => {
    const ob = {
      valu: value,
    };
    console.log("🚀 ~ handleChange ~ ob:", ob);
  };
  return (
    <div style={style}>
      <Controller
        control={control}
        name={newName}
        rules={errorsOption}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <TextField
              label={label}
              name={newName}
              type={type}
              placeholder={placeholder}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                handleChange(value);
              }}
              autoComplete="off"
              suffix={unit ? unit : ""}
              error={
                errors &&
                errors?.[newName]?.message &&
                keys.map((items) => (
                  <div key={items}>
                    {errors?.[newName]?.type === items && (
                      <p>{errors?.[newName]?.message}</p>
                    )}
                  </div>
                ))
              }
            />
          </>
        )}
      />
    </div>
  );
};
export default Input;
