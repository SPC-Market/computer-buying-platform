import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Скупка цифровой техники
          <span className="block text-gray-900">
            и электроники в Краснодаре
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Скупаем компьютеры, ноутбуки и принтеры по лучшим ценам. Быстрая
          оценка, честная цена, выезд к вам домой.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Icon name="Calculator" size={20} />
            Узнать стоимость
          </Button>

          <a href="tel:+79123456789">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              <Icon name="Phone" size={20} />
              +7 (912) 345-67-89
            </Button>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Clock" size={24} className="text-gray-900" />
            <span className="text-lg">Оценка за 5 минут</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Truck" size={24} className="text-gray-900" />
            <span className="text-lg">Выезд в день обращения</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Icon name="Wallet" size={24} className="text-gray-900" />
            <span className="text-lg">Оплата сразу</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
