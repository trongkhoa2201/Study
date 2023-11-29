import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    QuestionOutlined,
    UserOutlined,
    DashboardOutlined,
    ThunderboltOutlined,
    ClockCircleOutlined,
    CheckOutlined,
    CloseOutlined,
    MoreOutlined,
    CalendarOutlined,
    ScheduleOutlined,
    LogoutOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography, Card, Space, Divider, Row, Col, Table, Dropdown, message, Modal, Form, Input, Select, DatePicker, Flex} from 'antd';
import '../Layout/dashboard.css';
import logoIcon from '../../assets/image5.png'


const { Header, Sider, Content } = Layout;

const handleMenuClick = (e) => {
    message.open({
        type: 'success',
        content: 'Change action successfully, and it will disappear in 03 seconds',
        duration: 3,
    })
    console.log('click', e);
};

const items = [
    {
        label: 'To Do',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'In Progress',
        key: '2',
        icon: <ClockCircleOutlined />,
    },
    {
        label: 'Close',
        key: '3',
        icon: <CloseOutlined />,
        danger: true,
    },
    {
        label: 'Done',
        key: '4',
        icon: <CheckOutlined />,
        danger: true,
        disabled: true,
    },
];

const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);
    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
            validateOnly: true,
            })
            .then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            }
            );
        }, [values]);
        return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
        );
    };

    const { RangePicker } = DatePicker;


const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [selectedAction, setSelectedAction] = useState(null);

    const menuProps = {
        items,
            onClick: (item) => {
            handleMenuClick(item);
            setSelectedAction(item.key);
        },
    };

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);

    const [confirmLoading, setConfirmLoading] = useState(false);

    const showCreateModal = () => {
    setCreateModalOpen(true);
};

    const handleCreateOk = () => {
    // Placeholder function for handling create modal OK
        console.log('Create OK');
        setConfirmLoading(true);

        setTimeout(() => {
        setCreateModalOpen(false);
        setConfirmLoading(false);
    }, 2000);
};

    const handleCreateCancel = () => {
    // Placeholder function for handling create modal cancel
        console.log('Create Cancel');
        setCreateModalOpen(false);
};

    const showViewModal = () => {
    setViewModalOpen(true);
};

    const handleViewOk = () => {
    // Placeholder function for handling view modal OK
        console.log('View OK');
        setConfirmLoading(true);

        setTimeout(() => {
            setViewModalOpen(false);
            setConfirmLoading(false);
    }, 2000);
};

    const handleViewCancel = () => {
    // Placeholder function for handling view modal cancel
    console.log('View Cancel');
    setViewModalOpen(false);
};

    const [formCreate] = Form.useForm();
    const [formView] = Form.useForm();

    return (
        <Layout className='container'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <p>Main Menu</p>
            <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <DashboardOutlined />,
                    label: 'Dashboard',
                },
                {
                    key: '2',
                    icon: <UserOutlined />,
                    label: 'Manage Users',
                },
                {
                    key: '3',
                    icon: <ThunderboltOutlined />,
                    label: 'Manage Projects',
                },
                {
                    key: '4',
                    icon: <QuestionOutlined />,
                    label: 'About Us'
                },
                {
                    key: '5',
                    icon: <LogoutOutlined />,
                    label: 'Logout'
                }
            ]}
            />
        </Sider>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                }}
            />
                EPM Team
            </Header>
            <Content className='content'>
                <Space direction='horizontal' className='status-filter'>
                    <div className="status">
                        <Button type='secondary'>All Status</Button>
                        <Button type='secondary'>On Progress</Button>
                        <Button type='secondary'>Pending</Button>
                        <Button type='secondary'>Done</Button>
                    </div>
                    <Button type='primary' onClick={showCreateModal}><PlusOutlined /> New Project</Button>
                </Space>
                <Row gutter={10} style={{marginTop : 10}}>
                    <Col span={24}>
                            <Card>                                
                                <Space direction='horizontal'>
                                    <small>#P-000441425</small>                                    
                                </Space>
                                    <div className="project-items">
                                        <h4>Redesign Owlio Landing Page Web</h4>
                                        <div className="project-owner">
                                            <img src={logoIcon} alt="" style={{width: 50, height: 50, borderRadius: 100}}/>
                                            <div className="project-title">
                                                <Typography.Paragraph type="secondary" strong style={{ margin: 0 }}>Person in charge</Typography.Paragraph>
                                                <Typography.Text strong style={{ margin: 0 }}>Thành Phản Diện</Typography.Text>
                                            </div>
                                        </div>

                                        <div className="project-owner">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 50, height: 50, background: "#1640D6" }}>
                                                <ScheduleOutlined style={{ color: 'white' }} />
                                            </div>
                                            <div className="project-title">
                                                <Typography.Paragraph type="secondary" strong style={{ margin: 0 }}>Start Date</Typography.Paragraph>
                                                <Typography.Text strong style={{ margin: 0 }}>Tuesday, Nov 29th 2023</Typography.Text>
                                            </div>
                                        </div>

                                        <div className="project-owner">
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 50, height: 50, background: "#1640D6" }}>
                                                <ScheduleOutlined style={{ color: 'white' }} />
                                            </div>
                                            <div className="project-title">
                                                <Typography.Paragraph type="secondary" strong style={{ margin: 0 }}>End Date</Typography.Paragraph>
                                                <Typography.Text strong style={{ margin: 0 }}>Tuesday, Nov 29th 2023</Typography.Text>
                                            </div>
                                        </div>
                                        <Space wrap>
                                            <Dropdown.Button menu={menuProps}>{selectedAction ? items.find((item) => item.key === selectedAction).label : 'Pending'}</Dropdown.Button>
                                        </Space>

                                        <MoreOutlined onClick={showViewModal}/>
                                    </div>
                                    <Space direction='horizontal'>
                                        <CalendarOutlined />
                                        <small>Created on Nov 29th, 2023</small>                                    
                                    </Space>
                            </Card>
                    </Col>

                    <Divider/>

                </Row>
                
                {/* Create Modal */}
                <Modal
                    title="Create Project"
                    open={createModalOpen}
                    onOk={handleCreateOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCreateCancel}
                >
                    <Form form={formCreate} name="createProject" layout="vertical" autoComplete="off">
                    <Form.Item
                        name="projectName"
                        label="Project Name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="personInCharge"
                        label="Person In Charge"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="timeLine" label="Timeline">
                        <RangePicker style={{ width: '100%' }} />
                    </Form.Item>
                    </Form>
                </Modal>

                {/* Update Modal */}
                <Modal
                    title="Project Details"
                    open={viewModalOpen}
                    onOk={handleViewOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleViewCancel}
                >
                    <Form form={formView} name="viewProject" layout="vertical" autoComplete="off">
                    <Form.Item name="timeLine" label="Timeline">
                        <RangePicker style={{ width: '100%' }} />
                    </Form.Item>
                    </Form>
                </Modal>
            </Content>
        </Layout>
        </Layout>
    );
};

export default App;