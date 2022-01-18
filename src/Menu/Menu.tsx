import React, { FC } from 'react';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { ConnectedOverlay, OverlayEvent, Placement, useId } from 'rdk';
import { motion } from 'framer-motion';
import css from './Menu.module.css';

export type MenuProps = {
  appendToBody?: boolean;
  autofocus?: boolean;
  children: any;
  className?: string;
  closeOnBodyClick: boolean;
  closeOnEscape: boolean;
  placement: Placement;
  reference?: any;
  style?: React.CSSProperties;
  open: boolean;
  maxHeight: string;
  onClose: (event: OverlayEvent) => void;
};

export const Menu: FC<Partial<MenuProps>> = ({
  reference,
  children,
  style,
  className,
  placement = 'bottom-start',
  closeOnEscape = true,
  open = false,
  appendToBody = true,
  closeOnBodyClick = true,
  maxHeight = 'max-height: calc(100vh - 48px)',
  autofocus = true,
  onClose = () => undefined,
}) => {
  const id = useId();

  return (
    <ConnectedOverlay
      open={open}
      closeOnBodyClick={closeOnBodyClick}
      appendToBody={appendToBody}
      reference={reference}
      placement={placement}
      closeOnEscape={closeOnEscape}
      content={() => (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={classNames(css.container, className)}
          style={style}
        >
          {autofocus && (
            <FocusTrap
              focusTrapOptions={{
                escapeDeactivates: true,
                clickOutsideDeactivates: true,
                fallbackFocus: `#${id}`,
              }}
            >
              <div
                id={id}
                className={css.inner}
                tabIndex={-1}
                style={{ maxHeight }}
              >
                {children}
              </div>
            </FocusTrap>
          )}
          {!autofocus && <div className={css.inner}>{children}</div>}
        </motion.div>
      )}
      onClose={onClose}
    />
  );
};
