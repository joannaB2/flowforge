'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Submission } from '@/app/types/Submission';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#818cf8',
  },
} satisfies ChartConfig;

export const DashboardCharts = ({
  submissionsList,
}: {
  submissionsList: Submission[];
}) => {
  if (!submissionsList || submissionsList.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        No data available
      </div>
    );
  }

  const getSubmissionsFromLastWeek = () => {
    const now = new Date();
    const weekAgo = new Date();

    weekAgo.setDate(now.getDate() - 7);

    return submissionsList.filter(
      (submission) => new Date(submission.submittedAt) >= weekAgo,
    );
  };

  const submissionsFromLastWeek = getSubmissionsFromLastWeek();

  const weeklySubmissionListByDate = Object.groupBy(
    submissionsFromLastWeek,
    (submission) =>
      new Date(submission.submittedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
  );

  const weeklySubmissions = Object.entries(weeklySubmissionListByDate).map(
    ([date, submissions]) => ({
      date,
      submissions: submissions && submissions.length,
    }),
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="py-4 text-lg font-bold">Weekly Submissions</h2>
      <ChartContainer config={chartConfig} className="max-h-120">
        <LineChart accessibilityLayer data={weeklySubmissions}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis dataKey="submissions" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line dataKey="submissions" fill="var(--color-desktop)" radius={4} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
