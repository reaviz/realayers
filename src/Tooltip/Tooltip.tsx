import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import {
  Placement,
  ReferenceObject,
  ConnectedOverlay,
  TriggerTypes
} from 'rdk';
import { motion } from 'framer-motion/dist/framer-motion';
import { useTooltipState } from './useTooltipState';
import css from './Tooltip.module.css';

export interface TooltipProps {
  /**
   * Close on any click.
   */
  closeOnClick?: boolean;

  /**
   * Close when the body is clicked.
   */
  closeOnBodyClick?: boolean;

  /**
   * Close when escape key is triggered.
   */
  closeOnEscape?: boolean;

  /**
   * Content for the tooltip.
   */
  content: any;

  /**
   * Reference of the tooltip to align to.
   */
  reference?: ReferenceObject | HTMLElement | any;

  /**
   * Popperjs placement.
   */
  placement: Placement;

  /**
   * Delay before showing tooltip.
   */
  enterDelay: number;

  /**
   * Delay before closing tooltip.
   */
  leaveDelay: number;

  /**
   * Popperjs modifiers.
   */
  modifiers?: any;

  /**
   * External setter for visibility.
   */
  visible: boolean;

  /**
   * Additiona CSS classnames.
   */
  className?: string;

  /**
   * How the tooltip will be triggered.
   */
  trigger: TriggerTypes[] | TriggerTypes;

  /**
   * Whether the tooltip is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the tooltip should move with the cursor or not.
   */
  followCursor?: boolean;

  /**
   * Add pointer events or not. Usually not for tooltips.
   */
  pointerEvents?: string;
}

export const Tooltip: FC<Partial<TooltipProps>> = ({
  className,
  children,
  content,
  disabled = false,
  enterDelay = 0,
  leaveDelay = 200,
  placement = 'top',
  trigger = 'hover',
  visible = false,
  followCursor = false,
  closeOnClick = false,
  closeOnEscape = true,
  closeOnBodyClick = true,
  pointerEvents = 'none',
  ...rest
}) => {
  const { addTooltip, deactivateTooltip, deactivateAllTooltips } =
    useTooltipState();

  const [internalVisible, setInternalVisible] = useState<boolean>(visible);
  const timeout = useRef<any>();
  const mounted = useRef<boolean>(false);
  const ref = useRef<(setter: boolean) => void>(setInternalVisible);

  useEffect(() => {
    // componentDidUpdateLogic style logic
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setInternalVisible(visible);
    }

    const curRef = ref.current;

    return () => {
      clearTimeout(timeout.current);
      deactivateTooltip(curRef);
    };
  }, [deactivateTooltip, visible]);

  return (
    <ConnectedOverlay
      {...rest}
      placement={placement}
      trigger={trigger}
      followCursor={followCursor}
      portalClassName={classNames({
        [css.disablePointer]: pointerEvents === 'none'
      })}
      open={internalVisible}
      closeOnBodyClick={closeOnBodyClick}
      closeOnEscape={closeOnEscape}
      content={() => {
        const contentChildren =
          typeof content === 'function' ? content() : content;

        if (!contentChildren) {
          return null;
        }

        return (
          <motion.div
            className={classNames(css.tooltip, className)}
            initial={{
              opacity: 0,
              scale: 0.3,
              transition: {
                when: 'beforeChildren'
              }
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                when: 'beforeChildren'
              }
            }}
            exit={{ opacity: 0, scale: 0.3 }}
            onClick={() => {
              if (closeOnClick) {
                deactivateAllTooltips();
              }
            }}
          >
            {contentChildren}
          </motion.div>
        );
      }}
      onOpen={() => {
        if (!internalVisible) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            if (!disabled) {
              deactivateAllTooltips();
              setInternalVisible(true);
              addTooltip(ref.current);
            }
          }, enterDelay);
        }
      }}
      onClose={() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          deactivateTooltip(ref.current);
        }, leaveDelay);
      }}
    >
      {children}
    </ConnectedOverlay>
  );
};

Tooltip.defaultProps = {
  disabled: false,
  enterDelay: 0,
  leaveDelay: 200,
  placement: 'top',
  trigger: 'hover',
  visible: false,
  followCursor: false,
  closeOnClick: false,
  closeOnEscape: true,
  closeOnBodyClick: true,
  pointerEvents: 'none'
};
