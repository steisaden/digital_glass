"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";
import { useEffect, useRef } from "react";

const BAND_HALF = 17;
const SWEEP_START = -BAND_HALF;
const SWEEP_END = 100 + BAND_HALF;

const sweepEase = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;

function buildGradient(
  position: number,
  colors: string[],
  textColor: string,
  pendingTextColor: string,
) {
  const bandStart = position - BAND_HALF;
  const bandEnd = position + BAND_HALF;

  if (bandStart >= 100) {
    return `linear-gradient(90deg, ${textColor}, ${textColor})`;
  }

  const stops: string[] = [];

  if (bandStart > 0) {
    stops.push(
      `${textColor} 0%`,
      `${textColor} ${bandStart.toFixed(2)}%`,
    );
  }

  colors.forEach((color, index) => {
    const stop =
      colors.length === 1
        ? position
        : bandStart + (index / (colors.length - 1)) * BAND_HALF * 2;
    stops.push(`${color} ${stop.toFixed(2)}%`);
  });

  if (bandEnd < 100) {
    stops.push(
      `${pendingTextColor} ${bandEnd.toFixed(2)}%`,
      `${pendingTextColor} 100%`,
    );
  }

  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

export interface DiaTextRevealProps extends Omit<
  HTMLMotionProps<"span">,
  "ref" | "children" | "style" | "animate" | "transition" | "color"
> {
  text: string;
  colors: string[];
  textColor: string;
  pendingTextColor: string;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  once?: boolean;
}

export function DiaTextReveal({
  text,
  colors,
  textColor,
  pendingTextColor,
  duration = 1.25,
  delay = 0,
  startOnView = true,
  once = true,
  className,
  ...props
}: DiaTextRevealProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasPlayedRef = useRef(false);
  const optionsRef = useRef({
    colors,
    textColor,
    pendingTextColor,
    duration,
    delay,
  });

  const prefersReducedMotion = useReducedMotion();
  const sweepPosition = useMotionValue(SWEEP_START);
  const isInView = useInView(spanRef, { once, amount: 0.1 });
  const backgroundImage = useTransform(sweepPosition, (position) =>
    buildGradient(
      position,
      optionsRef.current.colors,
      optionsRef.current.textColor,
      optionsRef.current.pendingTextColor,
    ),
  );

  useEffect(() => {
    optionsRef.current = {
      colors,
      textColor,
      pendingTextColor,
      duration,
      delay,
    };
  }, [colors, delay, duration, pendingTextColor, textColor]);

  useEffect(() => {
    if (prefersReducedMotion) {
      sweepPosition.set(SWEEP_END);
      return;
    }

    if (startOnView && !isInView) {
      return;
    }

    if (once && hasPlayedRef.current) {
      return;
    }

    hasPlayedRef.current = true;
    const controls = animate(sweepPosition, SWEEP_END, {
      duration: optionsRef.current.duration,
      delay: optionsRef.current.delay,
      ease: sweepEase,
    });

    return () => controls.stop();
  }, [
    isInView,
    once,
    prefersReducedMotion,
    startOnView,
    sweepPosition,
  ]);

  return (
    <motion.span
      ref={spanRef}
      className={className}
      style={{
        color: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundImage,
      }}
      {...props}
    >
      {text}
    </motion.span>
  );
}
