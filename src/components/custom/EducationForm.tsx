import { useForm } from "react-hook-form"

interface EducationFormData {
    institute: string;
    speciality: string;
    startDate: string;
    endDate: string;
}

interface btn {
    closeBtn: () => void
}

const EducationForm: React.FC<btn> = ({closeBtn}) => {
    const { handleSubmit, register } = useForm<EducationFormData>()

    const sendSubmit = (data: EducationFormData) => {
        localStorage.setItem("education", JSON.stringify(data));
        window.dispatchEvent(new Event("storage-updated"));

        closeBtn()
    }

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendSubmit)}>
                {/* Учебное заведение */}
                <div>
                    <label className="block text-sm font-medium mb-1">Учебное заведение</label>
                    <input
                        type="text"
                        placeholder="Например: МГУ"
                        {...register("institute")}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Специальность */}
                <div>
                    <label className="block text-sm font-medium mb-1">Специальность</label>
                    <input
                        type="text"
                        placeholder="Например: Прикладная информатика"

                        {...register("speciality")}

                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Период обучения */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Начало обучения</label>
                        <input
                            type="month"
                            {...register("startDate")}

                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Окончание</label>
                        <input
                            type="month"
                            {...register("endDate")}

                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Кнопка */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        Сохранить
                    </button>
                </div>
            </form>

        </>
    );
}

export default EducationForm;