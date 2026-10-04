export type SubmissionStatus = 'normal' | 'needs_attention';

export const SubmissionStatusConstants: Record<string, SubmissionStatus> = {
  NORMAL: 'normal',
  NEEDS_ATTENTION: 'needs_attention',
};

export interface Submission {
  id: string;
  formId: string;
  data: {
    athleteName: string;
    sessionType: string;
    duration: number;
    intensity: number;
    fingerPain: number;
    notes: string;
  };
  status: string;
  isReviewed: boolean;
  submittedAt: number;
}
