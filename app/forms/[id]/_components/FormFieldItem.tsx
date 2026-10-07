import { type FormField } from '@/types/Form';

import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from '@/components/ui/item';
import { FormFieldItemEditDialog } from './FormFieldItemEditDialog';

interface FormFieldEditableProps {
  formFieldData: FormField;
}

export const FormFieldItem = ({ formFieldData }: FormFieldEditableProps) => {
  return (
    <div>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>{formFieldData.label}</ItemTitle>
          <ItemDescription>{formFieldData.decription}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <FormFieldItemEditDialog defaultValues={formFieldData} />
        </ItemActions>
      </Item>
    </div>
  );
};
