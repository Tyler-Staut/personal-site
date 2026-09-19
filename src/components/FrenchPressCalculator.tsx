import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

import { aeonEase, fadeUpTransition, inViewViewport } from "./motion";

interface Step {
  time: string;
  label: string;
  value: string;
  detail: string;
  type: "pour" | "action" | "wait";
}

function generateSteps(
  liquidSize: number,
  coffeeWeight: number,
): Step[] {
  return [
    { time: "PRE", label: "Prepare", value: `${coffeeWeight}g`, detail: "Coarse grind. Add coffee to carafe.", type: "action" },
    { time: "0:00", label: "Combine", value: `${liquidSize}ml`, detail: "Pour hot water over grounds. Let sit 4 minutes.", type: "pour" },
    { time: "4:00", label: "Stir", value: "", detail: "Break the crust with two spoons. Scoop away floating grounds.", type: "action" },
    { time: "4:30", label: "Wait", value: "", detail: "Do nothing for 9 minutes 30 seconds.", type: "wait" },
    { time: "14:00", label: "Plunge", value: "", detail: "Press plunger just below the surface. Pour gently.", type: "action" },
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

export default function FrenchPressCalculator() {
  const [inputWater, setInputWater] = useState(500);

  const coffeeWeight = Math.round(inputWater * 0.06);
  const steps = generateSteps(inputWater, coffeeWeight);

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
            French Press
          </h2>
        </div>
        <p className="mt-2 font-body text-sm leading-6 text-white/52">
          Hoffmann immersion method with a 14-minute steep.
        </p>

        <div className="mt-8">
          <RangeInput
            label="Input Water"
            unit="ml"
            value={inputWater}
            onChange={setInputWater}
            min={200}
            max={1500}
            step={50}
          />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
              Coffee Dose
            </div>
            <div className="mt-1 font-display text-xl text-accent-blue">
              {coffeeWeight}
              <span className="ml-1 text-sm text-white/52">g</span>
            </div>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
              Input Water
            </div>
            <div className="mt-1 font-display text-xl text-warm-gold">
              {inputWater}
              <span className="ml-1 text-sm text-white/52">ml</span>
            </div>
          </div>
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.24em] text-white/52">
              Steep Time
            </div>
            <div className="mt-1 font-display text-xl text-white">
              14
              <span className="ml-1 text-sm text-white/52">min</span>
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
