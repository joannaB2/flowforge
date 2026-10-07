export type FieldType =
  'text' | 'number' | 'scale' | 'select' | 'textarea' | 'boolean';

export type FieldTypeSelectOption = {
  label: string;
  value: FieldType;
};

export type FormFieldBase = {
  id: string;
  name: string;
  label: string;
  required: boolean;
  decription?: string;
};

export type FormFieldText = FormFieldBase & {
  type: 'text';
  placeholder: string;
};

export type FormFieldSelect = FormFieldBase & {
  type: 'select';
  options: { value: string; label: string }[];
};

export type FormFieldNumber = FormFieldBase & {
  type: 'number';
  min: number;
  max: number;
  unit?: string;
};

export type FormFieldScale = FormFieldBase & {
  type: 'scale';
  min: number;
  max: number;
};

export type FormFieldTextarea = FormFieldBase & {
  type: 'textarea';
  placeholder?: string;
};

export type FormFieldBoolean = FormFieldBase & {
  type: 'boolean';
  checked: boolean;
};

export type FormField =
  | FormFieldText
  | FormFieldSelect
  | FormFieldNumber
  | FormFieldScale
  | FormFieldTextarea
  | FormFieldBoolean;

export type FormStatus = 'draft' | 'published';

export interface Form {
  id: string;
  userId: string;
  name: string;
  description: string;
  slug: string;
  status: FormStatus;
  fields: FormField[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string | null;
}
