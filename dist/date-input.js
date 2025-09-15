import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
const DateInput = ({ value, onChange }) => {
    const [date, setDate] = React.useState(() => {
        const d = value ? new Date(value) : new Date();
        return {
            day: d.getDate(),
            month: d.getMonth() + 1, // JavaScript months are 0-indexed
            year: d.getFullYear()
        };
    });
    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const yearRef = useRef(null);
    useEffect(() => {
        const d = value ? new Date(value) : new Date();
        setDate({
            day: d.getDate(),
            month: d.getMonth() + 1,
            year: d.getFullYear()
        });
    }, [value]);
    const validateDate = (field, value) => {
        if ((field === 'day' && (value < 1 || value > 31)) ||
            (field === 'month' && (value < 1 || value > 12)) ||
            (field === 'year' && (value < 1000 || value > 9999))) {
            return false;
        }
        // Validate the day of the month
        const newDate = Object.assign(Object.assign({}, date), { [field]: value });
        const d = new Date(newDate.year, newDate.month - 1, newDate.day);
        return d.getFullYear() === newDate.year &&
            d.getMonth() + 1 === newDate.month &&
            d.getDate() === newDate.day;
    };
    const handleInputChange = (field) => (e) => {
        const newValue = e.target.value ? Number(e.target.value) : '';
        const isValid = typeof newValue === 'number' && validateDate(field, newValue);
        // If the new value is valid, update the date
        const newDate = Object.assign(Object.assign({}, date), { [field]: newValue });
        setDate(newDate);
        // only call onChange when the entry is valid
        if (isValid) {
            onChange(new Date(newDate.year, newDate.month - 1, newDate.day));
        }
    };
    const initialDate = useRef(date);
    const handleBlur = (field) => (e) => {
        if (!e.target.value) {
            setDate(initialDate.current);
            return;
        }
        const newValue = Number(e.target.value);
        const isValid = validateDate(field, newValue);
        if (!isValid) {
            setDate(initialDate.current);
        }
        else {
            // If the new value is valid, update the initial value
            initialDate.current = Object.assign(Object.assign({}, date), { [field]: newValue });
        }
    };
    const handleKeyDown = (field) => (e) => {
        var _a, _b, _c, _d;
        // Allow command (or control) combinations
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        // Prevent non-numeric characters, excluding allowed keys
        if (!/^[0-9]$/.test(e.key) &&
            ![
                'ArrowUp',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight',
                'Delete',
                'Tab',
                'Backspace',
                'Enter'
            ].includes(e.key)) {
            e.preventDefault();
            return;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            let newDate = Object.assign({}, date);
            if (field === 'day') {
                if (date[field] === new Date(date.year, date.month, 0).getDate()) {
                    newDate = Object.assign(Object.assign({}, newDate), { day: 1, month: (date.month % 12) + 1 });
                    if (newDate.month === 1)
                        newDate.year += 1;
                }
                else {
                    newDate.day += 1;
                }
            }
            if (field === 'month') {
                if (date[field] === 12) {
                    newDate = Object.assign(Object.assign({}, newDate), { month: 1, year: date.year + 1 });
                }
                else {
                    newDate.month += 1;
                }
            }
            if (field === 'year') {
                newDate.year += 1;
            }
            setDate(newDate);
            onChange(new Date(newDate.year, newDate.month - 1, newDate.day));
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            let newDate = Object.assign({}, date);
            if (field === 'day') {
                if (date[field] === 1) {
                    newDate.month -= 1;
                    if (newDate.month === 0) {
                        newDate.month = 12;
                        newDate.year -= 1;
                    }
                    newDate.day = new Date(newDate.year, newDate.month, 0).getDate();
                }
                else {
                    newDate.day -= 1;
                }
            }
            if (field === 'month') {
                if (date[field] === 1) {
                    newDate = Object.assign(Object.assign({}, newDate), { month: 12, year: date.year - 1 });
                }
                else {
                    newDate.month -= 1;
                }
            }
            if (field === 'year') {
                newDate.year -= 1;
            }
            setDate(newDate);
            onChange(new Date(newDate.year, newDate.month - 1, newDate.day));
        }
        if (e.key === 'ArrowRight') {
            if (e.currentTarget.selectionStart === e.currentTarget.value.length ||
                (e.currentTarget.selectionStart === 0 &&
                    e.currentTarget.selectionEnd === e.currentTarget.value.length)) {
                e.preventDefault();
                if (field === 'month')
                    (_a = dayRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                if (field === 'day')
                    (_b = yearRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        else if (e.key === 'ArrowLeft') {
            if (e.currentTarget.selectionStart === 0 ||
                (e.currentTarget.selectionStart === 0 &&
                    e.currentTarget.selectionEnd === e.currentTarget.value.length)) {
                e.preventDefault();
                if (field === 'day')
                    (_c = monthRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                if (field === 'year')
                    (_d = dayRef.current) === null || _d === void 0 ? void 0 : _d.focus();
            }
        }
    };
    return (_jsxs("div", { className: "flex border rounded-lg items-center text-sm px-1", children: [_jsx("input", { type: "text", ref: monthRef, max: 12, maxLength: 2, value: date.month.toString(), onChange: handleInputChange('month'), onKeyDown: handleKeyDown('month'), onFocus: (e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select();
                    }
                }, onBlur: handleBlur('month'), className: "p-0 outline-none w-6 border-none text-center", placeholder: "M" }), _jsx("span", { className: "opacity-20 -mx-px", children: "/" }), _jsx("input", { type: "text", ref: dayRef, max: 31, maxLength: 2, value: date.day.toString(), onChange: handleInputChange('day'), onKeyDown: handleKeyDown('day'), onFocus: (e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select();
                    }
                }, onBlur: handleBlur('day'), className: "p-0 outline-none w-7 border-none text-center", placeholder: "D" }), _jsx("span", { className: "opacity-20 -mx-px", children: "/" }), _jsx("input", { type: "text", ref: yearRef, max: 9999, maxLength: 4, value: date.year.toString(), onChange: handleInputChange('year'), onKeyDown: handleKeyDown('year'), onFocus: (e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select();
                    }
                }, onBlur: handleBlur('year'), className: "p-0 outline-none w-12 border-none text-center", placeholder: "YYYY" })] }));
};
DateInput.displayName = 'DateInput';
export { DateInput };
