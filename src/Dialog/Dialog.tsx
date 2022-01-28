import React, { FC } from 'react';
import classNames from 'classnames';
import { GlobalOverlay, GlobalOverlayProps, useId } from 'rdk';
import FocusTrap from 'focus-trap-react';
import { motion } from 'framer-motion';
import css from './Dialog.module.css';

export interface DialogProps extends Omit<GlobalOverlayProps, 'children'> {
  className?: string;
  innerClassName?: string;
  header?: any;
  size?: string | number;
  showCloseButton?: boolean;
  children?: any;
  disablePadding?: boolean;
}

export const Dialog: FC<Partial<DialogProps>> = ({
  children,
  open,
  className,
  innerClassName,
  header,
  onClose,
  size,
  disablePadding,
  hasBackdrop,
  showCloseButton,
  closeOnBackdropClick,
  closeOnEscape,
}) => {
  const id = useId();

  return (
    <GlobalOverlay
      open={open}
      hasBackdrop={hasBackdrop}
      closeOnEscape={closeOnEscape}
      closeOnBackdropClick={closeOnBackdropClick}
      onClose={onClose}
    >
      {({ overlayIndex }) => (
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            fallbackFocus: `#${id}-content`,
          }}
        >
          <div id={id} tab-index="-1">
            <motion.div
              initial={{ opacity: 0, y: '-20%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '20%' }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={{ zIndex: overlayIndex }}
              className={classNames(css.dialog, className, {
                [css.disableHeader]: !header,
                [css.disablePadding]: disablePadding,
              })}
            >
              <div
                className={classNames(css.inner, innerClassName)}
                style={{ width: size }}
              >
                {header && (
                  <header className={css.header}>
                    <h1 className={css.headerText}>{header}</h1>
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
                <section id={`${id}-content`} className={css.content}>
                  {typeof children === 'function' ? children() : children}
                </section>
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};

Dialog.defaultProps = {
  size: '50%',
  disablePadding: false,
  hasBackdrop: true,
  showCloseButton: true,
  closeOnBackdropClick: true,
  closeOnEscape: true,
};
