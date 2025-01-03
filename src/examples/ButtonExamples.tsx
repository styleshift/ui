import button from "../../components/button";
import {
  AlertTriangle as AlertTriangleIcon,
  Check as CheckIcon,
  Plus as PlusIcon,
  X as XIcon,
} from "lucide-react";

const ButtonExamples = () => {
  const { root, start, end } = button();
  return (
    <div className="min-h-screen bg-gradient-to-b from-zincp-50 to-zinc-100 text-zinc-800 pb-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="container mx-auto px-4 py-24 relative">
        <main className="max-w-5xl mx-auto space-y-16">
          <header className="text-center space-y-8">
            <h1 className="scroll-m-20 text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
              Button
            </h1>
            <p className="text-zinc-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              A flexible and customizable button component with multiple
              variants, colors, and slots.
            </p>
          </header>

          <div className="space-y-16">
            <section id="basic-buttons" className="scroll-m-20 space-y-8">
              <div className="flex items-center gap-2  pb-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Surface
                </h2>
              </div>
              <div className="p-8  bg-white/90 backdrop-blur-sm border  flex flex-wrap gap-4">
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

            <section id="color-variations" className="scroll-m-20 space-y-8">
              <div className="flex items-center gap-2  pb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Color</h2>
              </div>
              <div className=" bg-white/90 backdrop-blur-sm border  divide-y">
                {(
                  ["default", "outline", "secondary", "ghost", "link"] as const
                ).map((surface) => (
                  <div className="p-8 flex flex-wrap gap-4" key={surface}>
                    <div className="w-24 flex items-center">
                      <code className="text-sm font-mono text-zinc-500">
                        {surface}
                      </code>
                    </div>
                    <div className="flex flex-wrap gap-4">
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
                  </div>
                ))}
              </div>
            </section>

            <section id="size-variations" className="scroll-m-20 space-y-8">
              <div className="flex items-center gap-2  pb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
              </div>
              <div className="p-8  bg-white/90 backdrop-blur-sm border ">
                <div className="flex flex-wrap items-center gap-4">
                  <button title="Small" className={root({ size: "sm" })}>
                    Small
                  </button>
                  <button title="Default" className={root({ size: "default" })}>
                    Default
                  </button>
                  <button title="Large" className={root({ size: "lg" })}>
                    Large
                  </button>
                </div>
              </div>
            </section>

            <section id="disabled-state" className="scroll-m-20 space-y-8">
              <div className="flex items-center gap-2  pb-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Disabled
                </h2>
              </div>
              <div className="p-8  bg-white/90 backdrop-blur-sm border  flex flex-wrap gap-4">
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

            <section id="slots-example" className="scroll-m-20 space-y-8">
              <div className="flex items-center gap-2  pb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Slots</h2>
              </div>
              <div className=" bg-white/90 backdrop-blur-sm border  divide-y">
                {(
                  ["default", "outline", "secondary", "ghost", "link"] as const
                ).map((surface) => (
                  <div key={surface} className="p-8">
                    <div className="flex flex-wrap gap-4">
                      <button
                        title={`${surface} with slots`}
                        className={root({ surface })}
                      >
                        Default
                        <div className={end()}>
                          <PlusIcon className="ml-2 h-4 w-4" />
                        </div>
                      </button>

                      <button
                        title={`${surface} success with slots`}
                        className={root({ surface, color: "positive" })}
                      >
                        <div className={start()}>
                          <CheckIcon className="mr-2 h-4 w-4" />
                        </div>
                        Success
                      </button>

                      <button
                        title={`${surface} warning with slots`}
                        className={root({ surface, color: "warning" })}
                      >
                        <div className={start()}>
                          <AlertTriangleIcon className="mr-2 h-4 w-4" />
                        </div>
                        Warning
                      </button>

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
        </main>
      </div>
    </div>
  );
};

export default ButtonExamples;
