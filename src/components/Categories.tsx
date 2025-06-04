import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      title: "Компьютеры",
      icon: "Monitor",
      description: "Системные блоки, моноблоки, игровые ПК",
      examples: ["iMac", "Gaming PC", "Офисные ПК", "Серверы"],
      priceRange: "от 5 000 ₽",
    },
    {
      title: "Ноутбуки",
      icon: "Laptop",
      description: "MacBook, игровые и офисные ноутбуки",
      examples: ["MacBook Pro", "Gaming laptop", "Ultrabook", "Планшеты"],
      priceRange: "от 8 000 ₽",
    },
    {
      title: "Принтеры",
      icon: "Printer",
      description: "Лазерные, струйные, МФУ",
      examples: ["Canon", "HP", "Epson", "Brother"],
      priceRange: "от 1 500 ₽",
    },
  ];

  return (
    <section id="categories" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что мы покупаем
          </h2>
          <p className="text-xl text-gray-600">
            Принимаем технику в любом состоянии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  {category.title}
                </CardTitle>
                <p className="text-gray-600">{category.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {category.examples.map((example) => (
                    <div key={example} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {category.priceRange}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    Узнать цену
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
