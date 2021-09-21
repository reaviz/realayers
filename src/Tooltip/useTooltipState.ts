import { useEffect, useState } from 'react';

/**
 * Creates a global state singleton.
 */
const createStateHook = () => {
  let tooltips: ((setter: boolean) => void)[] = [];

  function addTooltip(newTip: any) {
    tooltips = [...tooltips, newTip];
  }

  function deactivateTooltip(tooltip) {
    const idx = tooltips.indexOf(tooltip);
    if (idx > -1) {
      const tip = tooltips[idx];
      tip(false);
      tooltips.splice(idx, 1);
    }
  }

  function deactivateAllTooltips() {
    tooltips.forEach(ref => ref(false));
    tooltips = [];
  }

  return () => {
    const [state, setState] = useState<any[]>([]);

    useEffect(() => {
      setState(tooltips);
    }, []);

    return {
      tooltips: state,
      deactivateAllTooltips,
      deactivateTooltip,
      addTooltip
    };
  };
};

export const useTooltipState = createStateHook();
