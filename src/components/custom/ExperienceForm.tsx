import { useForm } from "react-hook-form"

interface ExperienceFormData {
    description: string;
    job: string;
    company: string;
    startDate: string;
    endDate: string;

}
interface btn {
    closeBtn: () => void
}
const ExperienceForm: React.FC<btn> = ({ closeBtn }) => {
    const { handleSubmit, register } = useForm<ExperienceFormData>()

    const sendSubmit = (data: ExperienceFormData) => {
        localStorage.setItem("experience", JSON.stringify(data));
        closeBtn()
    }
    return (
        <>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendSubmit)}>
                {/* Должность */}
                <div>
                    <label className="block text-sm font-medium mb-1">Должность</label>
                    <input
                        type="text"
                        {...register("job")}

                        placeholder="Например: Frontend разработчик"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Компания */}
                <div>
                    <label className="block text-sm font-medium mb-1">Компания</label>
                    <input
                        type="text"
                        placeholder="Например: Yandex"
                        {...register("company")}

                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Период */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Начало</label>
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

                {/* Описание */}
                <div>
                    <label className="block text-sm font-medium mb-1">Описание</label>
                    <textarea
                        rows={4}
                        placeholder="Расскажите, чем вы занимались"
                        {...register("description")}

                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
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

export default ExperienceForm;