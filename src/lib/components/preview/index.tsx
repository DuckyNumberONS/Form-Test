import React from "react";
import { Card, Text, BlockStack, DataTable } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { option } from "../../redux/selector/optionSelect";

const Preview = () => {
  const options = useSelector(option);
  const rows = options.map((item: any) => {
    const { title, amount, discountType, quantity } = item;
    let values = [title, discountType, quantity];
    if (amount === 0) {
      values.push(null);
    } else {
      values.push(amount);
    }
    return values;
  });

  return (
    <BlockStack gap="400">
      <Card background="bg-surface">
        <BlockStack gap="500">
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Preview
              </Text>
              <Text as="h2" variant="headingMd" alignment="center">
                Buy more and save
              </Text>
              <div style={{ marginTop: 10 }}>
                <Text as="h2" variant="bodySm" fontWeight="regular">
                  Apply for all products in store
                </Text>
              </div>
              <DataTable
                columnContentTypes={["text", "numeric", "numeric", "text"]}
                headings={["Title", "Discount Type", "Quantity", "Amount"]}
                rows={rows}
              />
            </BlockStack>
          </div>
        </BlockStack>
      </Card>
    </BlockStack>
  );
};
export default Preview;
