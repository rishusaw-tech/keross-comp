"use client";

import { useState } from "react";
import { Card } from "./card";
import { Badge } from "./badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "./utils";

// Assuming these types are in a shared file like "../../app/workflow"
import { WorkflowAction } from "../../../app/workflow";

// If WorkflowStatus and WorkflowStep are in the same file as WorkflowAction,
// you can import them here as well. Otherwise, they need to be defined here.
type WorkflowStatus = "PENDING" | "IN PROGRESS" | "COMPLETED" | "OUTSTANDING" | "CANCELLED";

interface WorkflowStep {
  id: string;
  title: string;
  status: WorkflowStatus;
}

interface WorkflowProps {
  initialSteps?: WorkflowStep[];
  selectActions?: WorkflowAction[];
}

// Destructure the selectActions prop with a default empty array
export function Workflow({ initialSteps = [], selectActions = [] }: WorkflowProps) {
  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps);
  const completedCount = steps.filter((s) => s.status === "COMPLETED").length;

  const handleAction = (
    stepIndex: number,
    action: WorkflowAction // Use the imported type
  ) => {
    setSteps((prev) =>
      prev.map((step, idx) => {
        if (idx !== stepIndex) return step;

        // Note: You will need to map custom actions to a WorkflowStatus.
        // The current logic hardcodes the actions, so you might need to
        // expand this switch statement based on the possible custom actions.
        switch (action) {
          case "Completed":
          case "Mark as Done": // Example custom action from WorkflowAction
            return { ...step, status: "COMPLETED" };
          case "Go Back":
          case "Revert": // Example custom action from WorkflowAction
            return { ...step, status: "PENDING" };
          case "Outstanding":
          case "Flag": // Example custom action from WorkflowAction
            return { ...step, status: "OUTSTANDING" };
          default:
            return step;
        }
      })
    );
  };

  const statusColor = (status: WorkflowStatus) => {
    switch (status) {
      case "COMPLETED":
        return "bg-[#519E591A] text-[#519E59] border border-[#FBB12533]";
      case "IN PROGRESS":
        return "bg-[#6A77D91A] text-[#6A77D9]";
      case "OUTSTANDING":
        return "bg-[#FFDE721A] text-[#FBB125] border border-[#FBB12533]";
      case "CANCELLED":
        return "bg-[#FFC0CB1A] text-[#FF6961] border border-[#FBB12533]";
      case "PENDING":
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="p-4 border border-[#1B2336] rounded-lg w-[386px]">
      <h2 className="font-semibold mb-4">Deal Workflow</h2>
      <div className="space-y-4 relative">
        {steps.map((step, idx) => (
          <div key={step.id} className="relative flex items-center border border-[#1B2336] p-2 rounded-lg w-[349px]">
            {/* Step icon */}
            <div className="z-10 w-10 h-10 rounded-md bg-input flex items-center justify-center"></div>

            {/* Step content */}
            <div className="ml-4 flex-1 flex items-center justify-between">
              <div>
                <span className="font-medium">{step.title}</span>
                {step.status === "IN PROGRESS" && (
                  <Select onValueChange={(val) => handleAction(idx, val as WorkflowAction)}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Action" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Dynamically render SelectItems based on the prop */}
                      {selectActions.map((action) => (
                        <SelectItem key={action} value={action}>
                          {action}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge className={cn(statusColor(step.status))}>
                  {step.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Progress footer */}
      <div className="mt-4 flex justify-between text-sm text-muted-foreground">
        <span>{steps.length} steps total</span>
        <span>{completedCount} completed</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full mt-2 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${(completedCount / steps.length) * 100}%`,
            background: "linear-gradient(90deg, #55C8FF 0%, #034F73 100%)",
          }}
        />
      </div>
    </div>
  );
}