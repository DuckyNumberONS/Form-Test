import { Box, InlineGrid } from "@shopify/polaris";
import React, { useState } from "react";
import Input from "../input";
import Selects from "../select";
import { discountType } from "../../config/discountType";
import { useDispatch } from "react-redux";
import { removeOption } from "../../redux/action/option";
import { OptionState } from "../../modal/option";

interface PropsBoxOption {
  error: any;
  control: any;
  number: number;
  defaultValue?: OptionState;
}

const BoxOption: React.FC<PropsBoxOption> = ({
  error,
  control,
  number,
  defaultValue,
}) => {
  console.log("🚀 ~ defaultValue:", defaultValue);
  const dispatch = useDispatch();
  const handleRemoveOption = (number: number) => {
    dispatch(removeOption(number));
  };
  const [selectedDiscountType, setSelectedDiscountType] =
    useState<string>("None");

  const handleDiscountTypeChange = (value: string) => {
    setSelectedDiscountType(value);
  };

  return (
    <Box background="bg-surface" shadow="200">
      <div>
        <div
          style={{
            backgroundColor: "#ed4d2b",
            width: "18%",
            paddingLeft: 7,
            paddingTop: 5,
            paddingBottom: 5,
            borderBottomRightRadius: 8,
            borderWidth: 2,
          }}
        >
          <h3
            style={{
              color: "#FFFF",
              fontWeight: "bolder",
            }}
          >
            OPTION {number}
          </h3>
        </div>
        {/* Box content */}
        <div style={{ paddingInline: 20 }}>
          {/* Trash  */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={() => handleRemoveOption(number)}
          >
            <img src="./images/trash.png" alt="trash" width={24} height={24} />
          </div>
          {/* Form products  */}
          <div style={{ marginTop: 10, paddingBottom: 60 }}>
            <InlineGrid gap="1000" columns={3}>
              <Input
                label="Title"
                name={`title`}
                type="text"
                errors={error}
                errorsOption={{
                  required: { value: true, message: "Title is empty" },
                }}
                control={control}
                number={number}
                defaultValue={defaultValue?.title}
              />
              <Input
                label="Subtitle"
                name={`subtitle`}
                type="text"
                control={control}
                number={number}
                defaultValue={defaultValue?.subtitle}
              />
              <Input
                label="Label(optinal)"
                name={`label`}
                type="text"
                control={control}
                number={number}
                defaultValue={defaultValue?.label}
              />
              <Input
                label="Quantity"
                name={`quantity`}
                type="number"
                errors={error}
                errorsOption={{
                  required: { value: true, message: "Quantity is empty" },
                }}
                control={control}
                number={number}
                defaultValue={defaultValue?.quantity}
              />
              <Selects
                label="Discount type"
                name={`discountType`}
                options={discountType}
                control={control}
                onChange={handleDiscountTypeChange}
                number={number}
                defaultValue={defaultValue?.discountType}
              />
              {selectedDiscountType !== "None" && (
                <Input
                  label="Amount"
                  name="amount"
                  type="number"
                  unit="%"
                  errors={error}
                  errorsOption={{
                    required: { value: true, message: "Amount is empty" },
                  }}
                  control={control}
                  number={number}
                  defaultValue={defaultValue?.amount}
                />
              )}
            </InlineGrid>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default BoxOption;
