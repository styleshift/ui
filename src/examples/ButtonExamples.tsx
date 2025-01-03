"use client";
import { useState } from "react";
import button from "../../components/button";
import { Check as CheckIcon, Plus as PlusIcon, Code } from "lucide-react";

interface CodeSectionProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

const ButtonExamples = () => {
  const { root, start, end } = button();

  // Consolidate state into a single object
  const [showCode, setShowCode] = useState<Record<string, boolean>>({});

  // Reusable code section component
  function CodeSection({
    title,
    description,
    code,
    children,
  }: CodeSectionProps) {
    return (
      <section className="scroll-m-20 space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            {description}
          </p>
          <div className="flex justify-start">
            <button
              onClick={() =>
                setShowCode((prev) => ({ ...prev, [title]: !prev[title] }))
              }
              className={root({ surface: "ghost", size: "sm" })}
            >
              <div className={start()}>
                <Code className="h-4 w-4 mr-2" />
              </div>
              {showCode[title] ? "Hide code" : "View code"}
            </button>
          </div>
          {showCode[title] && (
            <pre className="p-4 rounded-lg bg-zinc-950 text-zinc-50 overflow-x-auto">
              <code className="text-xs">{code}</code>
            </pre>
          )}
          <div className="p-8 bg-white/90 backdrop-blur-sm border rounded-lg">
            {children}
          </div>
        </div>
      </section>
    );
  }

  const surfaces = [
    "default",
    "secondary",
    "outline",
    "ghost",
    "link",
  ] as const;
  const sizes = ["xs", "sm", "default", "md", "lg", "xl"] as const;
  const colors = [
    "neutral",
    "slate",
    "gray",
    "zinc",
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
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 text-zinc-800 pb-24 relative">
      <div className="absolute opacity-25 inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto px-4 py-12 sm:py-24 relative">
        <main className="max-w-5xl mx-auto space-y-12">
          <header className="space-y-6">
            <div className="inline-block">
              <h1 className="scroll-m-20 mb-4 text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
                Button
              </h1>
              <div className="h-2 w-[200px] bg-gradient-to-r from-zinc-400 to-transparent mb-0" />
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
            <CodeSection
              title="Surface"
              description="A button can have multiple surfaces which can be used to indicate the importance of the button."
              code={`import { button } from "@/components/ui/button"
const { root } = button()
${surfaces.map((s) => `<button className={root({ surface: "${s}" })}>${s}</button>`).join("\n")}`}
            >
              <div className="flex flex-wrap gap-4">
                {surfaces.map((surface) => (
                  <button key={surface} className={root({ surface })}>
                    {surface}
                  </button>
                ))}
              </div>
            </CodeSection>

            <CodeSection
              title="Size"
              description="Buttons come in different sizes to accommodate various use cases."
              code={`import { button } from "@/components/ui/button"
const { root } = button()
${sizes.map((s) => `<button className={root({ size: "${s}" })}>${s}</button>`).join("\n")}`}
            >
              <div className="flex flex-wrap items-center gap-4">
                {sizes.map((size) => (
                  <button key={size} className={root({ size })}>
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </CodeSection>

            <CodeSection
              title="Disabled"
              description="Buttons can be disabled to indicate they are not interactive."
              code={`import { button } from "@/components/ui/button"

const { root } = button()

<button className={root()} disabled>Disabled</button>
<button className={root({ surface: "outline" })} disabled>Disabled</button>
// etc...`}
            >
              <div className="p-8 bg-white/90 backdrop-blur-sm border rounded-lg flex flex-wrap gap-4">
                <button title="Disabled Default" className={root()} disabled>
                  Disabled
                </button>
                <button
                  title="Disabled Outline"
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
            </CodeSection>

            <CodeSection
              title="Slots"
              description="Buttons support start and end slots for adding icons or other content."
              code={`import { button } from "@/components/ui/button"
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
                                        </button>`}
            >
              <div className="space-y-4">
                <div className="bg-white/90 backdrop-blur-sm border rounded-lg p-8">
                  <div className="flex flex-wrap gap-4">
                    <button title="Button with start slot" className={root()}>
                      <div className={start()}>
                        <PlusIcon className="mr-2 h-4 w-4" />
                      </div>
                      Start
                    </button>
                    <button title="Button with end slot" className={root()}>
                      End
                      <div className={end()}>
                        <PlusIcon className="ml-2 h-4 w-4" />
                      </div>
                    </button>
                    <button title="Button with end slot" className={root()}>
                      <div className={start()}>
                        <CheckIcon className="mr-2 h-4 w-4" />
                      </div>
                      Both
                      <div className={end()}>
                        <PlusIcon className="ml-2 h-4 w-4" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </CodeSection>

            <CodeSection
              title="Color"
              description="Buttons can be styled with different colors using Tailwind color values."
              code={`import { button } from "@/components/ui/button"

const { root } = button()

// Tailwind Colors
<button className={root({ surface: "default", color: "red" })}>Red</button>
<button className={root({ surface: "default", color: "blue" })}>Blue</button>
<button className={root({ surface: "default", color: "green" })}>Green</button>
<button className={root({ surface: "default", color: "purple" })}>Purple</button>`}
            >
              <div className="space-y-4">
                <div className="bg-white/90 backdrop-blur-sm flex flex-wrap gap-4 p-8 border rounded-lg">
                  {colors.map((color) => (
                    <button
                      key={color}
                      title={color}
                      className={root({ color })}
                    >
                      {String(color).charAt(0).toUpperCase() +
                        String(color).slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </CodeSection>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ButtonExamples;
