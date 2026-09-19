import { MotionConfig, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { aeonEase, fadeUpTransition, inViewViewport } from "./motion";

interface Step {
  time: string;
  label: string;
  value: string;
  detail: string;
  type: "pour" | "action" | "wait";
}

function generateSteps(inputWater: number, coffeeDose: number): Step[] {
  const bloomWater = Math.round(coffeeDose * 2);
  const remaining = inputWater - bloomWater;

  if (remaining <= 0) {
    return [
      { time: "ERR", label: "", value: "", detail: "Bloom exceeds total water.", type: "action" },
    ];
  }

  const pour1 = Math.round(remaining * 2 / 7);
  const pour2 = Math.round(remaining * 3 / 7);
  const pour3 = remaining - pour1 - pour2;

  const total1 = bloomWater + pour1;
  const total2 = total1 + pour2;
  const total3 = total2 + pour3;

  return [
    { time: "PRE", label: "Prepare", value: "", detail: "Rinse paper filter with hot water.", type: "action" },
    { time: "0:00", label: "Pour", value: `${bloomWater}g`, detail: "Bloom — saturate all coffee grounds.", type: "pour" },
    { time: "0:10", label: "Swirl", value: "", detail: "Gently swirl the brewer.", type: "action" },
    { time: "0:30", label: "Pour", value: `${pour1}g`, detail: `Total: ${total1}g`, type: "pour" },
    { time: "1:10", label: "Pour", value: `${pour2}g`, detail: `Total: ${total2}g`, type: "pour" },
    { time: "2:00", label: "Pour", value: `${pour3}g`, detail: `Total: ${total3}g`, type: "pour" },
    { time: "END", label: "Drawdown", value: "", detail: "Wait until coffee bed is dry.", type: "wait" },
  ];
}

function RangeInput({
  label,
  unit,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  unit: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
          {label}
        </label>
        <span className="font-display text-lg text-white">
          {value}
          <span className="ml-1 text-sm text-white/52">{unit}</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - step))}
          disabled={value <= min}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/05 text-sm text-white/62 transition-colors hover:border-accent-blue/45 hover:text-accent-blue disabled:pointer-events-none disabled:opacity-30 leading-none"
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-slider w-full"
          aria-label={label}
        />
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + step))}
          disabled={value >= max}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/05 text-sm text-white/62 transition-colors hover:border-accent-blue/45 hover:text-accent-blue disabled:pointer-events-none disabled:opacity-30 leading-none"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function V60Calculator() {
  const [inputWater, setInputWater] = useState(400);
  const [coffeeDose, setCoffeeDose] = useState(25);

  const steps = useMemo(
    () => generateSteps(inputWater, coffeeDose),
    [inputWater, coffeeDose],
  );

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewViewport}
        transition={fadeUpTransition}
        className="border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
      >
        <div className="flex items-center gap-2">
          <h2 className="font-display text-[1.6rem] uppercase tracking-[0.06em] text-white sm:text-2xl">
            Pour Over (V60)
          </h2>
        </div>
        <p className="mt-2 font-body text-sm leading-6 text-white/52">
          Multi-pour Hoffmann-inspired method. Adjust to taste.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <RangeInput
            label="Input Water"
            unit="ml"
            value={inputWater}
            onChange={setInputWater}
            min={200}
            max={800}
            step={10}
          />
          <RangeInput
            label="Coffee Dose"
            unit="g"
            value={coffeeDose}
            onChange={setCoffeeDose}
            min={10}
            max={40}
            step={0.5}
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
              Input Water
            </div>
            <div className="mt-1 font-display text-xl text-accent-blue">
              {inputWater}
              <span className="ml-1 text-sm text-white/52">ml</span>
            </div>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
              Ratio
            </div>
            <div className="mt-1 font-display text-xl text-white">
              1:{(inputWater / coffeeDose).toFixed(1)}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-[11px] uppercase tracking-[0.26em] text-accent-blue">
            Brew Sequence
          </h3>
          <div className="mt-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-[4.5rem_4.5rem_5rem_1fr] gap-3 border-t border-white/5 py-2.5 text-[13px] leading-6 first:border-t-0 sm:gap-4 sm:text-sm"
              >
                <span
                  className={`font-display text-[11px] uppercase tracking-[0.12em] ${
                    step.type === "pour"
                      ? "text-warm-gold"
                      : step.type === "action"
                        ? "text-accent-blue"
                        : "text-white/40"
                  }`}
                >
                  {step.time}
                </span>
                <span
                  className={`font-display text-[11px] uppercase tracking-[0.12em] ${
                    step.type === "pour"
                      ? "text-warm-gold"
                      : step.type === "action"
                        ? "text-accent-blue"
                        : "text-white/40"
                  }`}
                >
                  {step.label || ""}
                </span>
                <span className="font-display text-[13px] text-white">
                  {step.value || ""}
                </span>
                <span className="text-white/52">{step.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
