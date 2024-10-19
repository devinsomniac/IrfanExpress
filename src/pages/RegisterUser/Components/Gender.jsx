import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Gender = ({item}) => {
  return (
    <div>
        <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={item.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.options.map((gender, index) => (
                        <SelectItem value={gender}>{gender}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
    </div>
  )
}

export default Gender