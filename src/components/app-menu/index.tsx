import React from 'react';

import {Container, WrapperMenu} from './styles';
import DropDownMenu from '../dropdown-menu';

interface IAppMenuProps {
  // eslint-disable-next-line no-unused-vars
  toggleTheme(theme: string): void;
}

const AppMenu: React.FC<IAppMenuProps> = ({toggleTheme}) => {
  return (
    <Container>
      <WrapperMenu>
        {/* <DropDownMenu
          options={[
            {
              name: 'Distribuidora 1',
              value: 'distributor1Theme',
            },
            {
              name: 'Distribuidora 2',
              value: 'distributor2Theme',
            },
          ]}
          toggleOptions={toggleTheme}
        /> */}
      </WrapperMenu>
    </Container>
  );
};

export default AppMenu;
