export enum AppView {
  DASHBOARD = 'dashboard',
  SALES_CHATBOT = 'chatbot',
  HOUSING_ANALYSIS = 'housing',
  DIVORCE_ONLINE = 'divorce',
  SUCCESS = 'success'
}

export interface SubmissionContext {
  serviceName: string;
}
