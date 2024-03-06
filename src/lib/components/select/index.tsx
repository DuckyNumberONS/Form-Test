import { Select } from "@shopify/polaris";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

interface OptionProps {
  value: any;
  key: any;
  label: string;
}

interface SelectProps {
  label?: string;
  name: string;
  errors?: any;
  errorsOption?: any;
  style?: React.CSSProperties;
  options: Array<OptionProps>;
  defaultValue?: any;
  control: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  number: number;
}

const Selects: React.FC<SelectProps> = ({
  name,
  label,
  errors,
  errorsOption,
  options,
  defaultValue,
  placeholder,
  control,
  style,
  onChange,
  number,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];
  return (
    <>
      <div style={style}>
        <Controller
          control={control}
          render={({ field }) => (
            <Select
              label={label}
              options={options}
              onChange={(value) => {
                field.onChange(value);
                if (onChange) onChange(value);
              }}
              value={field.value}
              placeholder={placeholder}
              error={
                errors &&
                errors?.[name]?.message &&
                keys.map((items) => (
                  <div key={items}>
                    {errors?.[name]?.type === items && (
                      <p>{errors?.[name]?.message}</p>
                    )}
                  </div>
                ))
              }
            />
          )}
          name={name}
          rules={errorsOption}
          defaultValue={defaultValue ? defaultValue : options[0].value}
        />
      </div>
    </>
  );
};
export default Selects;
