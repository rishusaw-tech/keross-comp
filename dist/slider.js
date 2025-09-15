"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./utils";
function Slider(_a) {
    var { className, defaultValue, value, min = 0, max = 100 } = _a, props = __rest(_a, ["className", "defaultValue", "value", "min", "max"]);
    const _values = React.useMemo(() => Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
            ? defaultValue
            : [min, max], [value, defaultValue, min, max]);
    return (_jsxs(SliderPrimitive.Root, Object.assign({ "data-slot": "slider", defaultValue: defaultValue, value: value, min: min, max: max, className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className) }, props, { children: [_jsx(SliderPrimitive.Track, { "data-slot": "slider-track", className: cn("relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"), style: { backgroundColor: "var(--keross-skeleton-bg)" }, children: _jsx(SliderPrimitive.Range, { "data-slot": "slider-range", className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") }) }), Array.from({ length: _values.length }, (_, index) => (_jsx(SliderPrimitive.Thumb, { "data-slot": "slider-thumb", className: "border-primary bg-white ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" }, index)))] })));
}
export { Slider };
