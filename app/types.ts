export type StepStatus = "OUTSTANDING" | "IN PROGRESS" | "COMPLETED";

export type StepOption = {
  label: string;
  value: string;
};

export type WorkflowStep = {
  id: string;
  title: string;
  status: StepStatus;
  dropdownOptions?: StepOption[]; // optional dropdown
  selectedOption?: string;       // optional initial selection
};

export type DealWorkflowProps = {
  title?: string;
  steps: WorkflowStep[];
  /**
   * Optional class map where each value is a tailwind class-string that
   * includes both light and dark classes, e.g.
   * "bg-yellow-200 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-50"
   */
  statusClassMap?: Record<StepStatus, string>;
  className?: string;
};