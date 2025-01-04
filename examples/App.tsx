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
  disabled: boolean;
  fullWidth: boolean;
  surface: Surface;
  color: Color;
  childrenSlot: string;
}

function App() {
  const [state, setState] = React.useState<ButtonCustomizerState>({
    activeTab: "variants",
    disabled: false,
    fullWidth: false,
    surface: "solid",
    color: "slate",
    childrenSlot: "Click Me!",
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
    <main className="min-h-screen bg-neutral-900 p-2">
      <div className="mx-auto space-y-4">
        <div className="grid gap-2 lg:grid-cols-[350px,1fr]">
          <section className="rounded bg-white/5 backdrop-blur-sm p-2 ring-1 ring-white/10">
            <div className="space-y-4 pb-4">
              <div
                role="tablist"
                className="grid grid-cols-2 gap-1 p-0.5 rounded bg-white/5"
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
                <div role="tabpanel" className="space-y-4">
                  <fieldset className="space-y-2">
                    <legend className="text-sm font-medium text-white/90">
                      Surface
                    </legend>
                    <div className="grid grid-cols-3 gap-1" role="radiogroup">
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
                            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
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

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-medium text-white/90">
                      Color
                    </legend>
                    <div className="grid grid-cols-5 gap-1" role="radiogroup">
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
                          className={`group relative px-2 py-1.5 text-xs rounded-md transition-colors ${
                            state.color === value
                              ? "bg-white/10 text-white ring-1 ring-white/20"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span
                            className={`block h-1.5 w-full rounded-sm bg-${value}-500 mb-1`}
                          />
                          {value}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div className="flex items-center justify-between gap-4">
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
                    <label
                      htmlFor="fullwidth-toggle"
                      className="text-sm text-white/90 flex-1"
                    >
                      Full Width
                    </label>
                  </div>
                </div>
              ) : (
                <div role="tabpanel" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <button
                        id="disabled-toggle"
                        role="switch"
                        aria-checked={state.disabled}
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            disabled: !prev.disabled,
                          }))
                        }
                        className={`w-11 h-6 rounded-full transition-colors ${
                          state.disabled ? "bg-indigo-600" : "bg-white/10"
                        }`}
                      >
                        <span className="sr-only">
                          {state.disabled ? "Disable" : "Enable"} full width
                        </span>
                        <span
                          className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                            state.disabled ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                      <label
                        htmlFor="disabled-toggle"
                        className="text-sm text-white/90 flex-1"
                      >
                        Disabled
                      </label>
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

          <section className="rounded bg-white/5 backdrop-blur-sm p-2 ring-1 ring-white/10">
            <div className="space-y-4 mb-2">
              <Preview>
                <button className={root()} disabled={state.disabled}>
                  {state.childrenSlot}
                </button>
              </Preview>

              <pre className="rounded-md bg-white/5 p-3 text-sm text-white/80 font-mono">
                <code>{`button({ 
  color: "${state.color}", 
  surface: "${state.surface}",
  disabled: ${state.disabled},
  fullWidth: ${state.fullWidth}
})`}</code>
              </pre>
            </div>

            <button
              onClick={() => {
                const code = `button({ 
  color: "${state.color}",
  surface: "${state.surface}",
  disabled: ${state.disabled},
  fullWidth: ${state.fullWidth}
})`;
                navigator.clipboard.writeText(code);
              }}
              className="rounded-md px-3 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Copy button code to clipboard"
            >
              Copy Code
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
