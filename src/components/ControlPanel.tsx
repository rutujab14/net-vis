import { Pane } from "tweakpane";
import { useEffect, useRef } from "react";

interface Props {
  searchterm: string;
}

const ControlPanel = ({ searchterm }: Props) => {
  const paneRef = useRef<HTMLDivElement>(null);
  const objRef = useRef({ inputFromParent: searchterm });

  useEffect(() => {
    if (!paneRef.current) return;

    const pane = new Pane({ container: paneRef.current });
    pane.addBinding(objRef.current, "inputFromParent");

    return () => pane.dispose();
  }, []);

  return <div ref={paneRef} />;
};

export default ControlPanel;
