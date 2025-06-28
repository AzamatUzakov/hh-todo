import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import AboutMeForm from "./AboutMeForm";

interface ModalProps {
    value: string,
    onClose: (success?: boolean) => void}

const Modal: React.FC<ModalProps> = ({ value, onClose }) => {

    let sectionName = "";

    if (value === "experience") sectionName = "Опыт";
    else if (value === "education") sectionName = "Образование";
    else if (value === "skills") sectionName = "Навыки";
    else if (value === "about_me") sectionName = "О себе";
    return (
        <>
            <Dialog open onOpenChange={(open) => !open && onClose()} >
                <DialogContent>
                    <DialogHeader>  </DialogHeader>
                    <DialogTitle>{`Добавьте ${sectionName}`}</DialogTitle>
                    {value === "experience" && (
                        <ExperienceForm closeBtn={()=> onClose(true)} />
                    ) || value === "education" && (

                        <EducationForm closeBtn={() => onClose(true)} />
                    ) || value === "skills" && (

                        <SkillsForm closeBtn={() => onClose(true)} />
                    ) || value === "about_me" && (

                        <AboutMeForm closeBtn={() => onClose(true)} />
                    )


                    }

                </DialogContent>
            </Dialog>

        </>
    );
}

export default Modal;
