import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function ResultModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        // onOk={onToggleModal}
        // onCancel={onToggleModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
