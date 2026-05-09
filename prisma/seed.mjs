import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./dev.db'
    }
  }
})

async function main() {
  console.log("Seeding database...");

  // 1. Create Services
  const nursing = await prisma.service.upsert({
    where: { name: 'Nursing Care' },
    update: {},
    create: {
      name: 'Nursing Care',
      description: 'Professional medical care including wound dressing, injections, and vital monitoring.',
      category: 'Medical',
      basePrice: 50.0,
      icon: '🩺'
    },
  })

  const physio = await prisma.service.upsert({
    where: { name: 'Physiotherapy' },
    update: {},
    create: {
      name: 'Physiotherapy',
      description: 'Expert physiotherapists to help with mobility, pain relief, and post-surgery recovery.',
      category: 'Therapy',
      basePrice: 75.0,
      icon: '🏃‍♂️'
    },
  })

  const attendant = await prisma.service.upsert({
    where: { name: 'Attendant Services' },
    update: {},
    create: {
      name: 'Attendant Services',
      description: 'Compassionate attendants for daily activities, personal hygiene, and companionship.',
      category: 'Assistance',
      basePrice: 30.0,
      icon: '🤝'
    },
  })

  // 2. Create mock Caregiver
  const mockUser = await prisma.user.upsert({
    where: { email: 'sam.rodrigues@example.com' },
    update: { name: 'Sam Rodrigues' },
    create: {
      name: 'Sam Rodrigues',
      email: 'sam.rodrigues@example.com',
      role: 'CAREGIVER',
      passwordHash: 'hashed_password_placeholder', // Mock
    },
  })

  await prisma.caregiverProfile.upsert({
    where: { userId: mockUser.id },
    update: {},
    create: {
      userId: mockUser.id,
      qualifications: 'Registered Nurse (RN), BLS Certified',
      experienceYears: 8,
      verificationStatus: 'VERIFIED',
      hourlyRate: 55.0,
      serviceId: nursing.id,
    },
  })

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
