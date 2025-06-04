import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const EvaluationForm = () => {
  return (
    <section
      id="evaluation"
      className="py-16 bg-gradient-to-br from-gray-100 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Быстрая оценка техники
          </h2>
          <p className="text-xl text-gray-600">
            Заполните форму и узнайте стоимость за 5 минут
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-primary text-white text-center rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center space-x-2">
              <Icon name="Calculator" size={24} />
              <span>Оценка техники</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип техники
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Выберите тип</option>
                    <option>Компьютер</option>
                    <option>Ноутбук</option>
                    <option>Принтер</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Бренд
                  </label>
                  <Input
                    placeholder="Apple, Dell, HP..."
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Модель
                  </label>
                  <Input
                    placeholder="MacBook Pro 13"
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Год выпуска
                  </label>
                  <Input
                    placeholder="2020"
                    type="number"
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Состояние
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Отличное</option>
                  <option>Хорошее</option>
                  <option>Удовлетворительное</option>
                  <option>Неисправное</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван"
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg">
                <Icon name="Send" size={20} />
                Получить оценку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EvaluationForm;
