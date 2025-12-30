import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      title: 'Городской биокупол',
      description: 'Вертикальная экосистема для производства кислорода и очистки воздуха в густонаселенных районах',
      image: 'https://cdn.poehali.dev/projects/f57b9a3c-db1d-40da-9537-2192aa68d93a/files/fc119390-8385-4d99-a7be-d956e9cbabbf.jpg',
      icon: 'Building2',
      impact: 'Снижение CO₂ на 40%'
    },
    {
      title: 'Агро-биокупол',
      description: 'Модульная система для выращивания органических продуктов прямо в городе с гидропонными технологиями',
      image: 'https://cdn.poehali.dev/projects/f57b9a3c-db1d-40da-9537-2192aa68d93a/files/33370fbf-a134-4104-abdb-2ecd2df27e02.jpg',
      icon: 'Sprout',
      impact: 'Производство до 500 кг/месяц'
    },
    {
      title: 'Эко-павильон',
      description: 'Общественное пространство с замкнутой экосистемой — место для отдыха, работы и образования',
      image: 'https://cdn.poehali.dev/projects/f57b9a3c-db1d-40da-9537-2192aa68d93a/files/fc9d938e-28f3-43d5-aa5c-545aae61b8c8.jpg',
      icon: 'Trees',
      impact: 'Очистка 1000 л воды/день'
    },
    {
      title: 'Биоразнообразие Hub',
      description: 'Экосистема для восстановления и сохранения городского биоразнообразия с местными видами растений',
      image: 'https://cdn.poehali.dev/projects/f57b9a3c-db1d-40da-9537-2192aa68d93a/files/fc119390-8385-4d99-a7be-d956e9cbabbf.jpg',
      icon: 'Leaf',
      impact: '+60 видов флоры и фауны'
    }
  ];

  const team = [
    {
      name: 'Елена Зеленова',
      position: 'Главный эколог',
      description: 'Специалист по устойчивым городским экосистемам, 15 лет опыта в биоинженерии',
      icon: 'User'
    },
    {
      name: 'Дмитрий Лесной',
      position: 'Архитектор биокуполов',
      description: 'Проектирование модульных зеленых структур, лауреат премии Green Architecture 2023',
      icon: 'Users'
    },
    {
      name: 'Анна Воздухова',
      position: 'Специалист по климату',
      description: 'Эксперт по влиянию городской зелени на микроклимат и качество воздуха',
      icon: 'UserCheck'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru (2).png" 
              alt="EcoSynth" 
              className="h-12 md:h-14"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Решения</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-accent">
            Связаться
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-foreground mb-6 animate-fade-in">
              Умные экосистемы для городов будущего
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Проектируем модульные вертикальные биокупола с замкнутыми экосистемами — 
              производим кислород, выращиваем пищу, очищаем воздух и воду
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-primary hover:bg-accent text-lg px-8">
                <Icon name="Leaf" className="mr-2" size={20} />
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wind" className="text-primary mb-2" size={40} />
                <CardTitle className="font-montserrat">Очистка воздуха</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Наши биокупола снижают уровень CO₂ и производят чистый кислород для городской среды</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Droplets" className="text-primary mb-2" size={40} />
                <CardTitle className="font-montserrat">Замкнутый цикл воды</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Система рециркуляции и очистки воды работает автономно без внешних ресурсов</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="TreePine" className="text-primary mb-2" size={40} />
                <CardTitle className="font-montserrat">Биоразнообразие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Восстанавливаем городские экосистемы и создаём среду для местной флоры и фауны</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Наши решения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Модульные биокупола для разных потребностей городской среды
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    {service.impact}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-2xl font-montserrat">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты в области устойчивого развития и зелёных технологий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name={member.icon as any} className="text-white" size={48} />
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы создать умную экосистему для вашего города?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl">Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-32 border-2"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-accent">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Зелёная, д. 42, офис 301</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@ecosynth.com</p>
                </CardContent>
              </Card>
              <Card className="border-2 overflow-hidden">
                <div className="h-64 bg-muted relative">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.617644,55.755819&z=16&l=map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/logoza.ru (2).png" 
                  alt="EcoSynth" 
                  className="h-12 brightness-0 invert"
                />
              </div>
              <p className="text-white/70">Создаём зелёное будущее для городов</p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Решения</h3>
              <ul className="space-y-2 text-white/70">
                <li>Городские биокупола</li>
                <li>Агро-системы</li>
                <li>Эко-павильоны</li>
                <li>Биоразнообразие</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Команда</li>
                <li>Проекты</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Следите за нами</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Twitter" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Linkedin" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 EcoSynth. Все права защищены. Создано для устойчивого будущего.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;