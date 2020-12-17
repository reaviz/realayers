import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { GlobalOverlay, GlobalOverlayProps, useId } from 'rdk';
import { motion } from 'framer-motion';
import { variants } from './variants';
import css from './Drawer.module.css';

export type DrawerProps = Omit<GlobalOverlayProps, 'children'> & {
  position?: 'start' | 'end' | 'top' | 'bottom';
  size?: string | number;
  className?: any;
  backdropClassName?: any;
  disablePadding?: boolean;
  header?: any;
  showCloseButton?: boolean;
  children?: any;
};

export const Drawer: FC<Partial<DrawerProps>> = ({
  className,
  children,
  open,
  backdropClassName,
  header,
  position = 'end',
  size = '80%',
  hasBackdrop = true,
  closeOnEscape = true,
  closeOnBackdropClick = true,
  disablePadding = false,
  showCloseButton = true,
  onClose = () => undefined
}) => {
  const id = useId();
  const variant = variants[position];

  const style = {
    width: position === 'start' || position === 'end' ? size : 'auto',
    height: position === 'top' || position === 'bottom' ? size : 'auto'
  };

  return (
    <GlobalOverlay
      open={open}
      hasBackdrop={hasBackdrop}
      closeOnEscape={closeOnEscape}
      closeOnBackdropClick={closeOnBackdropClick}
      onClose={onClose}
      backdropClassName={backdropClassName}
    >
      {({ overlayIndex }) => (
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            fallbackFocus: `#${id}`
          }}
        >
          <div id={id} tab-index="-1">
            <motion.div
              initial="initial"
              animate="animate"
              exit="initial"
              variants={variant}
              transition={{
                duration: 0.5,
                ease: [0.04, 0.62, 0.23, 0.98],
                when: 'beforeChildren'
              }}
              style={{ ...style, zIndex: overlayIndex }}
              className={classNames(css.drawer, className, css[position], {
                [css.disablePadding]: disablePadding
              })}
            >
              {header && (
                <header className={css.header}>
                  <h1>{header}</h1>
                  {showCloseButton && (
                    <button
                      type="button"
                      className={css.closeButton}
                      onClick={onClose}
                    >
                      ✕
                    </button>
                  )}
                </header>
              )}
              {!header && showCloseButton && (
                <button
                  type="button"
                  className={classNames(css.closeButton, css.headerlessCloseButton)}
                  onClick={onClose}
                >
                  ✕
                </button>
              )}
              <div className={css.content}>
                {typeof children === 'function' ? children() : children}
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
