import React from "react";
import { Card, Text, BlockStack, DataTable } from "@shopify/polaris";

const Preview = () => {
  const rows = [
    ["Single", "None", 1, ""],
    ["Duo", "%discount", 2, "10%"],
  ];
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
