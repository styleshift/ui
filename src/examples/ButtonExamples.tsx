"use client";
import { useState } from "react";
import button from "../../components/button";
import {
  AlertTriangle as AlertTriangleIcon,
  Check as CheckIcon,
  Plus as PlusIcon,
  X as XIcon,
  Code as CodeIcon,
} from "lucide-react";

const ButtonExamples = () => {
  const { root, start, end } = button();
  const [showSurfaceCode, setShowSurfaceCode] = useState(false);
  const [showColorCode, setShowColorCode] = useState(false);
  const [showSizeCode, setShowSizeCode] = useState(false);
  const [showDisabledCode, setShowDisabledCode] = useState(false);
  const [showSlotsCode, setShowSlotsCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 text-zinc-800 pb-24 relative">
      <div className="absolute opacity-25 inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto px-4 py-12 sm:py-24 relative">
        <main className="max-w-5xl mx-auto space-y-12">
          <header className="space-y-6">
            <div className="inline-block">
              <h1 className="scroll-m-20 text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
                Button
              </h1>
              <div className="h-1 w-1/3 bg-gradient-to-r from-zinc-400 to-transparent mb-0" />
            </div>
          </header>

          <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
            <code className="text-xs">{`import { button } from "@/components/ui/button"
const { root } = button()
<button className={root()}>
  Default
</button>`}</code>
          </pre>
          <div className="space-y-12 sm:space-y-16">
            <section id="basic-buttons" className="scroll-m-20 space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Surface
                </h2>
                <p className="text-zinc-600 text-base opacity-80 leading-relaxed">
                  A button can have multiple surfaces which can be used to
                  indicate the importance of the button.
                </p>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-sm border">
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
              </div>
              <div className="flex justify-start">
                <button
                  onClick={() => setShowSurfaceCode(!showSurfaceCode)}
                  className={root({ surface: "ghost", size: "sm" })}
                >
                  <div className={start()}>
                    <CodeIcon className="mr-2 h-4 w-4" />
                  </div>
                  {showSurfaceCode ? "Hide code" : "View code"}
                </button>
              </div>
              {showSurfaceCode && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto text-sm">
                    <code className="text-xs">{`import { button } from "@/components/ui/button"

const { root } = button()

// Default
<button className={root()}>
  Default
</button>

// Outlined
<button className={root({ surface: "outline" })}>
  Outlined
</button>

// Secondary
<button className={root({ surface: "secondary" })}>
  Secondary
</button>

// Ghost
<button className={root({ surface: "ghost" })}>
  Ghost
</button>

// Link
<button className={root({ surface: "link" })}>
  Link
</button>`}</code>
                  </pre>
                </div>
              )}
            </section>

            <section id="color-variations" className="scroll-m-20 space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">Color</h2>
                <p className="text-zinc-600 text-base opacity-80 leading-relaxed">
                  Buttons can be styled with different colors using semantic or
                  Tailwind color values.
                </p>
              </div>

              {/* Semantic Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Semantic</h3>
                <div className="bg-white/90 backdrop-blur-sm border divide-y">
                  {(
                    [
                      "default",
                      "outline",
                      "secondary",
                      "ghost",
                      "link",
                    ] as const
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
                          title="Positive"
                          className={root({ surface, color: "positive" })}
                        >
                          Positive
                        </button>
                        <button
                          title="Warning"
                          className={root({ surface, color: "warning" })}
                        >
                          Warning
                        </button>
                        <button
                          title="Negative"
                          className={root({ surface, color: "negative" })}
                        >
                          Negative
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tailwind Colors */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tailwind</h3>
                <div className="bg-white/90 backdrop-blur-sm flex flex-wrap gap-2 p-4">
                  {(
                    [
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
                    ] as const
                  ).map((color) => (
                    <button title="Red" className={root({ color })}>
                      {String(color).charAt(0).toUpperCase() +
                        String(color).slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setShowColorCode(!showColorCode)}
                  className={root({ surface: "ghost", size: "sm" })}
                >
                  <div className={start()}>
                    <CodeIcon className="mr-2 h-4 w-4" />
                  </div>
                  {showColorCode ? "Hide code" : "View code"}
                </button>
              </div>
              {showColorCode && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
                    <code className="text-xs">{`import { button } from "@/components/ui/button"

const { root } = button()

// Semantic Colors
<button className={root({ surface: "default", color: "positive" })}>Success</button>
<button className={root({ surface: "default", color: "warning" })}>Warning</button>
<button className={root({ surface: "default", color: "negative" })}>Error</button>

// Tailwind Colors
<button className={root({ surface: "default", color: "red" })}>Red</button>
<button className={root({ surface: "default", color: "blue" })}>Blue</button>
<button className={root({ surface: "default", color: "green" })}>Green</button>
<button className={root({ surface: "default", color: "purple" })}>Purple</button>`}</code>
                  </pre>
                </div>
              )}
            </section>

            <section id="size-variations" className="scroll-m-20 space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">Size</h2>
                <p className="text-zinc-600 text-base opacity-80 leading-relaxed">
                  Buttons come in different sizes to accommodate various use
                  cases.
                </p>
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
              <div className="flex justify-start">
                <button
                  onClick={() => setShowSizeCode(!showSizeCode)}
                  className={root({ surface: "ghost", size: "sm" })}
                >
                  <div className={start()}>
                    <CodeIcon className="mr-2 h-4 w-4" />
                  </div>
                  {showSizeCode ? "Hide code" : "View code"}
                </button>
              </div>
              {showSizeCode && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
                    <code className="text-xs">{`import { button } from "@/components/ui/button"

const { root } = button()

<button className={root({ size: "sm" })}>Small</button>
<button className={root({ size: "default" })}>Default</button>
<button className={root({ size: "lg" })}>Large</button>`}</code>
                  </pre>
                </div>
              )}
            </section>

            <section id="disabled-state" className="scroll-m-20 space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Disabled
                </h2>
                <p className="text-zinc-600 text-base opacity-80 leading-relaxed">
                  Buttons can be disabled to indicate they are not interactive.
                </p>
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
              <div className="flex justify-start">
                <button
                  onClick={() => setShowDisabledCode(!showDisabledCode)}
                  className={root({ surface: "ghost", size: "sm" })}
                >
                  <div className={start()}>
                    <CodeIcon className="mr-2 h-4 w-4" />
                  </div>
                  {showDisabledCode ? "Hide code" : "View code"}
                </button>
              </div>
              {showDisabledCode && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
                    <code className="text-xs">{`import { button } from "@/components/ui/button"

const { root } = button()

<button className={root()} disabled>Disabled</button>
<button className={root({ surface: "outline" })} disabled>Disabled</button>
// etc...`}</code>
                  </pre>
                </div>
              )}
            </section>

            <section id="slots-example" className="scroll-m-20 space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">Slots</h2>
                <p className="text-zinc-600 text-base opacity-80 leading-relaxed">
                  Buttons support start and end slots for adding icons or other
                  content.
                </p>
              </div>

              {/* Start Slot Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Start Slot</h3>
                <div className="bg-white/90 backdrop-blur-sm border divide-y">
                  {(
                    [
                      "default",
                      "outline",
                      "secondary",
                      "ghost",
                      "link",
                    ] as const
                  ).map((surface) => (
                    <div key={surface} className="p-8">
                      <div className="flex flex-wrap gap-4">
                        <button
                          title={`${surface} success with start slot`}
                          className={root({ surface, color: "positive" })}
                        >
                          <div className={start()}>
                            <CheckIcon className="mr-2 h-4 w-4" />
                          </div>
                          Success
                        </button>

                        <button
                          title={`${surface} warning with start slot`}
                          className={root({ surface, color: "warning" })}
                        >
                          <div className={start()}>
                            <AlertTriangleIcon className="mr-2 h-4 w-4" />
                          </div>
                          Warning
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* End Slot Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">End Slot</h3>
                <div className="bg-white/90 backdrop-blur-sm border divide-y">
                  {(
                    [
                      "default",
                      "outline",
                      "secondary",
                      "ghost",
                      "link",
                    ] as const
                  ).map((surface) => (
                    <div key={surface} className="p-8">
                      <div className="flex flex-wrap gap-4">
                        <button
                          title={`${surface} with end slot`}
                          className={root({ surface })}
                        >
                          Default
                          <div className={end()}>
                            <PlusIcon className="ml-2 h-4 w-4" />
                          </div>
                        </button>

                        <button
                          title={`${surface} error with end slot`}
                          className={root({ surface, color: "negative" })}
                        >
                          Error
                          <div className={end()}>
                            <XIcon className="ml-2 h-4 w-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setShowSlotsCode(!showSlotsCode)}
                  className={root({ surface: "ghost", size: "sm" })}
                >
                  <div className={start()}>
                    <CodeIcon className="mr-2 h-4 w-4" />
                  </div>
                  {showSlotsCode ? "Hide code" : "View code"}
                </button>
              </div>
              {showSlotsCode && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
                    <code className="text-xs">{`import { button } from "@/components/ui/button"
                                        import { PlusIcon, CheckIcon, AlertTriangleIcon, XIcon } from "lucide-react"

                                        const { root, start, end } = button()

                                        // With start slot
                                        <button className={root({ color: "positive" })}>
                                          <div className={start()}>
                                            <CheckIcon className="mr-2 h-4 w-4" />
                                          </div>
                                          Success
                                        </button>

                                        // With end slot
                                        <button className={root()}>
                                          Default
                                          <div className={end()}>
                                            <PlusIcon className="ml-2 h-4 w-4" />
                                          </div>
                                        </button>`}</code>
                  </pre>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ButtonExamples;
