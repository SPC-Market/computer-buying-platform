import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Laptop" size={32} className="text-[#1EAEDB]" />
            <span className="text-2xl font-bold text-gray-900">ТехноСкуп</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#categories"
              className="text-gray-600 hover:text-[#1EAEDB] transition-colors"
            >
              Категории
            </a>
            <a
              href="#advantages"
              className="text-gray-600 hover:text-[#1EAEDB] transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#evaluation"
              className="text-gray-600 hover:text-[#1EAEDB] transition-colors"
            >
              Оценка
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#1EAEDB] transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white">
            <Icon name="Phone" size={16} />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
