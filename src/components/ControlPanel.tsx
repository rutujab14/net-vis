const ControlPanel = () => {
  return (
    <>
      <div className="tp-tabv tp-cntv tp-v-fst tp-v-vfst tp-v-lst tp-v-vlst">
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
              <div className="tp-lblv_l">Pos-Log2FC</div>
              <div className="tp-lblv_v">
                <div className="tp-sldtxtv">
                  <div className="tp-sldtxtv_s">
                    <div className="tp-sldv">
                      <div className="tp-sldv_t" tabIndex={0}>
                        <div
                          className="tp-sldv_k"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-sldtxtv_t">
                    <div className="tp-txtv tp-txtv-num">
                      <input className="tp-txtv_i" type="text" />
                      <div className="tp-txtv_k">
                        <svg className="tp-txtv_g">
                          <path className="tp-txtv_gb"></path>
                          <path className="tp-txtv_gh"></path>
                        </svg>
                        <div className="tp-ttv"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-lblv">
              <div className="tp-lblv_l">Neg-Log2FC</div>
              <div className="tp-lblv_v">
                <div className="tp-sldtxtv">
                  <div className="tp-sldtxtv_s">
                    <div className="tp-sldv">
                      <div className="tp-sldv_t" tabIndex={0}>
                        <div className="tp-sldv_k"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-sldtxtv_t">
                    <div className="tp-txtv tp-txtv-num">
                      <input className="tp-txtv_i" type="text" />
                      <div className="tp-txtv_k">
                        <svg className="tp-txtv_g">
                          <path className="tp-txtv_gb"></path>
                          <path className="tp-txtv_gh"></path>
                        </svg>
                        <div className="tp-ttv"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-lblv">
              <div className="tp-lblv_l">Background</div>
              <div className="tp-lblv_v">
                <div className="tp-colv tp-colv-cpl">
                  <div className="tp-colv_h">
                    <div className="tp-colv_s">
                      <div className="tp-colswv">
                        <div
                          className="tp-colswv_sw"
                          style={{ backgroundColor: "rgb(255, 255, 255)" }}
                        ></div>
                        <button className="tp-colswv_b"></button>
                      </div>
                    </div>
                    <div className="tp-colv_t">
                      <div className="tp-txtv">
                        <input className="tp-txtv_i" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="tp-popv">
                    <div className="tp-colpv">
                      <div className="tp-colpv_hsv">
                        <div className="tp-colpv_sv">
                          <div className="tp-svpv" tabIndex={0}>
                            <canvas
                              height="64"
                              width="64"
                              className="tp-svpv_c"
                            ></canvas>
                            <div
                              className="tp-svpv_m"
                              style={{ left: "0%", top: "0%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="tp-colpv_h">
                          <div className="tp-hplv" tabIndex={0}>
                            <div className="tp-hplv_c"></div>
                            <div
                              className="tp-hplv_m"
                              style={{
                                backgroundColor: "rgb(255, 0, 0)",
                                left: "0%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="tp-colpv_rgb">
                        <div className="tp-coltxtv">
                          <div className="tp-coltxtv_m">
                            <select className="tp-coltxtv_ms">
                              <option value="rgb">RGB</option>
                              <option value="hsl">HSL</option>
                              <option value="hsv">HSV</option>
                            </select>
                            <div className="tp-coltxtv_mm">
                              <svg>
                                <path d="M5 7h6l-3 3 z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="tp-coltxtv_w">
                            <div className="tp-coltxtv_c">
                              <div className="tp-txtv tp-txtv-num tp-txtv-fst">
                                <input className="tp-txtv_i" type="text" />
                                <div className="tp-txtv_k">
                                  <svg className="tp-txtv_g">
                                    <path className="tp-txtv_gb"></path>
                                    <path className="tp-txtv_gh"></path>
                                  </svg>
                                  <div className="tp-ttv"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-coltxtv_c">
                              <div className="tp-txtv tp-txtv-num tp-txtv-mid">
                                <input className="tp-txtv_i" type="text" />
                                <div className="tp-txtv_k">
                                  <svg className="tp-txtv_g">
                                    <path className="tp-txtv_gb"></path>
                                    <path className="tp-txtv_gh"></path>
                                  </svg>
                                  <div className="tp-ttv"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tp-coltxtv_c">
                              <div className="tp-txtv tp-txtv-num tp-txtv-lst">
                                <input className="tp-txtv_i" type="text" />
                                <div className="tp-txtv_k">
                                  <svg className="tp-txtv_g">
                                    <path className="tp-txtv_gb"></path>
                                    <path className="tp-txtv_gh"></path>
                                  </svg>
                                  <div className="tp-ttv"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* done labels
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
                      <input
                        className="tp-radv_i"
                        name="Phosphorylation"
                        type="radio"
                      />
                      <div className="tp-radv_b">
                        <div className="tp-radv_t">Hide</div>
                      </div>
                    </label>
                  </div>
                  <div className="tp-radv">
                    <label className="tp-radv_l">
                      <input
                        className="tp-radv_i"
                        name="Phosphorylation"
                        type="radio"
                      />
                      <div className="tp-radv_b">
                        <div className="tp-radv_t">Show</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
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
            <div className="tp-lblv tp-lblv-nol">
              <div className="tp-lblv_l"></div>
              <div className="tp-lblv_v">
                <div className="tp-btnv">
                  <button className="tp-btnv_b">Take a screenshot</button>
                </div>
              </div>
            </div>
            <div className="tp-lblv tp-lblv-nol">
              <div className="tp-lblv_l"></div>
              <div className="tp-lblv_v">
                <div className="tp-btnv">
                  <button className="tp-btnv_b">Reset</button>
                </div>
              </div>
            </div>
            <div className="tp-sprv">
              <hr className="tp-sprv_r" />
            </div>
            <div className="tp-sprv">
              <hr className="tp-sprv_r" />
            </div>
            {/* <div className="tp-lblv tp-lblv-nol">
              <div className="tp-lblv_l"></div>
              <div className="tp-lblv_v">
                <div className="tp-btnv">
                  <button className="tp-btnv_b">Switch to 2D</button>
                </div>
              </div>
            </div> */}
            <div className="tp-fldv tp-cntv tp-fldv-expanded tp-fldv-cpl tp-v-lst tp-v-vlst">
              <button className="tp-fldv_b">
                <div className="tp-fldv_t">Gene Enrichment Analysis</div>
                <div className="tp-fldv_m"></div>
              </button>
              <div
                className="tp-brkv tp-fldv_c tp-v-lst tp-v-vlst"
                style={{ height: "auto" }}
              >
                <div className="tp-lblv tp-lblv-nol tp-v-fst tp-v-lst tp-v-vlst">
                  <div className="tp-lblv_l"></div>
                  <div className="tp-lblv_v">
                    <div className="tp-btnv">
                      <button className="tp-btnv_b">
                        Send genes to Enrichr
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
