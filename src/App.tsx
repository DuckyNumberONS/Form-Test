import React from "react";
import { BlockStack, Page, Grid } from "@shopify/polaris";
import "./App.css";
import VolumeDiscount from "./lib/components/volume-discount";
import General from "./lib/components/general";
import Preview from "./lib/components/preview";

function App() {
  return (
    <main>
      <Page backAction={{ url: "#" }} title="Create volume discount">
        <div>
          <Grid>
            {/* Colum LEFT  */}
            <Grid.Cell columnSpan={{ lg: 6, xl: 7 }}>
              <BlockStack gap="400">
                <General />
                <VolumeDiscount />
              </BlockStack>
            </Grid.Cell>
            {/* Colum RIGHT  */}
            <Grid.Cell columnSpan={{ lg: 6, xl: 5 }}>
              <Preview />
            </Grid.Cell>
          </Grid>
        </div>
      </Page>
    </main>
  );
}

export default App;
