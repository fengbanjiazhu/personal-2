import React, { useRef } from "react";
import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function SendEmail() {
  const formRef = useRef(null);

  function resetForm() {
    formRef.current?.resetFields();
  }

  const onFinish = async ({ newText }) => {
    try {
      const res = await emailjs.send(
        "service_xvjx83l",
        "template_yjfhmd5",
        newText,
        "5_umQmyV8eZQZzzDL"
      );
      if (res.status !== 200) throw new Error("Something went wrong, please try again later");

      resetForm();
      toast.success("Successfully send!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      ref={formRef}
      style={{
        margin: "auto",
        maxWidth: 600,
      }}
    >
      <Form.Item
        name={["newText", "name"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name={["newText", "email"]}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input placeholder="Email Address" />
      </Form.Item>

      <Form.Item name={["newText", "message"]} style={{ color: "white" }}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button className="btn-primary" type="primary" htmlType="submit">
          SEND ME A MESSAGE
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SendEmail;
