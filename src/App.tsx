import { useEffect, useState } from "react";

export default function App() {
  const [experience, setExperience] = useState<any>(null);
  const [education, setEducation] = useState<any>(null);
  const [skills, setSkills] = useState<any>(null);
  const [aboutMe, setAboutMe] = useState<any>(null);

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

  return (
    <div className="bg-white shadow-xl rounded-xl p-10 w-[95%] max-w-5xl mx-auto mt-10 border border-gray-300 font-serif print:border-none print:shadow-none">
      <div className="border-b-4 border-gray-800 pb-4 mb-8 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-wider text-gray-900">Резюме</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[17px] leading-relaxed text-gray-800">
        <div>
          {experience && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 mb-3 uppercase tracking-wide">Опыт работы</h2>
              <p><span className="font-semibold">Должность:</span> {experience.job}</p>
              <p><span className="font-semibold">Компания:</span> {experience.company}</p>
              <p><span className="font-semibold">Период:</span> {experience.startDate} – {experience.endDate}</p>
              <p className="mt-2"><span className="font-semibold">Описание:</span> {experience.description}</p>
            </section>
          )}
        </div>

        <div>
          {education && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 mb-3 uppercase tracking-wide">Образование</h2>
              <p><span className="font-semibold">Институт:</span> {education.institute}</p>
              <p><span className="font-semibold">Специальность:</span> {education.speciality}</p>
              <p><span className="font-semibold">Период:</span> {education.startDate} – {education.endDate}</p>
            </section>
          )}

          {skills && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 mb-3 uppercase tracking-wide">Навыки</h2>
              <ul className="list-disc list-inside">
                <li>{skills.program_language} — уровень {skills.beginner}</li>
              </ul>
            </section>
          )}

          {aboutMe && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 mb-3 uppercase tracking-wide">О себе</h2>
              <p className="whitespace-pre-line">{aboutMe.descripion_me}</p>
            </section>
          )}
        </div>
      </div>
    </div>

  );

}
