export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getTranslations } from "next-intl/server";

export default async function MethodPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  const steps = [
    { key: "dose" as const },
    { key: "warm" as const },
    { key: "press" as const },
    { key: "glide" as const },
    { key: "pause" as const },
  ];

  const hygiene = ["clean_hands", "disinfect_tools", "keep_droppers"] as const;

  return (
    <main style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
      <h1>{t("method.title")}</h1>
      <p>{t("method.subtitle")}</p>

      <section style={{ marginTop: "1.5rem" }}>
        <ol>
          {steps.map(({ key }) => (
            <li key={key} style={{ marginBottom: "0.75rem" }}>
              <strong>{t(`method.steps.${key}.title`)}</strong>:{" "}
              {t(`method.steps.${key}.description`)}
            </li>
          ))}
        </ol>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <p>{t("method.timing")}</p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>{t("method.hygiene.title")}</h2>
        <ul>
          {hygiene.map((k) => (
            <li key={k}>{t(`method.hygiene.${k}`)}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
