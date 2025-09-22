export type WorkflowStatus = "PENDING" | "IN PROGRESS" | "COMPLETED" | "OUTSTANDING" | "CANCELLED"
export type WorkflowAction = string;
export interface WorkflowStep {
  id: string
  title: string
  status: WorkflowStatus
   selectActions?: WorkflowAction[];
}
