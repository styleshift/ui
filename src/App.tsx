import button from "../components/button";
import {
  Plus as PlusIcon,
  Check as CheckIcon,
  AlertTriangle as AlertTriangleIcon,
  X as XIcon,
} from "lucide-react";

function App() {
  const { root, start, end } = button();
  return (
    <div className="min-h-screen p-12 bg-background">
      {/* Main layout without sidebar */}
      <div className="container flex-1">
        {/* Main content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
          <div className="mx-auto w-full min-w-0">
            {/* Page Title */}
            <header className="mb-9 space-y-2">
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
                Button
              </h1>
            </header>

            <div className="space-y-12">
              {/* Basic Button Variants */}
              <section id="basic-buttons" className="scroll-m-20 space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  Surface
                </h2>
                <div className="flex flex-wrap gap-4">
                  <button title="Default" className={root()}>
                    Default
                  </button>
                  <button
                    title="Outlined"
                    className={root({ surface: "outline" })}
                  >
                    Outlined
                  </button>
                  <button
                    title="Secondary"
                    className={root({ surface: "secondary" })}
                  >
                    Secondary
                  </button>
                  <button title="Ghost" className={root({ surface: "ghost" })}>
                    Ghost
                  </button>
                  <button title="Link" className={root({ surface: "link" })}>
                    Link
                  </button>
                </div>
              </section>

              {/* Color Variations */}
              <section id="color-variations" className="scroll-m-20 space-y-2">
                <h2 className="text-xl fot-semibold tracking-tight">Color</h2>
                <div className="grid gap-4">
                  {(
                    [
                      "default",
                      "outline",
                      "secondary",
                      "ghost",
                      "link",
                    ] as const
                  ).map((surface) => (
                    <div className="flex flex-wrap gap-4" key={surface}>
                      <button title="Default" className={root({ surface })}>
                        Default
                      </button>
                      <button
                        title="Success"
                        className={root({ surface, color: "positive" })}
                      >
                        Success
                      </button>
                      <button
                        title="Warning"
                        className={root({ surface, color: "warning" })}
                      >
                        Warning
                      </button>
                      <button
                        title="Error"
                        className={root({ surface, color: "negative" })}
                      >
                        Error
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Size Variations */}
              <section id="size-variations" className="scroll-m-20 space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">Size</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-4">
                      <button title="Small" className={root({ size: "sm" })}>
                        Small
                      </button>
                      <button
                        title="Default"
                        className={root({ size: "default" })}
                      >
                        Default
                      </button>
                      <button title="Large" className={root({ size: "lg" })}>
                        Large
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disabled State */}
              <section id="disabled-state" className="scroll-m-20 space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  Disabled
                </h2>
                <div className="flex flex-wrap gap-4">
                  <button title="Disabled Default" className={root()} disabled>
                    Disabled
                  </button>
                  <button
                    title="Disabled Outlined"
                    className={root({ surface: "outline" })}
                    disabled
                  >
                    Disabled
                  </button>
                  <button
                    title="Disabled Secondary"
                    className={root({ surface: "secondary" })}
                    disabled
                  >
                    Disabled
                  </button>
                  <button
                    title="Disabled Ghost"
                    className={root({ surface: "ghost" })}
                    disabled
                  >
                    Disabled
                  </button>
                  <button
                    title="Disabled Link"
                    className={root({ surface: "link" })}
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </section>

              {/* Slots Example */}
              <section id="slots-example" className="scroll-m-20 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Slots</h2>
                <div className="grid gap-4">
                  {(
                    [
                      "default",
                      "outline",
                      "secondary",
                      "ghost",
                      "link",
                    ] as const
                  ).map((surface) => (
                    <div key={surface} className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {/* Default */}
                        <button
                          title={`${surface} with slots`}
                          className={root({ surface })}
                        >
                          Default
                          <div className={end()}>
                            <PlusIcon className="ml-2 h-4 w-4" />
                          </div>
                        </button>

                        {/* Success */}
                        <button
                          title={`${surface} success with slots`}
                          className={root({ surface, color: "positive" })}
                        >
                          <div className={start()}>
                            <CheckIcon className="mr-2 h-4 w-4" />
                          </div>
                          Success
                        </button>

                        {/* Warning */}
                        <button
                          title={`${surface} warning with slots`}
                          className={root({ surface, color: "warning" })}
                        >
                          <div className={start()}>
                            <AlertTriangleIcon className="mr-2 h-4 w-4" />
                          </div>
                          Warning
                        </button>

                        {/* Error */}
                        <button
                          title={`${surface} error with slots`}
                          className={root({ surface, color: "negative" })}
                        >
                          <div className={start()}>
                            <XIcon className="mr-2 h-4 w-4" />
                          </div>
                          Error
                          <div className={end()}>
                            <XIcon className="ml-2 h-4 w-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
