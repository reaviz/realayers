import React, { FC } from 'react';
import classNames from 'classnames';
import { GlobalOverlay, GlobalOverlayProps, useId } from 'rdk';
import FocusTrap from 'focus-trap-react';
import { motion } from 'framer-motion';
import css from './Dialog.module.scss';

export type DialogProps = Omit<GlobalOverlayProps, 'children'> & {
  className?: any;
  header?: any;
  size: string | number;
  showCloseButton?: boolean;
  children?: any;
};

const isFunction = (fn) => fn && {}.toString.call(fn) === '[object Function]';

export const Dialog: FC<Partial<DialogProps>> = ({
  children,
  open,
  className,
  header,
  onClose,
  size = '50%',
  hasBackdrop = true,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
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
              className={classNames(css.dialog, className)}
            >
              <div className={css.inner} style={{ width: size }}>
                {header && (
                  <div className={css.header}>
                    <h2 className={css.headerText}>{header}</h2>
                    {showCloseButton && (
                      <button
                        type="button"
                        className={css.closeButton}
                        onClick={onClose}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                )}
                <div className={css.content} id={`${id}-content`}>
                  {isFunction(children) ? children() : children}
                </div>
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
