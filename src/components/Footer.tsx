import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Laptop" size={24} className="text-primary" />
              <span className="text-xl font-bold">ТехноСкуп</span>
            </div>
            <p className="text-gray-400 mb-4">
              Покупаем компьютеры, ноутбуки и принтеры по выгодным ценам
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-gray-400 hover:text-primary cursor-pointer"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-gray-400 hover:text-primary cursor-pointer"
              />
              <Icon
                name="MessageCircle"
                size={20}
                className="text-gray-400 hover:text-primary cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-primary transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@technoskup.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Москва, работаем по всему городу</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Скупка компьютеров</li>
              <li>Скупка ноутбуков</li>
              <li>Скупка принтеров</li>
              <li>Выезд на дом</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <div className="space-y-2 text-gray-400">
              <div>Пн-Пт: 9:00 - 20:00</div>
              <div>Сб-Вс: 10:00 - 18:00</div>
              <div className="mt-4 text-primary">Выезд в день обращения!</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ТехноСкуп. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
