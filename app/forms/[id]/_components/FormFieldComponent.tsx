'use client';

import { type FormField } from '@/types/Form';

import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { InputGroupTextarea } from '@/components/ui/input-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { FormFieldSelectComponent } from './FormFieldSelectComponent';
import { FormFieldSelectOptions } from './FormFieldSelectOptions';
import { FormFieldConfig } from '@/utils/fieldsCofig';

interface FormFieldProps {
  fieldNode: FormFieldConfig;
}

const FormFieldSelectOptionsComponent = () => {
  const form = useFormContext();
  const options = useWatch({
    control: form.control,
    name: 'options',
  });

  return (
    <FormFieldSelectOptions
      options={options ?? []}
      onChange={(newOptions) =>
        form.setValue('options', newOptions, {
          shouldDirty: true,
          shouldValidate: true,
        })
      }
    />
  );
};

export const FormFieldComponent = ({ fieldNode }: FormFieldProps) => {
  const form = useFormContext();

  if (fieldNode.type === 'select-options') {
    return <FormFieldSelectOptionsComponent />;
  }

  const resolveDefaultValue = (fieldName: string) => {
    return form.getValues(fieldName);
  };

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
            type="text"
          />
        );
      case 'number':
        return (
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder={fieldNode.placeholder}
            autoComplete="off"
            type="number"
            min={fieldNode.min}
            max={fieldNode.max}
          />
        );
      case 'select':
        return (
          <FormFieldSelectComponent
            fieldNode={fieldNode}
            value={form.getValues(field.name)}
            onSelect={(value: string | null) => {
              form.setValue(field.name, value);
              if (
                field.name === 'type' &&
                value === 'select' &&
                !form.getValues('options')
              ) {
                form.setValue('options', []);
              }
            }}
          />
        );
      case 'scale':
        return (
          <Slider
            defaultValue={resolveDefaultValue(fieldNode.name)}
            max={fieldNode.max}
            step={1}
            className="mx-auto w-full max-w-xs"
          />
        );
      case 'textarea':
        return (
          <InputGroupTextarea
            {...field}
            id={field.name}
            placeholder={fieldNode.placeholder}
            rows={6}
            className="min-h-24 resize-none"
            aria-invalid={fieldState.invalid}
          />
        );
      case 'boolean':
        return (
          <Field orientation="horizontal" data-invalid={fieldState.invalid}>
            <Checkbox
              id={field.name}
              name={field.name}
              aria-invalid={fieldState.invalid}
              checked={form.getValues(field.name)}
              onCheckedChange={(checked: boolean) =>
                form.setValue(field.name, checked)
              }
            />
            <FieldLabel htmlFor={field.name} className="font-normal">
              {fieldNode.label}
            </FieldLabel>
          </Field>
        );
    }
  };

  return (
    <Controller
      name={fieldNode.name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {fieldNode.type !== 'boolean' && (
            <FieldLabel htmlFor={field.name}>{fieldNode.label}</FieldLabel>
          )}
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
