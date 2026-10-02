const athletes = [
  'Anna Kowalska',
  'Julia Nowak',
  'Mark Nowak',
  'Kasia Zielińska',
  'Tomasz Wiśniewski',
  'Piotr Lewandowski',
  'Marta Wójcik',
];
const sessionTypes = ['Bouldering', 'Lead climbing', 'Strength', 'Fingerboard'];
const days = [
  Date.UTC(2026, 9, 2),
  Date.UTC(2026, 9, 1),
  Date.UTC(2026, 8, 30),
  Date.UTC(2026, 8, 29),
  Date.UTC(2026, 8, 28),
  Date.UTC(2026, 8, 27),
  Date.UTC(2026, 8, 26),
];

const additionalSubmissions = Array.from({ length: 43 }, (_, index) => {
  const fingerPain = (index * 3) % 10;

  return {
    id: `submission_${String(index + 8).padStart(2, '0')}`,
    formId: 'form_01',
    data: {
      athleteName: athletes[index % athletes.length],
      sessionType: sessionTypes[index % sessionTypes.length],
      duration: [45, 60, 75, 90, 120, 135][index % 6],
      intensity: (index % 5) + 5,
      fingerPain,
      notes:
        fingerPain >= 5
          ? 'Mild finger discomfort after training.'
          : 'Training completed as planned.',
    },
    status: fingerPain >= 5 ? 'needs_attention' : 'normal',
    submittedAt:
      days[index % days.length] +
      ((9 + ((index * 3) % 12)) * 60 + ((index * 17) % 60)) * 60 * 1000,
    isReviewed: index % 3 === 0,
  };
});

export const mockSubmissions = [
  {
    id: 'submission_01',
    formId: 'form_01',
    data: {
      athleteName: 'Anna Kowalska',
      sessionType: 'Bouldering',
      duration: 120,
      intensity: 8,
      fingerPain: 7,
      notes: 'Pain in right middle finger after trying crimpy problems.',
    },
    status: 'needs_attention',
    submittedAt: Date.UTC(2026, 8, 30, 16, 42),
    isReviewed: true,
  },

  {
    id: 'submission_02',
    formId: 'form_01',
    data: {
      athleteName: 'Julia Nowak',
      sessionType: 'Lead climbing',
      duration: 135,
      intensity: 7,
      fingerPain: 1,
      notes: 'Good session. Felt strong on longer routes.',
    },
    status: 'normal',
    submittedAt: Date.UTC(2026, 8, 30, 14, 15),
    isReviewed: true,
  },

  {
    id: 'submission_03',
    formId: 'form_01',
    data: {
      athleteName: 'Mark Nowak',
      sessionType: 'Bouldering',
      duration: 90,
      intensity: 9,
      fingerPain: 6,
      notes: 'Slight pain after the last few attempts.',
    },
    status: 'needs_attention',
    submittedAt: Date.UTC(2026, 8, 29, 18, 20),
    isReviewed: false,
  },
  {
    id: 'submission_04',
    formId: 'form_01',
    data: {
      athleteName: 'Kasia Zielińska',
      sessionType: 'Strength',
      duration: 75,
      intensity: 6,
      fingerPain: 0,
      notes: 'Easy strength session.',
    },
    status: 'normal',
    submittedAt: Date.UTC(2026, 8, 29, 15, 10),
    isReviewed: false,
  },
  {
    id: 'submission_05',
    formId: 'form_01',
    data: {
      athleteName: 'Tomasz Wiśniewski',
      sessionType: 'Fingerboard',
      duration: 45,
      intensity: 8,
      fingerPain: 2,
      notes: 'Completed all planned hangs.',
    },
    status: 'normal',
    submittedAt: Date.UTC(2026, 8, 28, 17, 30),
    isReviewed: false,
  },
  {
    id: 'submission_06',
    formId: 'form_01',
    data: {
      athleteName: 'Tomasz Wiśniewski',
      sessionType: 'Fingerboard',
      duration: 45,
      intensity: 8,
      fingerPain: 2,
      notes: 'Completed all planned hangs.',
    },
    status: 'normal',
    submittedAt: Date.UTC(2026, 8, 27, 17, 30),
    isReviewed: false,
  },
  {
    id: 'submission_07',
    formId: 'form_01',
    data: {
      athleteName: 'Kasia Zielińska',
      sessionType: 'Strength',
      duration: 75,
      intensity: 6,
      fingerPain: 0,
      notes: 'Easy strength session.',
    },
    status: 'normal',
    submittedAt: Date.UTC(2026, 8, 27, 15, 10),
    isReviewed: false,
  },
  ...additionalSubmissions,
];
