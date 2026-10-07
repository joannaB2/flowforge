import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { FieldTypeSelectOption, FormField } from '@/types/Form';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { FormFieldComponent } from './FormFieldComponent';
import { useState } from 'react';

interface FormFieldItemEditProps {
  defaultValues: FormField;
}

const formSchema = z.object({
  label: z.string('Label is required!'),
  type: z.string('Type is required!'),
  name: z.string(),
  required: z.boolean(),
  description: z.string(),
});

const fieldTypeList: FieldTypeSelectOption[] = [
  { label: 'Text', value: 'text' },
  { label: 'Number', value: 'number' },
  { label: 'Scale', value: 'scale' },
  { label: 'Select', value: 'select' },
  { label: 'Textarea', value: 'textarea' },
];

const editFieldNodeList: FormField[] = [
  {
    id: '1',
    type: 'select',
    name: 'type',
    label: 'Field type',
    required: true,
    options: fieldTypeList,
  },
  {
    id: '2',
    type: 'text',
    name: 'label',
    label: 'Field label',
    required: true,
    placeholder: 'Enter field label',
  },
  {
    id: '3',
    type: 'text',
    name: 'placeholder',
    label: 'Field placeholder',
    required: true,
    placeholder: 'Enter field placeholder',
  },
  {
    id: '4',
    type: 'textarea',
    name: 'description',
    label: 'Field description',
    required: false,
    placeholder: 'Enter field description',
  },
  {
    id: '5',
    type: 'boolean',
    name: 'required',
    label: 'Is field required',
    required: false,
    checked: false,
  },
];

export const FormFieldItemEditDialog = ({
  defaultValues,
}: FormFieldItemEditProps) => {
  const [editFieldConfig, setEditFieldConfig] =
    useState<FormField[]>(editFieldNodeList);
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Dialog>
      <FormProvider {...methods}>
        <DialogTrigger render={<Button variant="outline">Edit field</Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogTitle>Configure field {defaultValues.label}</DialogTitle>
          <div className="flex flex-col gap-6">
            {editFieldConfig.map((field) => (
              <FormFieldComponent key={field.id} fieldNode={field} />
            ))}
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
};
