import type { Metadata } from "next";
import LocaleLayout, { generateMetadata as generateLocaleLayoutMetadata } from "./[locale]/layout";
import LocalePage from "./[locale]/page";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleLayoutMetadata({
    params: Promise.resolve({ locale: "ru" }),
  });
}

export default async function RootPage() {
  const localeParameterPromise = Promise.resolve({ locale: "ru" });
  return (
    <LocaleLayout params={localeParameterPromise}>
      <LocalePage params={localeParameterPromise} />
    </LocaleLayout>
  );
}
