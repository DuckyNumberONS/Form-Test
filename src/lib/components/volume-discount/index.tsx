import { BlockStack, Box, Text } from "@shopify/polaris";
import React, { useState } from "react";
import BoxOption from "../box-option";
import Form from "../form";
import { useDispatch, useSelector } from "react-redux";
import { option } from "../../redux/selector/optionSelect";
import { OptionState } from "../../modal/option";
import { addOption } from "../../redux/action/option";
interface PropsForm {
  error: any;
  control: any;
}
const VolumeDiscount = () => {
  const options = useSelector(option);
  const dispatch = useDispatch();

  const handleAddOption = () => {
    const lastOption = options[options.length - 1];
    const newOption = {
      number: lastOption.number + 1,
      title: " ",
      subtitle: "",
      label: "",
      quantity: lastOption.quantity + 1,
      discountType: "None",
      amount: 0,
    };
    dispatch(addOption(newOption));
  };

  return (
    <Form>
      {(props: PropsForm) => (
        <BlockStack gap="100">
          <Box
            background="bg-surface"
            paddingInlineStart={"400"}
            paddingBlock={"300"}
            shadow="200"
            borderStartStartRadius="300"
            borderStartEndRadius="300"
          >
            <BlockStack gap="500">
              <Text as="h2" variant="headingMd">
                Volume discount rule
              </Text>
            </BlockStack>
          </Box>
          {/* Option box  */}
          {/* map  */}
          {options.map((items: OptionState) => (
            <div key={items.number}>
              <BoxOption
                number={items.number}
                control={props.control}
                error={props.error}
                defaultValue={items}
              />
            </div>
          ))}
          <Box
            background="bg-surface"
            paddingInline={"400"}
            paddingBlock={"600"}
            shadow="200"
            borderEndStartRadius="300"
            borderEndEndRadius="300"
          >
            <button
              style={{
                backgroundColor: "#ed4d2d",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingBlock: 8,
                gap: 6,
              }}
              onClick={handleAddOption}
              type="submit"
            >
              <div
                style={{
                  backgroundColor: "#FFFF",
                  borderRadius: "100%",
                }}
              >
                <img
                  src="./images/plus.png"
                  alt="plus"
                  width={20}
                  height={20}
                />
              </div>
              <p style={{ color: "#FFFF", fontWeight: "bold" }}>Add option</p>
            </button>
          </Box>
        </BlockStack>
      )}
    </Form>
  );
};
export default VolumeDiscount;
