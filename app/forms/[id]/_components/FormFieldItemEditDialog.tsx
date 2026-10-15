'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { FormField } from '@/types/Form';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';
import { FormFieldComponent } from './FormFieldComponent';
import { useState } from 'react';
import { allowedFields, commonFields } from '@/lib/fieldsCofig';
import { formSchema } from '@/lib/schemas';

interface FormFieldItemEditProps {
  defaultValues: FormField;
  handleOnSubmit: (newValues: z.infer<typeof formSchema>) => void;
}

export const FormFieldItemEditDialog = ({
  defaultValues,
  handleOnSubmit,
}: FormFieldItemEditProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleOnSubmit(data);
    setDialogOpen(false);
  }

  const type = useWatch({
    control: methods.control,
    name: 'type',
  });

  const editFieldConfig = [...commonFields, ...allowedFields[type]];

  const isEdit = defaultValues.id !== null;

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <FormProvider {...methods}>
        <DialogTrigger
          render={
            <Button variant="outline">
              {isEdit ? 'Edit' : 'Add new'} field
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogTitle>
              {isEdit
                ? `Configure field ${defaultValues.label}`
                : 'Configure new field'}
            </DialogTitle>
            <div className="flex flex-col gap-6 py-4">
              {editFieldConfig.map((field) => (
                <FormFieldComponent key={field.id} fieldNode={field} />
              ))}
            </div>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
};
