import React, { useRef, useState } from "react";
import { Button, Form, Input, Spin } from "antd";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function SendEmail() {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  function resetForm() {
    formRef.current?.resetFields();
  }

  const onFinish = async ({ newText }) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
              message: "Please enter your name",
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
              message: "Please enter your email address",
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>

        <Form.Item name={["newText", "message"]} style={{ color: "white" }}>
          <Input.TextArea placeholder="Message" />
        </Form.Item>
        <Form.Item>
          <Button className="btn-primary" type="primary" htmlType="submit" disabled={isLoading}>
            SEND ME A MESSAGE
          </Button>
        </Form.Item>
      </Form>
      {isLoading && <Spin style={{ position: "absolute", bottom: "6rem" }} />}
    </>
  );
}

export default SendEmail;
