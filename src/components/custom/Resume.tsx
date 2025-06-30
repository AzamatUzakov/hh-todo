import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"

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

interface Skill {
    beginner: number;
    program_language: string;
}

interface About {
    descripion_me: string;
    little_about_me: string;
}

type ResumeProps = {
    id: string;
    type: 'experience' | 'education' | 'skills' | 'aboutMe';
    data: Exp | Edu | Skill | About | null;
    title: string;
    icon: string;
    onDelete: (type: 'experience' | 'education' | 'skills' | 'aboutMe') => void;
};



const Resume: React.FC<ResumeProps> = ({ id, type, data, title, icon, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(type);
    };

    if(!data) return null
    return (
        <>

            <div style={style} ref={setNodeRef} {...attributes} {...listeners} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md w-full max-w-2xl mt-7">
                <div className="flex-shrink-0">
                    <img src={icon} alt={title} className="w-10 h-10 object-contain" />
                </div>

                {data ? (
                    <div className="flex flex-col text-gray-800 w-full">
                        <div className="flex justify-between w-full">  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                            <button
                                className=" p-2 cursor-pointer text-red-500 hover:text-red-700 transition-colors"
                                onClick={handleDeleteClick}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-1 text-sm sm:text-base">
                            {type === "experience" && (
                                <>
                                    <p><b className="font-medium text-gray-600">Должность:</b> {(data as Exp).job}</p>
                                    <p><b className="font-medium text-gray-600">Компания:</b> {(data as Exp).company}</p>
                                    <p><b className="font-medium text-gray-600">Описание:</b> {(data as Exp).description}</p>
                                    <p><b className="font-medium text-gray-600">Начало:</b> {(data as Exp).startDate}</p>
                                    <p><b className="font-medium text-gray-600">Окончание:</b> {(data as Exp).endDate}</p>

                                </>
                            )}

                            {type === "education" && (
                                <>
                                    <p><b className="font-medium text-gray-600">Институт:</b> {(data as Edu).institute}</p>
                                    <p><b className="font-medium text-gray-600">Специальность:</b> {(data as Edu).speciality}</p>
                                    <p><b className="font-medium text-gray-600">Начало:</b> {(data as Edu).startDate}</p>
                                    <p><b className="font-medium text-gray-600">Окончание:</b> {(data as Edu).endDate}</p>
                                </>
                            )}

                            {type === "skills" && (
                                <>
                                    <p><b className="font-medium text-gray-600">Навык:</b> {(data as Skill).program_language}</p>
                                    <p><b className="font-medium text-gray-600">Уровень:</b> {(data as Skill).beginner}</p>
                                </>
                            )}

                            {type === "aboutMe" && (
                                <>
                                    <p><b className="font-medium text-gray-600">Обо мне:</b> {(data as About).descripion_me}</p>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 text-sm">Не указано</div>
                )}
            </div>
        </>
    );
}

export default Resume;