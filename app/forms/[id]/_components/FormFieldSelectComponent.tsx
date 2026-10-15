import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormFieldSelect } from '@/types/Form';
import { useState } from 'react';

interface FormFieldSelectProps {
  fieldNode: FormFieldSelect;
  value: string | null;
  onSelect: (value: string | null) => void;
}

export const FormFieldSelectComponent = ({
  fieldNode,
  value,
  onSelect,
}: FormFieldSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value);
  return (
    <>
      <Select
        items={fieldNode.options}
        value={selectedValue}
        onValueChange={(value: string | null) => {
          setSelectedValue(value);
          onSelect(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{fieldNode.label}</SelectLabel>
            {fieldNode.options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
