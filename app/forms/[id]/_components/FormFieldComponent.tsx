'use client';

import { type FormField } from '@/types/Form';

import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

interface FormFieldProps {
  fieldNode: FormField;
}

export const FormFieldComponent = ({ fieldNode }: FormFieldProps) => {
  const form = useFormContext();
  const handleFieldType = (
    field: ControllerRenderProps<FieldValues, string>,
    fieldState: ControllerFieldState,
    fieldNode: FormField,
  ) => {
    switch (fieldNode.type) {
      case 'text':
        return (
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder={fieldNode.placeholder}
            autoComplete="off"
          />
        );
      case 'number':
        return null;
      case 'select':
        return null;
      case 'scale':
        return null;
      case 'textarea':
        return null;
    }
  };

  return (
    <Controller
      name={fieldNode.name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{fieldNode.label}</FieldLabel>
          {handleFieldType(field, fieldState, fieldNode)}
          {fieldNode.decription && (
            <FieldDescription>{fieldNode.decription}</FieldDescription>
          )}

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
