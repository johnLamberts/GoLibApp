import {
  CheckCircle2Icon,
  Circle,
  ClockIcon,
  HelpCircle,
  MoveDownIcon,
  MoveRightIcon,
  MoveUpIcon,
  XCircleIcon,
} from "lucide-react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ClockIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2Icon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircleIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: MoveDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: MoveRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: MoveUpIcon,
  },
];
