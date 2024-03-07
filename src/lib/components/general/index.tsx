import React from "react";
import { Card, Text, BlockStack, Box } from "@shopify/polaris";

import Form from "../form";
import Input from "../input";
interface PropsForm {
  error: any;
  control: any;
}

const General = () => {
  return (
    <Form nameComponent="general">
      {(props: PropsForm) => (
        <BlockStack gap="100">
          <Card background="bg-surface">
            <BlockStack gap="500">
              <div style={{ marginTop: 10, marginBottom: 10 }}>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    General
                  </Text>
                </BlockStack>
              </div>
            </BlockStack>
            <Input
              control={props.control}
              label="Campaign"
              name="campaign"
              type="text"
              placeholder="Volume discount #2"
              errorsOption={{
                required: {
                  value: true,
                  message: "Campaign is empty",
                },
              }}
              errors={props.error}
            />
            <Input
              control={props.control}
              label="Title"
              name="title"
              type="text"
              style={{ marginTop: 16 }}
              placeholder="Buy more and save"
              errorsOption={{
                required: {
                  value: true,
                  message: "Title is empty",
                },
              }}
              errors={props.error}
            />
            <Input
              control={props.control}
              label="Description"
              name="description"
              type="text"
              style={{ marginTop: 16 }}
              placeholder="Apply for all products in store"
            />
          </Card>
          <Box
            background="bg-surface"
            paddingInline={"400"}
            paddingBlock={"600"}
            shadow="200"
            borderEndEndRadius="300"
            borderEndStartRadius="300"
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#3b65f5",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingBlock: 8,
                gap: 6,
              }}
            >
              <p style={{ color: "#FFFF", fontWeight: "bold" }}>Save</p>
            </button>
          </Box>
        </BlockStack>
      )}
    </Form>
  );
};
export default General;
