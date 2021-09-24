import styles from './index.module.scss'
import React from 'react'
import { Layout, Menu, Avatar, Tag, Divider, Space } from 'antd'
import * as Icons from '@ant-design/icons'
import {
	CloseCircleOutlined,
	UserOutlined,
	SettingOutlined,
} from '@ant-design/icons'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

// 导航列表
const menuList = [
	{
		title: '首页',
		icon: 'HomeOutlined',
	},
	{
		title: '商品',
		icon: 'AppstoreOutlined',
	},
	{
		title: '用户管理',
		icon: 'UserOutlined',
	},
	{
		title: '角色管理',
		icon: 'SafetyCertificateOutlined',
	},
	{
		title: '图形图表',
		icon: 'AreaChartOutlined',
	},
]

// 导航模板
const menuItem = (data) => {
	return data.map((item) => {
		if (!item.children) {
			return (
				<Menu.Item
					key={item.title}
					icon={item.icon && React.createElement(Icons[item.icon])}>
					{item.title}
				</Menu.Item>
			)
		} else {
			return (
				<SubMenu
					key={item.title}
					title={item.title}
					icon={item.icon && React.createElement(Icons[item.icon])}>
					{menuItem(item.children)}
				</SubMenu>
			)
		}
	})
}

const System = (props) => {
	const backHome = () => {
		props.history.replace('/home')
	}

	return (
		<Layout className='layout-wrap'>
			<Header className='header-wrap'>
				<div>Header</div>
				<CloseCircleOutlined className={styles['icon']} onClick={backHome} />
			</Header>
			<Layout className={styles['content-layout']}>
				<Sider className={styles['content-sider']}>
					<div className={styles['user-wrap']}>
						<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
						<Tag icon={<UserOutlined />} color='blue'>
							Admin
						</Tag>
					</div>
					<Divider orientation='left'>
						<Space>
							<SettingOutlined />
							设置
						</Space>
					</Divider>
					<Menu mode='inline' className={styles['menu-wrap']}>
						{menuItem(menuList)}
					</Menu>
				</Sider>
				<Content className={styles['content-wrap']}>
					<div>content</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default System
