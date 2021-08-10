import { Button, Space, Form, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const SpaceFields = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <h3>Space works for fields</h3>

      <p>
        <strong>Align items vertically using a wrapper Form.Item: </strong>
        {`<Form.Item style={{ marginBottom: 0 }}>`}
      </p>

      <p>
        <strong>Space items horizonatlly using a wrapper Space: </strong>
        {`<Space size="large">`}
      </p>

      <p>
        <strong>Set field widths using inline styles on the nested Form.Item: </strong>
        {`style={{ width: 300 }}`}
      </p>

      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item style={{ marginBottom: 0 }}>
          <Space size="large">
            <Form.Item
              name="year"
              label="Bday Year"
              rules={[{ required: true }]}
              style={{ width: 300 }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item name="month" label="Bday Month" rules={[{ required: true }]}>
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
