import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useState } from "react";
import Modal from "./Modal";


interface Props {

}

const Selected: React.FC<Props> = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string | null>(null);


    const handleSelected = (value: string) => {
        setSelectedValue(value)
        setModal(true)
    }

    return (
        <>
            <Select onValueChange={handleSelected}>
                <SelectTrigger className="w-full" >
                    <SelectValue placeholder="Добавить секцию" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="experience">Опыт</SelectItem>
                    <SelectItem value="education">Образование</SelectItem>
                    <SelectItem value="skills">Навыки</SelectItem>
                    <SelectItem value="about_me">О себе</SelectItem>
                </SelectContent>
            </Select>


            {modal && selectedValue && <Modal value={selectedValue} onClose={() => setModal(false)} />}

        </>
    );
}

export default Selected;