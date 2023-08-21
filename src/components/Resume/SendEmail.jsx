import React from "react";
import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";

function SendEmail() {
  const onFinish = async (values) => {
    const textObj = values.newText;

    const formData = new FormData();
    Object.keys(textObj).forEach((key) => formData.append(key, textObj[key]));

    const res = await emailjs.sendForm(
      "service_xvjx83l",
      "template_yjfhmd5",
      formData,
      "5_umQmyV8eZQZzzDL"
    );

    console.log(res);
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
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
