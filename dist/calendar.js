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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "./utils";
import { Button, buttonVariants } from "./button";
function Calendar(_a) {
    var { className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components } = _a, props = __rest(_a, ["className", "classNames", "showOutsideDays", "captionLayout", "buttonVariant", "formatters", "components"]);
    const defaultClassNames = getDefaultClassNames();
    return (_jsx(DayPicker, Object.assign({ showOutsideDays: showOutsideDays, className: cn("bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]&]:bg-transparent [[data-slot=popover-content]&]:bg-transparent", "dark:bg-[#202020]", String.raw `rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw `rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className), captionLayout: captionLayout, formatters: Object.assign({ formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }) }, formatters), classNames: Object.assign({ root: cn("w-fit", defaultClassNames.root), months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months), month: cn("flex flex-col w-full gap-4", defaultClassNames.month), nav: cn("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav), button_previous: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_previous), button_next: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_next), month_caption: cn("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)", defaultClassNames.month_caption), dropdowns: cn("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5", defaultClassNames.dropdowns), dropdown_root: cn("relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md", "bg-[rgba(0,0,0,0.17)]", defaultClassNames.dropdown_root), dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown), caption_label: cn("select-none font-medium", captionLayout === "label"
                ? "text-sm"
                : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5", defaultClassNames.caption_label), table: "w-full border-collapse", weekdays: cn("flex", defaultClassNames.weekdays), weekday: cn("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none", defaultClassNames.weekday), week: cn("flex w-full mt-2", defaultClassNames.week), week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header), week_number: cn("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number), day: cn("relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none", defaultClassNames.day), range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start), range_middle: cn("rounded-none", defaultClassNames.range_middle), range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end), today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today), outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside), disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled), hidden: cn("invisible", defaultClassNames.hidden) }, classNames), components: Object.assign({ Root: (_a) => {
                var { className, rootRef } = _a, props = __rest(_a, ["className", "rootRef"]);
                return (_jsx("div", Object.assign({ "data-slot": "calendar", ref: rootRef, className: cn(className) }, props)));
            }, Chevron: (_a) => {
                var { className, orientation } = _a, props = __rest(_a, ["className", "orientation"]);
                if (orientation === "left") {
                    return (_jsx(ChevronLeftIcon, Object.assign({ className: cn("size-4", className) }, props)));
                }
                if (orientation === "right") {
                    return (_jsx(ChevronRightIcon, Object.assign({ className: cn("size-4", className) }, props)));
                }
                return (_jsx(ChevronDownIcon, Object.assign({ className: cn("size-4", className) }, props)));
            }, DayButton: CalendarDayButton, WeekNumber: (_a) => {
                var { children } = _a, props = __rest(_a, ["children"]);
                return (_jsx("td", Object.assign({}, props, { children: _jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: children }) })));
            } }, components) }, props)));
}
function CalendarDayButton(_a) {
    var { className, day, modifiers } = _a, props = __rest(_a, ["className", "day", "modifiers"]);
    const defaultClassNames = getDefaultClassNames();
    const ref = React.useRef(null);
    React.useEffect(() => {
        var _a;
        if (modifiers.focused)
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [modifiers.focused]);
    return (_jsx(Button, Object.assign({ ref: ref, variant: "ghost", size: "icon", "data-day": day.date.toLocaleDateString(), "data-selected-single": modifiers.selected &&
            !modifiers.range_start &&
            !modifiers.range_end &&
            !modifiers.range_middle, "data-range-start": modifiers.range_start, "data-range-end": modifiers.range_end, "data-range-middle": modifiers.range_middle, className: cn("data-[selected-single=true]:bg-[var(--calender-foreground)] data-[selected-single=true]:text-white dark:data-[selected-single=true]:text-black", 
        // Make sure the background is transparent for dates in the middle of the range
        "data-[range-middle=true]:bg-[var(--ring)] data-[range-middle=true]:text-white root:text-black", 
        // Set background color for the start of the range
        "data-[range-start=true]:bg-[var(--calender-foreground)] dark:data-[range-start=true]:text-black data-[range-start=true]:text-white", 
        // Set background color for the end of the range
        "data-[range-end=true]:bg-[var(--calender-foreground)] data-[range-end=true]:text-white dark:data-[range-end=true]:text-black", "group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70 root:text-black", defaultClassNames.day, className) }, props)));
}
export { Calendar, CalendarDayButton };
