import { useEffect, useMemo, useState } from "react";
import { closestCorners, DndContext, type DragEndEvent } from "@dnd-kit/core"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Resume from "./Resume";

interface Exp {
    job: string;
    description: string;
    company: string;
    startDate: string;
    endDate: string;

}

interface Edu {
    institute: string;
    speciality: string;
    startDate: string;
    endDate: string;

}

type Skill = {
    beginner: number;
    program_language: string;
};
interface About {
    descripion_me: string;
    little_about_me: string;

}
const ReviewForm: React.FC = () => {
    const [experience, setExperience] = useState<Exp | null>(null);
    const [education, setEducation] = useState<Edu | null>(null);
    const [skills, setSkills] = useState<Skill | null>(null);
    const [aboutMe, setAboutMe] = useState<About | null>(null);
    const [itemsOrder, setItemsOrder] = useState([
        "experience",
        "education",
        "skills",
        "about_me",
    ]);


    const resumeItems = useMemo(() => [
        { id: "experience", title: "Опыт работы", icon: "/experience.png", data: experience },
        { id: "education", title: "Образование", icon: "/education.png", data: education },
        { id: "skills", title: "Навыки", icon: "/skills.png", data: skills },
        { id: "about_me", title: aboutMe?.little_about_me || "О себе", icon: "/about_me.png", data: aboutMe },
    ], [experience, education, skills, aboutMe]);


    const sortedResume = useMemo(() => {
        return itemsOrder
            .map(id => resumeItems.find(item => item.id === id))
            .filter(Boolean) as typeof resumeItems;
    }, [itemsOrder, resumeItems]);


    const loadData = () => {
        const getSkills = localStorage.getItem("skills");
        const getEducation = localStorage.getItem("education");
        const getExperience = localStorage.getItem("experience");
        const getAboutMe = localStorage.getItem("about_me");

        if (getSkills) setSkills(JSON.parse(getSkills));
        if (getEducation) setEducation(JSON.parse(getEducation));
        if (getExperience) setExperience(JSON.parse(getExperience));
        if (getAboutMe) setAboutMe(JSON.parse(getAboutMe));
    };

    useEffect(() => {
        loadData();

        const handler = () => loadData();

        window.addEventListener("storage-updated", handler);

        return () => {
            window.removeEventListener("storage-updated", handler);
        };
    }, [])


    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setItemsOrder((prevOrder) => {
                const oldIndex = prevOrder.indexOf(active.id as string);
                const newIndex = prevOrder.indexOf(over.id as string);
                if (oldIndex === -1 || newIndex === -1) return prevOrder;

                const newOrder = [...prevOrder];
                const [moved] = newOrder.splice(oldIndex, 1);
                newOrder.splice(newIndex, 0, moved);
                return newOrder;
            });
        }
    };
    const handleDelete = (type: 'experience' | 'education' | 'skills' | 'about_me') => {
        if (window.confirm(`Вы уверены, что хотите удалить раздел "${type}"?`)) {
            localStorage.removeItem(type);

            switch (type) {
                case 'experience': setExperience(null); break;
                case 'education': setEducation(null); break;
                case 'skills': setSkills(null); break;
                case 'about_me': setAboutMe(null); break;
            }

            setItemsOrder(prev => prev.filter(item => item !== type));
        }
    };
    return (
        <>

            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <div>
                    <SortableContext items={itemsOrder} strategy={verticalListSortingStrategy}>
                        {sortedResume.map((item) => (
                            <Resume key={item.id}
                                id={item.id}
                                type={item.id as 'experience' | 'education' | 'skills' | 'about_me'}
                                data={item.data}
                                title={item.title}
                                icon={item.icon}
                                onDelete={handleDelete}
                            />
                        ))}
                    </SortableContext>



                </div>



            </DndContext>
        </>
    );
}

export default ReviewForm;