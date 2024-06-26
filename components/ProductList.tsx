import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries";
import Card from "./Card";
import { PRODUCT_LIST } from "@/utils/products";

interface ProductListProps {
  locale: Locale;
}

export default async function ProductList({ locale }: ProductListProps) {
  const t = await getDictionary(locale);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 py-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 xl:grid-cols-5 lg:gap-4 xl:gap-8">
      {PRODUCT_LIST.map((item) => (
        <Card
          key={item.key}
          title={t.products[item.key].name}
          description={t.products[item.key].short_description}
          icon={<item.icon size={24} />}
          action={{
            href: `/${locale}/products/${item.key}`,
            label: t.products.learn_more,
          }}
        />
      ))}
    </div>
  );
}
