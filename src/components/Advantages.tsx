import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "DollarSign",
      title: "Высокие цены",
      description: "Предлагаем максимальную стоимость за вашу технику",
    },
    {
      icon: "Zap",
      title: "Быстро",
      description: "Оценка за 5 минут, выезд в день обращения",
    },
    {
      icon: "Shield",
      title: "Надёжно",
      description: "Официальная деятельность, договор купли-продажи",
    },
    {
      icon: "Home",
      title: "Выезд на дом",
      description: "Приедем к вам в удобное время бесплатно",
    },
    {
      icon: "CreditCard",
      title: "Любая оплата",
      description: "Наличные, карта, перевод на счёт",
    },
    {
      icon: "Wrench",
      title: "Любое состояние",
      description: "Покупаем даже неисправную технику",
    },
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Более 5 лет на рынке, тысячи довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <Card
              key={advantage.title}
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon
                    name={advantage.icon}
                    size={20}
                    className="text-white"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
