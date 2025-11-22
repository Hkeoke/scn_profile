import { useCallback, useState } from "react";

const useToggle = (open: boolean) => {
  const [action, setAction] = useState<{
    isOpen: boolean;
    entity?: string;
  }>({ isOpen: open });

  const onClose = useCallback(() => {
    setAction({ isOpen: false, entity: "" });
  }, []);

  const onOpen = useCallback((entity?: string) => {
    setAction({ isOpen: true, entity });
  }, []);

  const onToggle = useCallback(
    (entity: string = "") => {
      setAction({ isOpen: !action?.isOpen, entity });
    },
    [action?.isOpen],
  );

  return {
    isOpen: action.isOpen,
    entity: action.entity,
    onClose,
    onOpen,
    onToggle,
  };
};

export default useToggle;
