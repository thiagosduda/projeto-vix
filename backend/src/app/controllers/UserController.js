import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'cpf', 'rg'],
    });

    res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro no cadastro, verifique todos os campos' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário ja existe' });
    }

    const { id, name, email, rg, cpf } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      rg,
      cpf,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      cpf: Yup.string(),
      rg: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro na atualização dos dados, confira todos os campos',
      });
    }

    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(400).json({ error: 'ID de usuário invalida' });

    const { email } = req.body;

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'Este email ja esta cadastrado!' });
      }
    }

    await user.update(req.body);

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'Id de usuário invalida' });
    }

    await user.destroy();

    const users = await User.findAll();
    return res.json(users);
  }
}

export default new UserController();
