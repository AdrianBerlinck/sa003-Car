
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { modelo, cor, quantidade, portas } = body;

    if (!modelo || !cor || !quantidade || !portas) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    const novoVeiculo = await prisma.veicle.create({
      data: {
        id: uuidv4(),
        modelo,
        cor,
        quantidade,
        q_port: portas,
      },
    });

    return NextResponse.json(novoVeiculo, { status: 201 });
  } catch (error) {
    console.error('Erro ao salvar veículo:', error);
    return NextResponse.json({ error: 'Erro no servidor' }, { status: 500 });
  }
}
