import * as React from "react";
import { useState, useEffect } from "react";
import { Pane } from "tweakpane";

const ControlPanel: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  // Create Tweakpane instance
  useEffect(() => {
    const pane = new Pane() as any;

    // Add input for background color
    pane
      .addInput({ color: backgroundColor }, "color", {
        view: "color", // This ensures the input is a color picker
      })
      .on("change", (ev: { value: string }) => {
        setBackgroundColor(ev.value); // Update the background color on change
      });

    return () => {
      pane.dispose(); // Clean up the pane when the component is unmounted
    };
  }, [backgroundColor]);

  return (
    <>
      <div
        className="tp-tabv tp-cntv tp-v-fst tp-v-vfst tp-v-lst tp-v-vlst"
        style={{ backgroundColor }}
      >
        <div className="tp-tabv_i">
          <div className="tp-tbiv tp-tbiv-sel">
            <button className="tp-tbiv_b">
              <div className="tp-tbiv_t">Controls</div>
            </button>
          </div>
        </div>

        <div className="tp-brkv tp-tabv_c tp-v-fst tp-v-vfst tp-v-lst tp-v-vlst">
          <div className="tp-brkv tp-v-fst tp-v-vfst tp-v-lst tp-v-vlst">
            <div className="tp-lblv">
              <div className="tp-lblv_l">Background</div>
              <div className="tp-lblv_v">
                {/* The color picker input is now managed by Tweakpane */}
                <div className="tp-colv tp-colv-cpl">
                  <div className="tp-colv_h">
                    <div className="tp-colv_s">
                      <div className="tp-colswv">
                        <div
                          className="tp-colswv_sw"
                          style={{ backgroundColor }}
                        ></div>
                        <button className="tp-colswv_b"></button>
                      </div>
                    </div>
                  </div>
                  <div className="tp-colv_t">
                    <div className="tp-txtv">
                      <input
                        className="tp-txtv_i"
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Your other components (Labels, Buttons, etc.) */}
            <div className="tp-lblv">
              <div className="tp-lblv_l">Labels</div>
              <div className="tp-lblv_v">
                <div
                  className="tp-radgridv"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <div className="tp-radv">
                    <label className="tp-radv_l">
                      <input className="tp-radv_i" name="Labels" type="radio" />
                      <div className="tp-radv_b">
                        <div className="tp-radv_t">On</div>
                      </div>
                    </label>
                  </div>
                  <div className="tp-radv">
                    <label className="tp-radv_l">
                      <input className="tp-radv_i" name="Labels" type="radio" />
                      <div className="tp-radv_b">
                        <div className="tp-radv_t">Off</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-lblv tp-lblv-nol">
              <div className="tp-lblv_l"></div>
              <div className="tp-lblv_v">
                <div className="tp-btnv">
                  <button className="tp-btnv_b">Enter/Exit Fullscreen</button>
                </div>
              </div>
            </div>
            {/* Additional buttons and controls */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
