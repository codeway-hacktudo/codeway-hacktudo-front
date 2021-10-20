import React, {useRef, useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Container, ButtonMenu} from './styles';

interface IMenuAppThemeProps {
  // eslint-disable-next-line no-unused-vars
  toggleTheme(theme: string): void;
}

const MenuAppTheme: React.FC<IMenuAppThemeProps> = ({toggleTheme}) => {
  const [open, setOpen] = useState(false);
  const [themeSelected, setThemeSelected] = useState('Distribuidora 1');
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: React.MouseEvent<EventTarget>,
    theme?: string,
  ): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    if (theme) {
      toggleTheme(theme);
      setThemeSelected(
        theme === 'distributor1Theme' ? 'Distribuidora 1' : 'Distribuidora 2',
      );
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Container>
      <ButtonMenu
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        {themeSelected}
      </ButtonMenu>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal>
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem
                    onClick={(e) => handleClose(e, 'distributor1Theme')}>
                    Distribuidora 1
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => handleClose(e, 'distributor2Theme')}>
                    Distribuidora 2
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Container>
  );
};

export default MenuAppTheme;
