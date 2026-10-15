import { Button } from '@/components/ui/button';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { FormFieldSelect } from '@/types/Form';

import { X } from 'lucide-react';
import { useState, useId } from 'react';

interface FormFieldSelectOptionsProps {
  options: FormFieldSelect['options'];
  onChange: (options: FormFieldSelect['options']) => void;
}

export const FormFieldSelectOptions = ({
  options,
  onChange,
}: FormFieldSelectOptionsProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputId = useId();
  const trimmedInput = inputValue.trim();
  const isDuplicate = options.some(
    (option) =>
      option.label.toLocaleLowerCase() === trimmedInput.toLocaleLowerCase() ||
      option.value.toLocaleLowerCase() === trimmedInput.toLocaleLowerCase(),
  );
  const items = trimmedInput && !isDuplicate ? [trimmedInput] : [];

  const addOption = (label: string) => {
    const normalizedLabel = label.trim();
    if (
      !normalizedLabel ||
      options.some(
        (option) =>
          option.label.toLocaleLowerCase() ===
            normalizedLabel.toLocaleLowerCase() ||
          option.value.toLocaleLowerCase() ===
            normalizedLabel.toLocaleLowerCase(),
      )
    ) {
      return;
    }

    onChange([...options, { label: normalizedLabel, value: normalizedLabel }]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={inputId} className="text-sm font-medium">
        Options
      </label>
      <Combobox
        autoHighlight
        items={items}
        value={null}
        inputValue={inputValue}
        onInputValueChange={setInputValue}
        onValueChange={(value) => {
          if (value) addOption(value);
        }}
      >
        <ComboboxInput
          id={inputId}
          className="w-full"
          placeholder="Type an option and press Enter"
          showTrigger={false}
        />
        <ComboboxContent>
          <ComboboxEmpty>
            {isDuplicate
              ? 'This option already exists.'
              : 'Type an option to add it.'}
          </ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                Add “{item}”
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {options.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {options.map((option, index) => (
            <li
              key={`${option.value}-${index}`}
              className="flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm"
            >
              <span>{option.label}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={`Remove option ${option.label}`}
                onClick={() =>
                  onChange(
                    options.filter((_, optionIndex) => optionIndex !== index),
                  )
                }
              >
                <X />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">No options added.</p>
      )}
    </div>
  );
};
