import { FieldTypeSelectOption, FormField } from '@/types/Form';

type FieldType = FormField['type'];

export type FormFieldConfig =
  | FormField
  | {
      id: number;
      type: 'select-options';
      name: 'options';
      label: string;
      required: false;
    };

const fieldTypeList: FieldTypeSelectOption[] = [
  { label: 'Text', value: 'text' },
  { label: 'Number', value: 'number' },
  { label: 'Scale', value: 'scale' },
  { label: 'Select', value: 'select' },
  { label: 'Textarea', value: 'textarea' },
];

export const commonFields: FormField[] = [
  {
    id: 1,
    type: 'select',
    name: 'type',
    label: 'Field type',
    required: true,
    options: fieldTypeList,
  },
  {
    id: 2,
    type: 'text',
    name: 'label',
    label: 'Field label',
    required: true,
    placeholder: 'Enter field label',
  },
  {
    id: 3,
    type: 'text',
    name: 'placeholder',
    label: 'Field placeholder',
    required: true,
    placeholder: 'Enter field placeholder',
  },
  {
    id: 4,
    type: 'textarea',
    name: 'description',
    label: 'Field description',
    required: false,
    placeholder: 'Enter field description',
  },
  {
    id: 5,
    type: 'boolean',
    name: 'required',
    label: 'Is field required',
    required: false,
    checked: false,
  },
];

export const numberFields: FormField[] = [
  {
    id: 6,
    type: 'number',
    name: 'min',
    label: 'Min',
    required: false,
    placeholder: 'Min',
  },
  {
    id: 7,
    type: 'number',
    name: 'max',
    label: 'Max',
    required: false,
    placeholder: 'Max',
  },
  {
    id: 8,
    type: 'text',
    name: 'unit',
    label: 'Unit',
    required: false,
    placeholder: 'Unit',
  },
];

export const scaleFields: FormField[] = [
  {
    id: 6,
    type: 'number',
    name: 'min',
    label: 'Min',
    required: false,
    placeholder: 'Min',
  },
  {
    id: 7,
    type: 'number',
    name: 'max',
    label: 'Max',
    required: false,
    placeholder: 'Max',
  },
];

const selectOptionsField: FormFieldConfig = {
  id: 9,
  type: 'select-options',
  name: 'options',
  label: 'Options',
  required: false,
};

export const allowedFields = {
  text: [],
  number: numberFields,
  scale: scaleFields,
  select: [selectOptionsField],
  textarea: [],
  boolean: [],
} satisfies Record<FieldType, FormFieldConfig[]>;
