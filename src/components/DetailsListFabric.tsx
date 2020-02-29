import * as React from 'react';
import {DetailsList} from "office-ui-fabric-react";

const items = [
  { key: "1", name: "test1", value: "TestVal 1" },
  { key: "2", name: "test2", value: "TestVal 2" }
];

export const DetailsListFabric = (): JSX.Element => 
    (<DetailsList items={items} />)

