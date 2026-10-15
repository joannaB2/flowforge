'use client';

import { type Form, type FormField } from '@/types/Form';
import { DragDropProvider } from '@dnd-kit/react';
import { isSortable, useSortable } from '@dnd-kit/react/sortable';
import { useState } from 'react';
import { FormFieldItemEditDialog } from './FormFieldItemEditDialog';
import * as z from 'zod';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';
import { formSchema } from '@/lib/schemas';

function SortableField({
  idForSortable,
  index,
  fieldNode,
  handleEditField,
}: {
  idForSortable: number | null;
  index: number;
  fieldNode: FormField;
  handleEditField: (valuesToUpdate: z.infer<typeof formSchema>) => void;
}) {
  const id = idForSortable === null ? 0 : idForSortable;
  const { ref } = useSortable({ id, index });

  return (
    <li ref={ref}>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>{fieldNode.label}</ItemTitle>
          <ItemDescription>{fieldNode.decription}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <FormFieldItemEditDialog
            defaultValues={fieldNode}
            handleOnSubmit={handleEditField}
          />
        </ItemActions>
      </Item>
    </li>
  );
}

interface FormProps {
  formData: Form;
}

export const FormPreview = ({ formData }: FormProps) => {
  const [fieldList, setFieldList] = useState<Form['fields']>(formData.fields);
  const newFieldConfig: FormField = {
    id: null,
    label: '',
    placeholder: '',
    type: 'text',
    decription: '',
    name: '',
    required: false,
  };

  const handleAddNewField = (newValues: z.infer<typeof formSchema>) => {
    const id = fieldList.length + 1;
    const newField = {
      ...newValues,
      id,
    };
    setFieldList([...fieldList, newField]);
  };

  const handleEditField = (newValues: z.infer<typeof formSchema>) => {
    const currentList = [...fieldList];
    const toUpdate = currentList.map((item) =>
      item.id === newValues.id ? newValues : item,
    );
    setFieldList(toUpdate);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <h1 className="mb-12 flex text-xl text-gray-500">{formData.name}</h1>
        <FormFieldItemEditDialog
          defaultValues={newFieldConfig}
          handleOnSubmit={handleAddNewField}
        />
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
              idForSortable={field.id}
              index={index}
              fieldNode={field}
              handleEditField={handleEditField}
            />
          ))}
        </ul>
      </DragDropProvider>
    </div>
  );
};
