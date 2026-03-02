const Usuario = require('./src/models/Usuario');
const sequelize = require('./src/config/database');

async function createAdmin() {
  try {
    await sequelize.sync();
    
    const usuario = await Usuario.create({
      nome: 'Ramon Rocha',
      email: 'ramonrocha1989@gmail.com',
      senha: 'admin123',
      tipo: 'admin'
    });
    
    console.log('✅ Usuário admin criado com sucesso!');
    console.log('Email:', usuario.email);
    console.log('Senha: admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

createAdmin();
