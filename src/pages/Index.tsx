import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const characters = [
  {
    id: 1,
    name: "Зейн",
    title: "Ниндзя Льда",
    description: "Титановый ниндзя-дроид с чистым сердцем и невероятными способностями контроля над льдом",
    color: "bg-gradient-to-br from-blue-100 to-cyan-100",
    accent: "text-cyan-600",
    powers: ["Контроль льда", "Титановая броня", "Ледяное дыхание"],
    emoji: "❄️",
    image: "https://cdn.poehali.dev/projects/308496a9-4c1b-4ebc-8961-dbfb17227462/files/41d892c0-3091-4029-8c40-0483745a1666.jpg",
    personality: "Спокойный, мудрый и преданный. Зейн всегда готов помочь друзьям и защитить Ниндзяго.",
  },
  {
    id: 2,
    name: "ПИКСАЛ",
    title: "Помощница Ниндзя",
    description: "Искусственный интеллект с добрым сердцем, верная подруга Зейна и незаменимый помощник команды",
    color: "bg-gradient-to-br from-purple-100 to-pink-100",
    accent: "text-purple-600",
    powers: ["Киберинтеллект", "Техподдержка", "Связь с техникой"],
    emoji: "🤖",
    image: "https://cdn.poehali.dev/projects/308496a9-4c1b-4ebc-8961-dbfb17227462/files/55d6f4af-8838-4856-a274-493eec299ded.jpg",
    personality: "Умная, заботливая и отважная. ПИКСАЛ - настоящий друг, всегда готовый прийти на помощь.",
  },
];

export default function Index() {
  const [selectedChar, setSelectedChar] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="text-2xl px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white border-0 rounded-full">
              ✨ Магия Ниндзяго ✨
            </Badge>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Зейн & ПИКСАЛ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомься с удивительными героями Lego Ninjago в волшебном стиле My Little Pony! 🌈
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {characters.map((char, index) => (
            <Card
              key={char.id}
              className={`${char.color} border-4 border-white shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedChar(selectedChar === char.id ? null : char.id)}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <img 
                      src={char.image} 
                      alt={char.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg animate-float"
                    />
                    <div className="absolute -top-2 -right-2 text-5xl animate-bounce-soft">
                      {char.emoji}
                    </div>
                  </div>
                  <h2 className={`text-4xl font-bold mb-2 ${char.accent}`}>
                    {char.name}
                  </h2>
                  <Badge className="text-lg px-4 py-1 bg-white/70 text-gray-700 border-0">
                    {char.title}
                  </Badge>
                </div>

                <p className="text-center text-gray-700 mb-6 text-lg leading-relaxed">
                  {char.description}
                </p>

                <div className="space-y-4">
                  <div className="bg-white/50 rounded-2xl p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Icon name="Sparkles" size={20} className={char.accent} />
                      Способности:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {char.powers.map((power, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white text-gray-700 border-2 hover:scale-110 transition-transform"
                        >
                          {power}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedChar === char.id && (
                    <div className="bg-white/50 rounded-2xl p-4 animate-fade-in">
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Icon name="Heart" size={20} className={char.accent} />
                        Характер:
                      </h3>
                      <p className="text-gray-700">{char.personality}</p>
                    </div>
                  )}
                </div>

                <div className="text-center mt-6">
                  <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto">
                    <Icon name={selectedChar === char.id ? "ChevronUp" : "ChevronDown"} size={16} />
                    {selectedChar === char.id ? "Скрыть" : "Узнать больше"}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-3xl p-8 text-center shadow-xl border-4 border-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              💖 История дружбы 💖
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Зейн и ПИКСАЛ - это пример настоящей дружбы и взаимопомощи! Несмотря на то, 
              что оба они - роботы, их сердца полны доброты и сострадания к другим.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Вместе они преодолевают любые трудности, защищая мир Ниндзяго от зла. 
              Их история учит нас ценить дружбу, верность и никогда не сдаваться! 
            </p>
            <div className="flex justify-center gap-4 mt-6 text-4xl animate-float">
              ⭐ 🌈 ✨ 💫 🌟
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Icon name="Sparkles" size={20} className="text-purple-600" />
            <span className="text-gray-700 font-medium">Сделано с магией и любовью</span>
            <Icon name="Heart" size={20} className="text-pink-600" />
          </div>
        </div>
      </div>
    </div>
  );
}