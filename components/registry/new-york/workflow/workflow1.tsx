"use client";


import { Badge } from "../badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

export type StepStatus = "OUTSTANDING" | "IN PROGRESS" | "COMPLETED";

export type WorkflowStep = {
  id: string;
  title: string;
  status: StepStatus;
  dropdownOptions?: { label: string; value: string }[];
  selectedOption?: string;
};

type WorkflowProps = {
  title?: string;
  steps: WorkflowStep[];
};

// 🎨 Default colors that adapt to light/dark theme
const statusColors: Record<StepStatus, string> = {
  OUTSTANDING:
    "bg-[#FFDE721A] text-[#FBB125] border border-[#FBB12533]",
  "IN PROGRESS":
    "bg-[#6A77D91A] text-[#6A77D9]",
  COMPLETED:
    "bg-[#519E591A] text-[#519E59] border border-[#FBB12533]",
};

export function Workflow({ title = "Deal Workflow", steps }: WorkflowProps) {
  const completedCount = steps.filter((s) => s.status === "COMPLETED").length;
  const progressPercent = (completedCount / steps.length) * 100;

  return (
    <div className="p-4 space-y-4 rounded-xl border dark:bg-[#171717] text-white keross:bg-[#1B2336]">
        
      <h2 className="text-lg font-semibold">{title}</h2>

      {steps.map((step) => (
        <div
          key={step.id}
          className="flex justify-between items-center p-4 border: 1px solid bg-#FFFFFF33  border border-neutral-600 rounded-lg"
        >
          <div className="flex flex-row gap-2">


                     <div className="w-[40px] h-[40px] dark:bg-neutral-800 bg-[#FFFFFF1A]  mr-2 rounded-lg"></div>
            <span>{step.title}</span>

            {step.dropdownOptions && (
              <Select defaultValue={step.selectedOption}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {step.dropdownOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <Badge className={statusColors[step.status]}>{step.status}</Badge>
        </div>
      ))}

      <div className="text-sm flex justify-between items-center pt-2">
        <span>{steps.length} steps total</span>
        <span>{completedCount} completed</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 dark:bg-blue-400 h-2 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}