import { useCallback, useState } from 'react';

type HookResult = [boolean, () => void, () => void, () => void];

export const useIsOpen = (initial = false): HookResult => {
  const [isOpen, setOpen] = useState(initial);

  const handleClose = useCallback(() => setOpen(false), []);
  const handleOpen = useCallback(() => setOpen(true), []);
  const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

  return [isOpen, handleClose, handleOpen, toggleOpen];
};
