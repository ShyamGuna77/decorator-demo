import { useState } from "react";
import {
  TextNotation,
  TextNotationGroup,
  useTextDecorator,
} from "react-text-decorator";

// Example component using the custom hook
function CustomHookExample() {
  const {
    ref: boxRef,
    show: showBox,
    hide: hideBox,
  } = useTextDecorator({
    type: "box",
    color: "#ff6b6b",
    animationDuration: 1200,
    iterations: 2,
  });

  const {
    ref: highlightRef,
    show: showHighlight,
    hide: hideHighlight,
  } = useTextDecorator({
    type: "highlight",
    color: "#ffd93d",
    animationDuration: 1200,
    iterations: 2,
  });

  const {
    ref: underlineRef,
    show: showUnderline,
    hide: hideUnderline,
  } = useTextDecorator({
    type: "underline",
    color: "#4ecdc4",
    animationDuration: 1200,
    iterations: 2,
  });

  // Function to show all annotations
  const showAll = () => {
    showBox();
    showHighlight();
    showUnderline();
  };

  // Function to hide all annotations
  const hideAll = () => {
    hideBox();
    hideHighlight();
    hideUnderline();
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <button
          onClick={showAll}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Show All
        </button>
        <button
          onClick={hideAll}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Hide All
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <span ref={boxRef} className="text-lg">
            This text can be boxed programmatically
          </span>
          <div className="mt-2 flex gap-2">
            <button
              onClick={showBox}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
            >
              Show Box
            </button>
            <button
              onClick={hideBox}
              className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded"
            >
              Hide Box
            </button>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <span ref={highlightRef} className="text-lg">
            This text can be highlighted programmatically
          </span>
          <div className="mt-2 flex gap-2">
            <button
              onClick={showHighlight}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
            >
              Show Highlight
            </button>
            <button
              onClick={hideHighlight}
              className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded"
            >
              Hide Highlight
            </button>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg border border-gray-200">
          <span ref={underlineRef} className="text-lg">
            This text can be underlined programmatically
          </span>
          <div className="mt-2 flex gap-2">
            <button
              onClick={showUnderline}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
            >
              Show Underline
            </button>
            <button
              onClick={hideUnderline}
              className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded"
            >
              Hide Underline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TextDecoratorDemo() {
  const [basicShow, setBasicShow] = useState(true);
  const [groupShow, setGroupShow] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("basic");

  // For custom hook demo
  const [customShow, setCustomShow] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            <TextNotation
              type="highlight"
              show={true}
              animationDelay={1200}
              animationDuration={4000}
              iterations={8}
              strokeWidth={5}
              color="orange"
            >
              React Text Decorator Demo
            </TextNotation>
          </h1>
          <p className="text-gray-600">
            An interactive demonstration of text annotation components
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex mb-6 bg-white rounded-lg shadow overflow-hidden">
          <button
            onClick={() => setActiveTab("basic")}
            className={`px-4 py-3 font-medium flex-1 ${
              activeTab === "basic"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Basic Annotations
          </button>
          <button
            onClick={() => setActiveTab("group")}
            className={`px-4 py-3 font-medium flex-1 ${
              activeTab === "group"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Group Animation
          </button>
          <button
            onClick={() => setActiveTab("hover")}
            className={`px-4 py-3 font-medium flex-1 ${
              activeTab === "hover"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Hover Effects
          </button>
          <button
            onClick={() => setActiveTab("custom")}
            className={`px-4 py-3 font-medium flex-1 ${
              activeTab === "custom"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Custom Styling
          </button>
          <button
            onClick={() => setActiveTab("hook")}
            className={`px-4 py-3 font-medium flex-1 ${
              activeTab === "hook"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Custom Hook
          </button>
        </div>

        {/* Content area */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === "basic" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Basic Annotations
                </h2>
                <button
                  onClick={() => setBasicShow(!basicShow)}
                  className={`px-4 py-2 rounded ${
                    basicShow
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  {basicShow ? "Hide" : "Show"} Annotations
                </button>
              </div>

              <div className="space-y-8">
                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="underline"
                    show={basicShow}
                    color="#ff6b6b"
                    animationDelay={1000}
                    animationDuration={3000}
                    strokeWidth={2}
                    iterations={3}
                  >
                    <span className="text-lg">
                      This text has a red underline annotation
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="box"
                    show={basicShow}
                    color="#4ecdc4"
                    animationDelay={1100}
                    animationDuration={3200}
                    strokeWidth={2}
                    iterations={3}
                  >
                    <span className="text-lg">This text is boxed in teal</span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="circle"
                    show={basicShow}
                    color="#45b7d1"
                    animationDelay={1200}
                    animationDuration={3000}
                    strokeWidth={2}
                    iterations={5}
                    padding={4}
                  >
                    <span className="text-lg">
                      This text is circled in blue
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="highlight"
                    show={basicShow}
                    color="#ffd93d"
                    animationDelay={1100}
                    animationDuration={3000}
                  >
                    <span className="text-lg">
                      This text is highlighted in yellow
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="strike-through"
                    show={basicShow}
                    color="#ff6b6b"
                    animationDuration={800}
                  >
                    <span className="text-lg">
                      This text has a strike-through
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="crossed-off"
                    show={basicShow}
                    color="#ff6b6b"
                    animationDuration={3400}
                    animationDelay={1000}
                    iterations={2}
                    strokeWidth={1}
                  >
                    <span className="text-lg">
                      This text has a strike-through
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="bracket"
                    brackets={["left", "right"]}
                    show={basicShow}
                    color="#333"
                    animationDelay={1300}
                    animationDuration={3400}
                  >
                    <span className="text-lg">
                      This text has brackets on both sides
                    </span>
                  </TextNotation>
                </div>
              </div>
            </div>
          )}

          {activeTab === "group" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Group Animation
                </h2>
                <button
                  onClick={() => setGroupShow(!groupShow)}
                  className={`px-4 py-2 rounded ${
                    groupShow
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  Toggle Group Animation
                </button>
              </div>

              <div className="space-y-6 p-4 bg-gray-50 rounded">
                <TextNotationGroup show={groupShow}>
                  <TextNotation
                    type="highlight"
                    color="#ffd93d"
                    order={1}
                    animationDuration={500}
                  >
                    <span className="text-lg block p-2">
                      First highlight appears
                    </span>
                  </TextNotation>

                  <TextNotation
                    type="box"
                    color="#4ecdc4"
                    order={2}
                    animationDuration={500}
                  >
                    <span className="text-lg block p-2">
                      Then this box appears
                    </span>
                  </TextNotation>

                  <TextNotation
                    type="circle"
                    color="#ff6b6b"
                    order={3}
                    animationDuration={500}
                  >
                    <span className="text-lg block p-2">
                      Finally, this circle appears
                    </span>
                  </TextNotation>

                  <TextNotation
                    type="bracket"
                    brackets={["left", "right"]}
                    color="#333"
                    order={4}
                    animationDuration={500}
                  >
                    <span className="text-lg block p-2">
                      And brackets come last
                    </span>
                  </TextNotation>
                </TextNotationGroup>
              </div>
            </div>
          )}

          {activeTab === "hover" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Hover Effects
                </h2>
                <button
                  onClick={() => setHoverEnabled(!hoverEnabled)}
                  className={`px-4 py-2 rounded ${
                    hoverEnabled
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  {hoverEnabled ? "Disable" : "Enable"} Hover
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="underline"
                    hover={hoverEnabled}
                    color="#ff6b6b"
                    animationDuration={400}
                  >
                    <span className="text-lg">Hover for underline</span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="highlight"
                    hover={hoverEnabled}
                    color="#ffd93d"
                    animationDuration={400}
                  >
                    <span className="text-lg">Hover for highlight</span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="box"
                    hover={hoverEnabled}
                    color="#4ecdc4"
                    animationDuration={400}
                  >
                    <span className="text-lg">Hover for box</span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="circle"
                    hover={hoverEnabled}
                    color="#45b7d1"
                    animationDuration={400}
                  >
                    <span className="text-lg">Hover for circle</span>
                  </TextNotation>
                </div>
              </div>
            </div>
          )}

          {activeTab === "custom" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Custom Styling
              </h2>

              <div className="space-y-8">
                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="highlight"
                    show={true}
                    color="#ffd93d"
                    padding={5}
                    animationDuration={800}
                  >
                    <span className="text-2xl font-bold">
                      Larger Font with Padding
                    </span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded">
                  <TextNotation
                    type="box"
                    show={true}
                    color="#4ecdc4"
                    strokeWidth={3}
                    animationDuration={800}
                  >
                    <span className="text-lg">Thicker stroke width (3px)</span>
                  </TextNotation>
                </div>

                <div className="p-4 bg-gray-50 rounded max-w-md">
                  <TextNotation
                    type="underline"
                    show={true}
                    color="#ff6b6b"
                    multiline={true}
                    animationDuration={800}
                  >
                    <span className="text-lg">
                      This is a multiline text example. The underline will adapt
                      to each line separately when the text wraps to the next
                      line.
                    </span>
                  </TextNotation>
                </div>

                <div
                  className="p-4 bg-gray-50 rounded"
                  onClick={() => setCustomShow(!customShow)}
                >
                  <TextNotation
                    type="bracket"
                    brackets={["left", "right", "top", "bottom"]}
                    show={customShow}
                    color="#333"
                    animationDuration={1200}
                    iterations={1}
                  >
                    <span className="text-lg cursor-pointer">
                      Click me to toggle the brackets on all sides!
                    </span>
                  </TextNotation>
                </div>
              </div>
            </div>
          )}

          {activeTab === "hook" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Custom Hook Usage
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <CustomHookExample />
              </div>

              <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`import { useTextDecorator } from 'react-text-decorator';

function CustomHookExample() {
  const { ref, show, hide } = useTextDecorator({
    type: 'box',
    color: '#ff6b6b',
    animationDuration: 1500,
    iterations: 3,
  });

  return (
    <div>
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <span ref={ref}>
        This text can be annotated programmatically
      </span>
    </div>
  );
}`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Installation Instructions */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Installation
          </h2>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-6">
            <div>npm install react-text-decorator</div>
            <div className="text-gray-500 mt-2"># or</div>
            <div>yarn add react-text-decorator</div>
            <div className="text-gray-500 mt-2"># or</div>
            <div>pnpm add react-text-decorator</div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Basic Usage
          </h2>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`import { TextNotation } from 'react-text-decorator';

function MyComponent() {
  return (
    <TextNotation type="highlight" show={true} color="#ffd93d">
      This text will be highlighted in yellow!
    </TextNotation>
  );
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
