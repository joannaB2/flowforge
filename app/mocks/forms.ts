import { Form } from '../types/Form';

export const mockForms: Form[] = [
  {
    id: 'form_01',
    userId: 'user_01',

    name: 'Post-training check-in',
    description: 'Tell your coach how your training session went.',

    slug: 'post-training-check-in',

    status: 'published',

    fields: [
      {
        id: 'field_01',
        type: 'text',
        name: 'athleteName',
        label: 'Athlete name',
        required: true,
        placeholder: 'Enter your name',
      },

      {
        id: 'field_02',
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
        id: 'field_03',
        type: 'number',
        name: 'duration',
        label: 'Duration',
        required: true,
        min: 1,
        max: 300,
        unit: 'min',
      },

      {
        id: 'field_04',
        type: 'scale',
        name: 'intensity',
        label: 'Session intensity',
        required: true,
        min: 1,
        max: 10,
      },

      {
        id: 'field_05',
        type: 'scale',
        name: 'fingerPain',
        label: 'Finger pain',
        required: true,
        min: 0,
        max: 10,
      },

      {
        id: 'field_06',
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
        id: 'field_07',
        type: 'text',
        name: 'athleteName',
        label: 'Athlete name',
        required: true,
        placeholder: 'Enter your name',
      },

      {
        id: 'field_08',
        type: 'scale',
        name: 'sleepQuality',
        label: 'Sleep quality',
        required: true,
        min: 1,
        max: 10,
      },

      {
        id: 'field_09',
        type: 'scale',
        name: 'soreness',
        label: 'Muscle soreness',
        required: true,
        min: 0,
        max: 10,
      },

      {
        id: 'field_10',
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
