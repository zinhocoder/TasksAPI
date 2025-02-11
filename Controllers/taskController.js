const Task = require('../Models/Task');

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      status: status || 'incomplete',
    });

    await newTask.save();

    res.status(201).json(newTask);
  } catch (err) {
    console.error('Erro ao criar a tarefa:', err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Erro ao obter as tarefas:', err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error('Erro ao obter as tarefas:', err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();
    res.status(200).json(task);
  } catch (err) {
    console.error('Erro ao atualizar a tarefa:', err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

// Deletar uma tarefa
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    console.error('Erro ao deletar a tarefa:', err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
