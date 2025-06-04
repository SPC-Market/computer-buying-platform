import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Disposal = () => {
  return (
    <section
      id="disposal"
      className="py-16 bg-gradient-to-br from-orange-50 to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Утилизация компьютерной и оргтехники
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Безопасная и экологичная утилизация старой техники с полным
            уничтожением данных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Recycle" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Экологично</h3>
            <p className="text-gray-600">
              Соблюдение всех экологических стандартов при переработке техники
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Безопасно</h3>
            <p className="text-gray-600">
              Полное уничтожение данных и конфиденциальной информации
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="FileCheck" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Документооборот</h3>
            <p className="text-gray-600">
              Предоставляем все необходимые документы об утилизации
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Что мы утилизируем
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Компьютеры и системные блоки</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Ноутбуки и планшеты</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Принтеры и МФУ</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Мониторы и телевизоры</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Серверное оборудование</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span>Оргтехника любого типа</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-coral-600 rounded-lg p-6 text-white mb-6">
                <Icon name="Leaf" size={48} className="mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">
                  Бесплатная утилизация
                </h4>
                <p className="text-coral-100">
                  При покупке техники от 50 000 рублей
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg">
                <Icon name="Phone" size={16} />
                Заказать утилизацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disposal;
