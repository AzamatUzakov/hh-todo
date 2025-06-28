import { useForm } from "react-hook-form"

interface SkillsFormData {
    beginner: string;
    intermediate: string;
    advanced: string;
    expert: string;
    program_language: string;

}

interface btn {
    closeBtn: () => void
}
const SkillsForm: React.FC<btn> = ({ closeBtn }) => {
    const { handleSubmit, register } = useForm<SkillsFormData>()
    const sendSubmit = (data: SkillsFormData) => {
        localStorage.setItem("skills", JSON.stringify(data));
        closeBtn()
    }
    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendSubmit)}>
                {/* Навык */}
                <div>
                    <label className="block text-sm font-medium mb-1">Навык</label>
                    <input
                        type="text"
                        placeholder="Например: JavaScript"
                        {...register("program_language")}

                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Уровень навыка */}
                <div>
                    <label className="block text-sm font-medium mb-1">Уровень</label>
                    <select
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="">Выберите уровень</option>
                        <option {...register("beginner")} value="beginner">Начинающий</option>
                        <option {...register("intermediate")} value="intermediate">Средний</option>
                        <option {...register("advanced")} value="advanced">Продвинутый</option>
                        <option {...register("expert")} value="expert">Эксперт</option>
                    </select>
                </div>

                {/* Кнопка */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        Добавить
                    </button>
                </div>
            </form>

        </>
    );
}

export default SkillsForm;