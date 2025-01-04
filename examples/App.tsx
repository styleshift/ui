import button from "../components/button";
import React from "react";
import Preview from "./components/Preview";

type Surface = "soft" | "outline" | "ghost" | "solid" | "link";
type Color =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

interface ButtonCustomizerState {
  activeTab: "variants" | "state";
  isDisabled: boolean;
  fullWidth: boolean;
  surface: Surface;
  color: Color;
  childrenSlot: string;
}

function App() {
  const [state, setState] = React.useState<ButtonCustomizerState>({
    activeTab: "variants",
    isDisabled: false,
    fullWidth: false,
    surface: "solid",
    color: "slate",
    childrenSlot: "Add",
  });

  const { root } = button({
    color: state.color,
    surface: state.surface,
    fullWidth: state.fullWidth,
  });

  function handleTabChange(tab: ButtonCustomizerState["activeTab"]) {
    setState((prev) => ({ ...prev, activeTab: tab }));
  }

  return (
    <main className="min-h-screen bg-neutral-900 p-6">
      <div className="mx-auto  space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Button</h1>
          <button
            onClick={() => {
              const code = `button({ 
  color: "${state.color}",
  surface: "${state.surface}",
  disabled: ${state.isDisabled},
  fullWidth: ${state.fullWidth}
})`;
              navigator.clipboard.writeText(code);
            }}
            className="rounded-md px-3 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Copy button code to clipboard"
          >
            Copy Code
          </button>
        </header>

        <div className="grid gap-6 lg:grid-cols-[400px,1fr]">
          <section
            className="rounded-xl bg-white/5 backdrop-blur-sm p-6 ring-1 ring-white/10"
            aria-label="Button customization controls"
          >
            <div className="space-y-6">
              <div
                role="tablist"
                aria-label="Customization options"
                className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-white/5"
              >
                {(["variants", "state"] as const).map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={state.activeTab === tab}
                    aria-controls={`${tab}-panel`}
                    onClick={() => handleTabChange(tab)}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      state.activeTab === tab
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {state.activeTab === "variants" ? (
                <div
                  role="tabpanel"
                  id="variants-panel"
                  aria-labelledby="variants-tab"
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="fullwidth-toggle"
                      className="text-sm text-white/90"
                    >
                      Full Width
                    </label>
                    <button
                      id="fullwidth-toggle"
                      role="switch"
                      aria-checked={state.fullWidth}
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          fullWidth: !prev.fullWidth,
                        }))
                      }
                      className={`w-11 h-6 rounded-full transition-colors ${
                        state.fullWidth ? "bg-indigo-600" : "bg-white/10"
                      }`}
                    >
                      <span className="sr-only">
                        {state.fullWidth ? "Disable" : "Enable"} full width
                      </span>
                      <span
                        className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                          state.fullWidth ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-white/90">
                      Surface
                    </legend>
                    <div className="grid grid-cols-3 gap-2" role="radiogroup">
                      {["solid", "soft", "outline", "ghost", "link"].map(
                        (value) => (
                          <button
                            key={value}
                            role="radio"
                            aria-checked={state.surface === value}
                            onClick={() =>
                              setState((prev) => ({
                                ...prev,
                                surface: value as Surface,
                              }))
                            }
                            className={`px-4 py-2 text-sm rounded-md transition-colors ${
                              state.surface === value
                                ? "bg-white/10 text-white ring-1 ring-white/20"
                                : "text-white/60 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {value}
                          </button>
                        ),
                      )}
                    </div>
                  </fieldset>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-white/90">
                      Color
                    </legend>
                    <div className="grid grid-cols-4 gap-2" role="radiogroup">
                      {[
                        "slate",
                        "gray",
                        "zinc",
                        "neutral",
                        "stone",
                        "red",
                        "orange",
                        "amber",
                        "yellow",
                        "lime",
                        "green",
                        "emerald",
                        "teal",
                        "cyan",
                        "sky",
                        "blue",
                        "indigo",
                        "violet",
                        "purple",
                        "fuchsia",
                        "pink",
                        "rose",
                      ].map((value) => (
                        <button
                          key={value}
                          role="radio"
                          aria-checked={state.color === value}
                          onClick={() =>
                            setState((prev) => ({
                              ...prev,
                              color: value as Color,
                            }))
                          }
                          className={`group relative px-4 py-2 text-sm rounded-md transition-colors ${
                            state.color === value
                              ? "bg-white/10 text-white ring-1 ring-white/20"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span
                            className={`block h-2 w-full rounded-sm bg-${value}-500 mb-2`}
                          />
                          {value}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ) : (
                <div
                  role="tabpanel"
                  id="state-panel"
                  aria-labelledby="state-tab"
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="disabled-toggle"
                        className="text-sm text-white/90"
                      >
                        Disabled
                      </label>
                      <button
                        id="disabled-toggle"
                        role="switch"
                        aria-checked={state.isDisabled}
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            isDisabled: !prev.isDisabled,
                          }))
                        }
                        className={`w-11 h-6 rounded-full transition-colors ${
                          state.isDisabled ? "bg-indigo-600" : "bg-white/10"
                        }`}
                      >
                        <span className="sr-only">
                          {state.isDisabled ? "Disable" : "Enable"} button
                        </span>
                        <span
                          className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                            state.isDisabled ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="button-text"
                        className="text-sm font-medium text-white/90"
                      >
                        Button Text
                      </label>
                      <input
                        id="button-text"
                        type="text"
                        value={state.childrenSlot}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            childrenSlot: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border-0 bg-white/5 px-3 py-2 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        placeholder="Enter button text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section
            className="rounded-xl bg-white/5 backdrop-blur-sm p-6 ring-1 ring-white/10"
            aria-label="Button preview"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-white/90">Preview</h2>
              </div>

              <Preview className="min-h-[300px] w-full flex items-center justify-center border border-dashed border-white/10 rounded-lg">
                <button className={root()} disabled={state.isDisabled}>
                  {state.childrenSlot}
                </button>
              </Preview>

              <pre className="rounded-md bg-white/5 p-4 text-sm text-white/80 font-mono">
                <code>{`button({ 
  color: "${state.color}", 
  surface: "${state.surface}",
  disabled: ${state.isDisabled},
  fullWidth: ${state.fullWidth}
})`}</code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
