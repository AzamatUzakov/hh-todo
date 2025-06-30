import { useForm } from "react-hook-form"

interface AboutMeData {
    descripion_me: string;
    little_about_me: string;
}


interface btn {
    closeBtn: () => void
}

const AboutMeForm: React.FC<btn> = ({ closeBtn }) => {
    const { handleSubmit, register } = useForm<AboutMeData>()

    const sendSubmit = (data: AboutMeData) => {
        localStorage.setItem("about_me", JSON.stringify(data));
        window.dispatchEvent(new Event("storage-updated"));

        closeBtn()
    }


    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(sendSubmit)}>
                {/* Заголовок секции (необязательно) */}
                <div>
                    <label className="block text-sm font-medium mb-1">Заголовок</label>
                    <input
                        type="text"
                        placeholder="Например: Немного обо мне"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        {...register("little_about_me")}

                    />
                </div>

                {/* Текст о себе */}
                <div>
                    <label className="block text-sm font-medium mb-1">Описание</label>
                    <textarea
                        rows={5}
                        placeholder="Напишите кратко о себе, ваших целях, опыте, интересах..."
                        {...register("descripion_me")}

                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
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

export default AboutMeForm;