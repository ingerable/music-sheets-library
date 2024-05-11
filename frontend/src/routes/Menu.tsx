import React, { useState } from 'react';
import { TeamOutlined, HomeOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Accueil',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Partitions',
    key: 'SubMenuPartitions',
    icon: <BookOutlined />,
    children: [
          { label: 'Mes partitions', key: 'partitions:1' },
          { label: 'Créer une partition', key: 'partitions:2' },
          { label: 'Rechercher une partition', key: 'partitions:2' }
    ],
  },
  {
    label: 'Artistes',
    key: 'SubMenuArtistes',
    icon: <TeamOutlined />,
    children: [
          { label: 'Artistes', key: 'artistes:1' },
          { label: 'Créer un artiste', key: 'artistes:2' }
    ],
  },
  {
    label: 'Profil',
    key: 'profil',
    icon: <UserOutlined />,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;