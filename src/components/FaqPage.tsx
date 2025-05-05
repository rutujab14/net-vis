import Header from "./Header";

const FaqPage = () => {
  return (
    <>
      <Header />

      <div
        id="content"
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div id="faq-content">
          <h1>FAQs</h1>{" "}
          <hr
            style={{
              border: "none",
              borderTop: "2px solid #000",
              margin: "1rem 0",
            }}
          />{" "}
          <br />
          <div className="qa">
            <h4 className="question">What is this application used for?</h4>{" "}
            <hr />
            <div className="answer">
              <p>
                This application is designed to help users visualize and explore
                complex network data, relationships, or connections between
                various entities in an interactive and intuitive way. It allows
                you to represent data as nodes (individual entities) and edges
                (connections between them), providing a clear and interactive
                view of how different elements are interconnected. This can be
                useful for visualizing social networks, organizational
                hierarchies, computer networks, and more.
              </p>
            </div>
          </div>
          <div className="qa">
            <h4 className="question">
              Do I need to sign up to use the network visualizer?
            </h4>{" "}
            <hr />
            <div className="answer">
              <p>
                No, signing up or creating an account is not required to use the
                network visualizer. Simply open the application, and you can
                start visualizing network data immediately. It's a
                straightforward, hassle-free experience designed for users who
                want to quickly explore their data without the need for an
                account or personal information.
              </p>
            </div>
          </div>
          <div className="qa">
            <h4 className="question">What kind of data can I visualize?</h4>{" "}
            <hr />
            <div className="answer">
              <p>
                You can visualize any data that can be represented as a graph of
                nodes (entities) and edges (connections). This includes a wide
                range of use cases like:
                <ul>
                  <li>
                    <b>Social Networks</b>: Connections between people, groups,
                    or organizations.
                  </li>
                  <li>
                    <b>Technical Graphs</b>: Relationships between servers,
                    components, or other technical entities in a system.
                  </li>
                  <li>
                    <b>Dependency Maps</b>: How different software modules,
                    libraries, or microservices interact with each other.
                  </li>
                  <li>
                    <b>Custom Datasets</b>: You can visualize any graph-based
                    data that you wish to explore, whether it's biological
                    networks, transport routes, or project dependencies.
                  </li>
                </ul>
              </p>
            </div>{" "}
            <br />
          </div>
          <div className="qa">
            <h4 className="question">
              How can I interact with the visualization?
            </h4>{" "}
            <hr />
            <div className="answer">
              <p>
                The network visualizer offers several interactive features that
                let you explore the data effectively:
              </p>
              <ul>
                <li>
                  <b>Click and Drag</b>: You can click and drag nodes around the
                  screen to better organize the layout or focus on specific
                  areas.
                </li>
                <li>
                  <b>Zoom In/Out</b>: Zooming in and out helps you adjust the
                  level of detail shown in the graph, allowing you to explore
                  both high-level structures and individual node details.
                </li>
                <li>
                  <b>Hover to See Details</b>: Hover over any node or edge to
                  see more detailed information about it, such as its
                  connections, attributes, or other relevant data points.
                </li>
                <li>
                  <b>Node & Edge Customization</b>: Depending on the data, nodes
                  may vary in size or color to represent different attributes,
                  such as importance, type, or number of connections.
                </li>
              </ul>
            </div>{" "}
            <br />
          </div>
          <div className="qa">
            <h4 className="question">What browsers are supported?</h4> <hr />
            <div className="answer">
              <p>
                The network visualizer is compatible with modern browsers,
                including:
              </p>
              <ul>
                <li>
                  <b>Google Chrome</b> (latest version)
                </li>
                <li>
                  <b>Mozilla Firefox</b> (latest version)
                </li>
                <li>
                  <b>Microsoft Edge</b> (latest version)
                </li>
              </ul>
            </div>{" "}
            <br />
          </div>
          <div className="qa">
            <h4 className="question">
              Can I use this tool for academic or research purposes?
            </h4>{" "}
            <hr />
            <div className="answer">
              <p>
                Yes, absolutely! This tool can be used for academic, research,
                or educational purposes, including visualizing datasets for
                research projects, teaching concepts related to networks and
                graphs, or exploring complex relationships in different domains.
                If you plan to use the application in your academic work or
                research, please make sure to mention or cite the project
                appropriately. We appreciate any acknowledgment of the tool in
                your work, and feel free to reach out if you need any further
                details.
              </p>
            </div>{" "}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
