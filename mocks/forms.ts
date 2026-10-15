import { Form } from '../types/Form';

export const mockForms: Form[] = [
  {
    id: 'form_1',
    userId: 'user_01',

    name: 'Post-training check-in',
    description: 'Tell your coach how your training session went.',

    slug: 'post-training-check-in',

    status: 'published',

    fields: [
      {
        id: 1,
        type: 'text',
        name: 'athleteName',
        label: 'Athlete name',
        required: true,
        placeholder: 'Enter your name',
      },

      {
        id: 2,
        type: 'select',
        name: 'sessionType',
        label: 'Session type',
        required: true,
        options: [
          { value: 'bouldering', label: 'Bouldering' },
          { value: 'lead-climbing', label: 'Lead climbing' },
          { value: 'strength', label: 'Strength' },
          { value: 'fingerboard', label: 'Fingerboard' },
          { value: 'mobility', label: 'Mobility' },
        ],
      },

      {
        id: 3,
        type: 'number',
        name: 'duration',
        label: 'Duration',
        required: true,
        placeholder: 'Enter duration',
        min: 1,
        max: 300,
        unit: 'min',
      },

      {
        id: 4,
        type: 'scale',
        name: 'intensity',
        label: 'Session intensity',
        required: true,
        min: 1,
        max: 10,
      },

      {
        id: 5,
        type: 'scale',
        name: 'fingerPain',
        label: 'Finger pain',
        required: true,
        min: 0,
        max: 10,
      },

      {
        id: 6,
        type: 'textarea',
        name: 'notes',
        label: 'Notes',
        required: false,
        placeholder: 'How did the session feel?',
      },
    ],

    createdAt: '2026-09-10T08:30:00Z',
    updatedAt: '2026-09-25T14:15:00Z',
    publishedAt: '2026-09-11T10:00:00Z',
  },
  {
    id: 'form_02',
    userId: 'user_01',

    name: 'Daily readiness',
    description: 'Quick daily recovery check-in.',

    slug: 'daily-readiness',

    status: 'draft',

    fields: [
      {
        id: 1,
        type: 'text',
        name: 'athleteName',
        label: 'Athlete name',
        required: true,
        placeholder: 'Enter your name',
      },

      {
        id: 2,
        type: 'scale',
        name: 'sleepQuality',
        label: 'Sleep quality',
        required: true,
        min: 1,
        max: 10,
      },

      {
        id: 3,
        type: 'scale',
        name: 'soreness',
        label: 'Muscle soreness',
        required: true,
        min: 0,
        max: 10,
      },

      {
        id: 4,
        type: 'scale',
        name: 'energy',
        label: 'Energy level',
        required: true,
        min: 1,
        max: 10,
      },
    ],

    createdAt: '2026-09-20T09:00:00Z',
    updatedAt: '2026-09-20T09:00:00Z',
    publishedAt: null,
  },
];
