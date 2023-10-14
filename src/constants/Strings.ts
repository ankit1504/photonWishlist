export enum LoginType {
  phoneno = "phoneno",
  email = "email",
}

export enum CurrencyConvert {
  Lakhs = "lakhs",
  Crore = "Cr",
  Thousands = "K",
  Original = "NA",
}

export enum RequestListStatus {
  OPTIMISED = "optimised",
  OPTIMISING = "optimising",
  SENT_TO_CM = "sent_to_cluster_manager",
  SENT_TO_STORE = "sent_to_store",
  COMPLETED = "completed",
  PROCESSING_CM = "processing_sent_to_cluster_manager",
  PROCESSING_OPTIMISED = "processing_optimised",
  PROCESSING = "processing",
  PENDING = "pending",
}

export const RequestListStatusMap = new Map([
  ["optimised", "Optimised"],
  ["optimising", "Optimising"],
  ["sent_to_cluster_manager", "Sent to Cluster Manager"],
  ["sent_to_store", "Sent to Store"],
  ["completed", "Completed"],
  ["processing", "Processing"],
  ["processing_sent_to_cluster_manager", "Processing"],
  ["processing_optimised", "Processing"],
  ["pending", "Pending"],
]);

export enum SummaryGridLabels {
  CATEGORY = "category",
  DATE_OF_OPTIMISATION = "dateOfOptimisation",
  CURRENT_STATUS = "currentStatus",
  REMAINING_DAYS = "remainingDays",
  DEVIATION = "deviation",
  COMPLETED_ON = "completedOn",
}