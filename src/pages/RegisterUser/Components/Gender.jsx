import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Gender = ({ item, name, onChange }) => {
  const handleSelect = (value) => {
    const event = {
      target: {
        name: name,
        value: value, // Send the selected value to the parent
      },
    };
    onChange(event); // Trigger the parent’s handleChange function
  };

  return (
    <div>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
          {item.options.map((gender, index) => (
            <SelectItem key={index} value={gender}>
              {gender}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Gender;

