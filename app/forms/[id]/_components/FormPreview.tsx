'use client';

import { type Form, type FormField } from '@/types/Form';
import { DragDropProvider } from '@dnd-kit/react';
import { isSortable, useSortable } from '@dnd-kit/react/sortable';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FormFieldItem } from './FormFieldItem';

function SortableField({
  id,
  index,
  fieldNode,
}: {
  id: string;
  index: number;
  fieldNode: FormField;
}) {
  const { ref } = useSortable({ id, index });

  return (
    <li ref={ref}>
      <FormFieldItem formFieldData={fieldNode} />
    </li>
  );
}

interface FormProps {
  formData: Form;
}

export const FormPreview = ({ formData }: FormProps) => {
  const [fieldList, setFieldList] = useState<Form['fields']>(formData.fields);

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <h1 className="mb-12 flex text-xl text-gray-500">{formData.name}</h1>

        <Button>Add new field</Button>
      </div>

      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const { source } = event.operation;

          if (isSortable(source)) {
            const { initialIndex, index } = source;

            if (initialIndex !== index) {
              setFieldList((items) => {
                const newItems = [...items];
                const [removed] = newItems.splice(initialIndex, 1);
                newItems.splice(index, 0, removed);
                return newItems;
              });
            }
          }
        }}
      >
        <ul className="space-y-4">
          {fieldList.map((field, index) => (
            <SortableField
              key={field.id}
              id={field.id}
              index={index}
              fieldNode={field}
            />
          ))}
        </ul>
      </DragDropProvider>
    </div>
  );
};
