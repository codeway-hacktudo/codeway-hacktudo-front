import React, {useRef, useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {HiOutlineChevronDown} from 'react-icons/hi';
import {DefaultTheme, withTheme} from 'styled-components';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {ContainerButton, ButtonMenu} from './styles';

interface IOptions {
  name: string;
  value: string;
}

interface IDropDownMenuProps {
  // eslint-disable-next-line no-unused-vars
  toggleOptions(theme: string): void;
  theme: DefaultTheme;
  options: IOptions[];
  placeHolder: string;
  showSelectedName: string;
  size?: string;
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({
  toggleOptions,
  options,
  theme,
  placeHolder,
  size,
  showSelectedName,
}) => {
  const [open, setOpen] = useState(false);
  // const [optionSelected, setOptionSelected] = useState<string>(placeHolder);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: React.MouseEvent<EventTarget>,
    valueChoice?: string,
  ): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    if (valueChoice) {
      toggleOptions(valueChoice);
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
    <ContainerButton>
      <ButtonMenu
        fontSize={size}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        {showSelectedName}
        <HiOutlineChevronDown
          color={theme.colors.primary}
          size={size || '38'}
        />
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
                  {options.map(({name, value}) => (
                    <MenuItem onClick={(e) => handleClose(e, value)}>
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ContainerButton>
  );
};

export default withTheme(DropDownMenu);
