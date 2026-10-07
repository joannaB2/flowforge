'use client';

import { mockSubmissions } from '@/mocks/submissions';
import { SubmissionStatusConstants } from '@/types/Submission';
import { Card } from '@/components/ui/card';
import { DashboardCharts } from './DahboardCharts';

export const DashboardContent = () => {
  const unreviewedSubmissions = mockSubmissions.filter(
    (submission) => !submission.isReviewed,
  );

  const needsAttentionSubmissions = mockSubmissions.filter(
    (submission) =>
      submission.status === SubmissionStatusConstants.NEEDS_ATTENTION,
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-xl text-gray-500">Overview</h1>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        {unreviewedSubmissions.length > 0 && (
          <Card className="p-4">
            <div className="text-lg font-bold">Unreviewed Submissions</div>
            <div className="text-gray-500">
              You have {unreviewedSubmissions.length} unreviewed submissions.
            </div>
          </Card>
        )}
        {needsAttentionSubmissions.length > 0 && (
          <Card className="border border-red-500 p-4">
            <div className="text-lg font-bold">
              Submissions Needing Attention
            </div>
            <div className="text-gray-500">
              You have {needsAttentionSubmissions.length} submissions needing
              attention.
            </div>
          </Card>
        )}
      </div>
      <DashboardCharts submissionsList={mockSubmissions} />
    </div>
  );
};
