import { Button, Space, Upload, Popconfirm } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const SpaceButtons = () => {
  return (
    <>
      <h3>Space works for buttons</h3>

      <Space>
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </>
  );
};
