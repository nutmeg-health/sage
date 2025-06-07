'use client'
import { useState } from 'react'
import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anna Ruben",
    position: "CEO, Co-Founder",
    image: "/team/anna.jpg", // Add your image paths here
    description: "Mom, Wife, Nurse and nutrition advocate -Anna has been leading a health Forward lifestyle since she was 16 years old. She has always seen food as medicine and enjoyed time spent in the kitchen, only to realize others don't as much, and she wanted to change that. Anna maintains a BS from Michigan State in biomedical nutrition, BSN, and certifications in gut and hormone health from IIN. "
  },
  {
    id: 2,
    name: "Sawyer Ruben",
    position: "Co-Founder",
    image: "/team/sawyer.jpg", // Add your image paths here
    description: "Father, Husband ,and supporter of whatever his wife wants to do - Sawyer has always led a health forward lifestyle as well. Sawyer spends full-time working as a software engineer but has always wanted to make a more positive impact for people in his community. He wanted to help create Nutmeg health to help families regain their confidence in what they are nourishing themselves with. "
  },
]

export default function Team() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const handleCardClick = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-orange-950 mb-8 text-sage-800 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="relative h-[450px] w-full perspective-1000"
            onClick={() => handleCardClick(member.id)}
          >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
              flippedCards.includes(member.id) ? 'rotate-y-180' : ''
            }`}>
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="bg-nutmeg-100 p-8 rounded-2xl shadow-lg h-full border border-sage-200">
                  <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-sage-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl text-orange-950 font-semibold mb-2 text-center text-sage-800">{member.name}</h3>
                  <p className="text-sage-600 text-orange-950 text-center text-lg">{member.position}</p>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="bg-sage-100 p-8 rounded-2xl shadow-lg h-full flex items-center justify-center border border-sage-200">
                  <p className="text-sage-700 text-orange-950 text-lg leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 