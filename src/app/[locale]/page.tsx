export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return (
    <main style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
      <header>
        <nav>
          <Link href={`/${locale}`}>{t("navigation.home")}</Link>{" "}
          | <Link href={`/${locale}/products`}>{t("navigation.products")}</Link>{" "}
          | <Link href={`/${locale}/method`}>{t("navigation.method")}</Link>{" "}
          | <Link href={`/${locale}/story`}>{t("navigation.story")}</Link>{" "}
          |{" "}
          <Link href={`/${locale}/professionals`}>
            {t("navigation.professionals")}
          </Link>{" "}
          | <Link href={`/${locale}/contact`}>{t("navigation.contact")}</Link>
        </nav>
      </header>

      <section style={{ marginTop: "2rem" }}>
        <h1>{t("home.hero.title")}</h1>
        <p>{t("home.hero.subtitle")}</p>
        <p>{t("home.hero.description")}</p>
        <p style={{ marginTop: "1rem" }}>
          <Link href={`/${locale}/method`}>{t("home.hero.cta")}</Link>
        </p>
      </section>
    </main>
  );
}
