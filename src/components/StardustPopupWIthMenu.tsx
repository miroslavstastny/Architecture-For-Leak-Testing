import * as React from "react";
import { Popup, Flex, Button, Menu } from "@fluentui/react";

const items = [
  {
    key: "editorials",
    content: "Editorials"
  },
  {
    key: "review",
    content: "Reviews"
  },
  {
    key: "events",
    content: "Upcoming Events"
  }
];

export const PopupWithMenu = (): JSX.Element => {
  const [isOpen, setOpen] = React.useState(false);
  const setOpenCallback = React.useCallback(() => {
    setOpen(open => !open);
  }, []);
  return (
    <Flex
      variables={{
        marginLeft: "100px",
        marginTop: "100px"
      }}
    >
      <Popup
        content={<SimpleMenu onMenuItemClick={setOpenCallback} />}
        open={isOpen}
        variables={{
          marginLeft: "100px",
          marginTop: "100px"
        }}
        trigger={
          <Button content="Click to Open Popup" onClick={setOpenCallback} />
        }
      />
    </Flex>
  );
};

const SimpleMenu = (props: any): JSX.Element => {
  return (
    <Menu
      items={items}
      onItemClick={() => {
        console.log("Inside OnItemClick");
        props.onMenuItemClick();
      }}
    />
  );
};
